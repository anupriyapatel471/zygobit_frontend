/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { Input } from "../../components/ui/input";
import Rocket from "../../../public/images/contact_btn.svg";
import { generateClient } from "aws-amplify/data";
import { useState } from "react";
import useAmplifyConfig from "@/hooks/useAmplify";
import toast from "react-hot-toast";
import {
  validateBudget,
  validateEmail,
  validateName,
  validatePhoneNumber,
} from "@/lib/utils";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { Textarea } from "@/components/ui/textarea";

type phoneNumber = {
  number: string;
  dialCode: string;
};

type FormDataType = {
  firstName: string;
  lastName: string;
  phoneNumber: phoneNumber;
  jobTitle: string;
  companyName: string;
  companyEmail: string;
  launchDate: string;
  budget: string;
  projectDetails: string;
};

const client = generateClient();

const ConnectForm = () => {
  useAmplifyConfig();

  const [loading, setLoading] = useState(false);

  const initialState = {
    firstName: "",
    lastName: "",
    phoneNumber: {
      number: "",
      dialCode: "",
    },
    jobTitle: "",
    companyName: "",
    companyEmail: "",
    launchDate: "",
    budget: "",
    projectDetails: "",
  };

  const [formData, setFormData] = useState<FormDataType>(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const {
      firstName,
      lastName,
      phoneNumber: { number, dialCode },
      jobTitle,
      companyName,
      companyEmail,
      launchDate,
      budget,
      projectDetails,
    } = formData;

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !jobTitle.trim() ||
      !companyName.trim() ||
      !companyEmail.trim() ||
      !launchDate.trim() ||
      !budget.trim() ||
      !projectDetails.trim()
    ) {
      toast.error("Please fill in all fields.");
      return false;
    }
    if (!validateName(firstName)) {
      toast.error("Invalid first name.");
      return false;
    }
    if (!validateName(lastName)) {
      toast.error("Invalid last name.");
      return false;
    }
    if (!validatePhoneNumber(number)) {
      toast.error("Phone number must be between 7 and 10 digits.");
      return false;
    }
    if (!(dialCode && number)) {
      toast.error("Please enter a valid phone number or country code.");
      return false;
    }

    if (!validateName(companyName)) {
      toast.error("Invalid company name.");
      return false;
    }
    if (!validateName(jobTitle)) {
      toast.error("Invalid job Title.");
      return false;
    }
    if (!validateEmail(companyEmail)) {
      toast.error("Invalid email address.");
      return false;
    }
    if (!validateBudget(budget)) {
      toast.error("Invalid budget format.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    setLoading(true);
    try {
      await (client.queries as any).sendEmailContactForm({
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber.number,
        dialCode: formData.phoneNumber.dialCode,
        jobTitle: formData.jobTitle,
        companyName: formData.companyName,
        companyEmail: formData.companyEmail,
        launchDate: formData.launchDate,
        budget: formData.budget,
        projectDetails: formData.projectDetails,
      });
      // const savedRecord = await client.models.ContactRequest.create({
      //   ...formData,
      //   id: v4(),
      //   createdAt: new Date().toISOString(),
      //   updatedAt: new Date().toISOString(),
      // });
      // console.log("Saved record:", savedRecord);
      // toast.success("Saved record");

      toast.success(
        "Thanks for reaching out to us. we will contact contact you shortly!"
      );
    } catch (error) {
      console.error("Error saving data to DynamoDB:", error);
      toast.error("Error saving data to DynamoDB");
    } finally {
      setLoading(false);
      setFormData(initialState);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-auto lg:px-0" noValidate>
      <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl  text-gradiant-custom-second">
        Let’s connect
      </h2>
      <p className="text-sm sm:text-lg tracking-tighter pt-2 pb-5 sm:pb-7">
        Let&apos;s align our constellations! Reach out and let the magic of
        collaboration illuminate our skies.
      </p>
      <div className="w-full grid grid-cols-1 gap-3">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="form-item relative">
            <Input
              name="firstName"
              id="firstName"
              placeholder="First Name"
              className="bg-white/5 h-10 md:h-10  border-white/20"
              autoComplete="off"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="form-item relative">
            <Input
              name="lastName"
              id="lastName"
              className="bg-white/5 h-10 md:h-10 border-white/20"
              placeholder="Last Name"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="relative h-10 sm:h-auto">
            <Input
              type="number"
              className="absolute left-0 top-0 opacity-0 w-full h-10 md:h-11 lg:h-11"
            />
            <PhoneInput
              international
              defaultCountry="IN"
              placeholder="Enter phone number"
              value={
                formData.phoneNumber?.number && formData.phoneNumber?.dialCode
                  ? `+${formData.phoneNumber.dialCode}${formData.phoneNumber.number}`
                  : ""
              }
              onChange={(value) => {
                const phoneNumber = parsePhoneNumberFromString(value || "");

                if (phoneNumber) {
                  setFormData((prev) => ({
                    ...prev,
                    phoneNumber: {
                      dialCode: phoneNumber.countryCallingCode,
                      number: phoneNumber.nationalNumber,
                    },
                  }));
                }
              }}
              className="h-10 md:h-11 lg:h-11 custom-phone-input absolute top-0 left-0 w-full"
            />
          </div>
          <div className="form-item relative">
            <Input
              name="jobTitle"
              id="jobTitle"
              className="bg-white/5 h-10 md:h-10 border-white/20"
              placeholder="Job Title"
              type="text"
              value={formData.jobTitle}
              onChange={handleChange}
            />
            <label htmlFor="jobTitle">Job Title</label>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="form-item relative">
            <Input
              name="companyName"
              id="companyName"
              className="bg-white/5 h-10 md:h-10 border-white/20"
              placeholder="Company Name"
              type="text"
              value={formData.companyName}
              onChange={handleChange}
            />
            <label htmlFor="companyName">Company Name</label>
          </div>
          <div className="form-item relative">
            <Input
              name="companyEmail"
              id="companyEmail"
              placeholder="Company Email"
              className="bg-white/5 h-10 md:h-10 border-white/20"
              type="email"
              value={formData.companyEmail}
              onChange={handleChange}
            />
            <label htmlFor="companyEmail">Company Email</label>
          </div>
        </div>
        <div className="w-full">
          <div className="form-item relative">
            <Input
              className="bg-white/5 h-10 md:h-10 border-white/20"
              name="launchDate"
              id="launchDate"
              placeholder="When do you want to launch a solution?"
              type="text"
              value={formData.launchDate}
              onChange={handleChange}
            />
            <label htmlFor="launchDate">
              When do you want to launch a solution?
            </label>
          </div>
        </div>
        <div className="w-full">
          <div className="form-item relative">
            <Input
              className="bg-white/5 h-10 md:h-10 border-white/20"
              name="budget"
              id="budget"
              placeholder="Budget"
              type="text"
              value={formData.budget}
              onChange={handleChange}
            />
            <label htmlFor="budget">Budget :</label>
          </div>
        </div>
        <div className="w-full">
          <div className="form-item relative">
            <Textarea
              name="projectDetails"
              placeholder="About Project"
              id="projectDetails"
              className="resize-none w-full bg-white/5  text-sm sm:text-base h-20 md:h-20 lg:h-32 border border-white/20  p-3 rounded-md outline-none"
              value={formData.projectDetails}
              onChange={handleChange}
            />
            <label htmlFor="projectDetails">About Project</label>
          </div>
        </div>
        <button
          type="submit"
          className="group bg-gradient-custom overflow-hidden font-medium transition-all duration-500 btn-primary text-white relative"
          disabled={loading}
          name="action"
          value="lets_build"
        >
          {loading ? "Submitting..." : "Let’s Build"}
          <Image
            className="group-hover:translate-x-5 transition-all duration-1000"
            src={Rocket}
            alt="Rocket Icon"
            width={13.73}
            height={28.59}
          />
          <BottomGradient />
        </button>
      </div>
    </form>
  );
};

export default ConnectForm;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
