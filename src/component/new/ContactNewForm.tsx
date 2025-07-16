/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Rocket from "../../../public/images/rocket.svg";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-number-input";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { Button } from "@/components/ui/button";

import { validateBudget, validateName, validatePhoneNumber } from "@/lib/utils";
import { generateClient } from "aws-amplify/api";
import { ContactAKnowledge } from "./ContactKnowledge";
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

export function ContactnewForm({ formOpen }: { formOpen?: string }) {
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
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
      companyName,
      budget,
      projectDetails,
    } = formData;

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !companyName.trim() ||
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

        companyName: formData.companyName,
        companyEmail: formData.companyEmail,
        budget: formData.budget,
        projectDetails: formData.projectDetails,
      });
      setIsSubmitted(true);
      setIsDialogOpen(true);
    } catch (error) {
      console.error("Error saving data to DynamoDB:", error);
      toast.error("Error saving data to DynamoDB");
    } finally {
      setLoading(false);
      setFormData(initialState);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          {formOpen === "gridButton" ? (
            <Button className="absolute transition-all duration-300 top-4 right-4 lg:top-10 lg:right-10 border-2 border-white bg-transparent hover:bg-transparent group-hover:rotate-0 -rotate-45 w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 rounded-full p-0 sm:p-0">
              <Image
                width={28}
                height={28}
                className="w-5 h-5 lg:w-7 lg:h-7"
                src="/images/why_arrow.svg"
                alt="arrow"
              />
            </Button>
          ) : formOpen === "deliveringTailored" ? (
            <Button className="bg-transparent group transition-all duration-500 hover:bg-transparent p-0 w-7 h-7 border border-white rounded-full">
              <Image
                width={10}
                height={10}
                className="w-4 group-hover:rotate-[45deg] transition-all duration-500 h-4 object-contain"
                src="/images/up_arrow.svg"
                alt="arrow icon"
              />
            </Button>
          ) : (
            <div>
              <div className="">
                <button
                  className="pulse-button-contact"
                  aria-label="Open contact form"
                >
                  <span></span>
                </button>
              </div>
            </div>
          )}
        </DialogTrigger>
        <DialogContent className="max-w-[90%] lg:max-w-[1150px] rounded-xl p-0 z-[9999]">
          <form onSubmit={handleSubmit}>
            <div className="w-full flex gap-10">
              <div className="hidden sm:inline w-2/5 p-5 relative">
                <Image
                  className="w-[325px] object-contain"
                  src="/images/form_g.svg"
                  width={325}
                  height={485}
                  alt="icon"
                />
                <Image src="/images/form_bg.png" fill alt="background image" />
              </div>
              <div className="w-full sm:w-3/5 p-4 sm:p-10 sm:pl-0">
                <h2 className="font-bold text-2xl sm:text-[34px] text-black mb-2">
                  Let’s connect to{" "}
                  <span className="text-orange-600">
                    succeed your Business!
                  </span>
                </h2>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="form-item new-form-item relative">
                    <Input
                      name="firstName"
                      id="firstName"
                      placeholder=" "
                      className="bg-black/5 placeholder:text-black/60 text-black border-black/20 text-xs lg:text-xs h-10 sm:h-11 font-normal"
                      autoComplete="off"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    <label htmlFor="firstName">First Name</label>
                  </div>
                  <div className="form-item new-form-item relative">
                    <Input
                      name="lastName"
                      id="lastName"
                      placeholder=" "
                      className="bg-black/5 placeholder:text-black/60 text-black border-black/20 text-xs lg:text-xs h-10 sm:h-11 font-normal"
                      type="text"
                      autoComplete="off"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    <label htmlFor="lastName">Last Name</label>
                  </div>

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
                        formData.phoneNumber?.number &&
                        formData.phoneNumber?.dialCode
                          ? `+${formData.phoneNumber.dialCode}${formData.phoneNumber.number}`
                          : ""
                      }
                      onChange={(value) => {
                        const phoneNumber = parsePhoneNumberFromString(
                          value || ""
                        );

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
                      className="h-10 md:h-11 lg:h-11 form-input absolute top-0 left-0 w-full"
                    />
                  </div>
                  <div className="form-item new-form-item relative">
                    <Input
                      id="companyEmail"
                      autoComplete="off"
                      name="companyEmail"
                      className="bg-black/5 placeholder:text-black/60 text-black border-black/20 text-xs lg:text-xs h-10 sm:h-11 font-normal"
                      placeholder=" "
                      type="email"
                      value={formData.companyEmail}
                      onChange={handleChange}
                    />
                    <label htmlFor="companyEmail">Company Email</label>
                  </div>
                  <div className="form-item new-form-item relative">
                    <Input
                      id="companyName"
                      name="companyName"
                      autoComplete="off"
                      className="bg-black/5 placeholder:text-black/60 text-black border-black/20 text-xs lg:text-xs h-10 sm:h-11 font-normal"
                      placeholder=" "
                      type="text"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                    <label htmlFor="companyName">Company Name</label>
                  </div>
                  <div className="form-item new-form-item relative">
                    <Input
                      name="budget"
                      id="budget"
                      className="bg-black/5 placeholder:text-black/60 text-black  border-black/20 text-xs lg:text-xs h-10 sm:h-11 font-normal"
                      placeholder=" "
                      type="text"
                      autoComplete="off"
                      value={formData.budget}
                      onChange={handleChange}
                    />
                    <label htmlFor="budget">Budget :</label>
                  </div>
                  <div className="form-item new-form-item col-span-1 sm:col-span-2 relative">
                    <textarea
                      className="resize-none placeholder:text-black/60 text-black bg-black/5  w-full text-xs lg:text-xs h-16 md:h-20 lg:h-32 border border-black/20 p-3 rounded-md outline-none"
                      placeholder=" "
                      name="projectDetails"
                      autoComplete="off"
                      id="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                    ></textarea>
                    <label htmlFor="projectDetails">About Project</label>
                  </div>

                  <ContactAKnowledge
                    loading={loading}
                    isSubmitted={isSubmitted}
                    setIsSubmitted={setIsSubmitted}
                    isDialogOpen={isDialogOpen}
                    setIsDialogOpen={setIsDialogOpen}
                  />
                </div>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
