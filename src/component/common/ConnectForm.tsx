/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { Input, TextArea } from "../../components/ui/contactInput";
import Rocket from "../../../public/images/rocket.svg";
import { generateClient } from "aws-amplify/data";
import { useState } from "react";
import useAmplifyConfig from "@/hooks/useAmplify";
import toast from "react-hot-toast";
import { validateEmail, validatePhoneNumber } from "@/lib/utils";

const client = generateClient();

const ConnectForm = () => {
  useAmplifyConfig();

  const [loading, setLoading] = useState(false);

  const initialState = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    jobTitle: "",
    companyName: "",
    companyEmail: "",
    launchDate: "",
    budget: "",
    projectDetails: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    if (name === "phoneNumber") {
      const numericValue = value.replace(/\D/g, "");
      if (numericValue.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: numericValue }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const {
      firstName,
      lastName,
      phoneNumber,
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
      !phoneNumber.trim() ||
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
    if (!validateEmail(companyEmail)) {
      toast.error("Invalid email address.");
      return false;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      toast.error("Phone number must be between 7 and 10 digits.");
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
        phoneNumber: formData.phoneNumber,
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
        "Thanks for reaching out to us. The concerned person will contact you shortly !"
      );
    } catch (error) {
      console.error("Error saving data to DynamoDB:", error);
    } finally {
      setLoading(false);
      setFormData(initialState);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      data-aos="fade-left"
      className="w-auto lg:px-0"
      noValidate
    >
      <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl text-gradiant-custom">
        Let’s connect
      </h2>
      <p className="text-sm sm:text-lg tracking-tighter pt-2 pb-5 sm:pb-10">
        Let&apos;s align our constellations! Reach out and let the magic of
        collaboration illuminate our skies.
      </p>
      <div className="w-full grid grid-cols-1 gap-4">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            name="firstName"
            placeholder="First Name"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
          />
          <Input
            name="lastName"
            placeholder="Last Name"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            name="phoneNumber"
            placeholder="Phone Number"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            maxLength={10}
          />

          <Input
            name="jobTitle"
            placeholder="Job Title"
            type="text"
            value={formData.jobTitle}
            onChange={handleChange}
          />
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            name="companyName"
            placeholder="Company Name"
            type="text"
            value={formData.companyName}
            onChange={handleChange}
          />
          <Input
            name="companyEmail"
            placeholder="Company Email"
            type="email"
            value={formData.companyEmail}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <Input
            name="launchDate"
            placeholder="When do you want to launch a solution?"
            type="text"
            value={formData.launchDate}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <Input
            name="budget"
            placeholder="Budget :"
            type="text"
            value={formData.budget}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <TextArea
            name="projectDetails"
            className="resize-none w-full text-sm sm:text-base h-16 md:h-20 lg:h-32 border border-white/20 bg-zinc-800 p-3 rounded-md outline-none"
            placeholder="About Project"
            value={formData.projectDetails}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="group bg-gradient-custom overflow-hidden font-medium transition-all duration-500 btn-primary text-white relative"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Let’s Build"}
          <Image
            className="group-hover:translate-x-64 transition-all duration-1000"
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
