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

export function ContactAKnowledge({ formOpen }: { formOpen?: string }) {
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
    console.log(formData);
    setLoading(true);
    try {
      await (client.queries as any).sendEmailContactForm({
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber.number,
        dialCode: formData.phoneNumber.dialCode,

        companyName: formData.companyName,

        budget: formData.budget,
        projectDetails: formData.projectDetails,
      });
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
              <button className="pulse-button-contact">
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
            <div className="w-full sm:w-3/5 p-6 sm:p-10 sm:pl-0">
              <div className="text-center w-full  sm:w-[400px] mx-auto lg:mt-28">
                <h2 className="font-bold lg:whitespace-nowrap text-2xl sm:text-[34px] text-black mb-4">Thanks for reaching out!</h2>
                <p className="text-black text-sm sm:text-base">Our team will get back to you shortly.</p>
                <p className="text-black text-sm sm:text-base pb-4">
                  We appreciate your interest and look forward to connecting
                  with you.
                </p>
                <button
                  type="submit"
                  className="group bg-orange-600 hover:bg-orange-500 sm:h-12 col-span-1 sm:col-span-2 w-full overflow-hidden font-medium transition-all duration-500 btn-primary text-white relative"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
