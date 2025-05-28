"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
import ContactForm from "../common/ContactForm/ContactForm";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ProjectData {
  projectName: ReactNode;
  subTitle: ReactNode;
  title: string;
  description: string;
  mobileImage?: string;
  clientLocation?: string;
  developmentTime?: string;
  targetUsers?: string;
  technologyDescription?: string;
  technologyImages: [{ ImageUrl: string; ImageName: string }];
  evaluationDescription?: string;
  evaluationImage?: string;
  developmentDescription?: string;
  adminData?: { image: string; data: string[] };
  themeColor?: { bgGradientOne: string; bgGradientTwo: string };
  projectLogo: string;
  testColor: string;
  mockupImage?: string;
  features?: string[];
  projectIdea: string;
  theSolution: string;
}

const ClientCaseStudy = ({ projectData }: { projectData: ProjectData }) => {
  const router = useRouter();

  const cardData = [
    {
      title: "Client",
      subtitle: "John Doe",
      svg: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="w-10 mx-auto h-10 "
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.5 28.7783C22.5 27.1135 23.1612 25.5168 24.3383 24.3395C25.5153 23.1621 27.1118 22.5004 28.7767 22.5H30.3333C31.0556 22.5 31.7708 22.6423 32.4381 22.9187C33.1054 23.1951 33.7117 23.6002 34.2224 24.1109C34.7331 24.6216 35.1383 25.228 35.4147 25.8952C35.6911 26.5625 35.8333 27.2777 35.8333 28V30.3833C35.8341 30.9125 35.6691 31.4287 35.3616 31.8593C35.054 32.29 34.6193 32.6135 34.1185 32.7845C33.6177 32.9555 33.0759 32.9653 32.5692 32.8127C32.0625 32.66 31.6163 32.3525 31.2933 31.9333C30.9828 32.2457 30.6135 32.4934 30.2067 32.6622C29.7999 32.831 29.3637 32.9175 28.9233 32.9167C26.9183 32.9167 25.4166 31.1667 25.4166 29.1667C25.4166 27.1667 26.9183 25.4167 28.9233 25.4167C29.625 25.4167 30.2667 25.6317 30.8017 25.9967C30.8614 25.8064 30.9875 25.6439 31.1568 25.5387C31.3262 25.4334 31.5277 25.3924 31.7248 25.4231C31.9218 25.4537 32.1013 25.554 32.2307 25.7058C32.3601 25.8575 32.4308 26.0506 32.43 26.25V30.3833C32.43 30.6136 32.5215 30.8345 32.6843 30.9973C32.8472 31.1602 33.068 31.2517 33.2983 31.2517C33.5286 31.2517 33.7495 31.1602 33.9123 30.9973C34.0752 30.8345 34.1667 30.6136 34.1667 30.3833V28C34.1667 27.4966 34.0675 26.9981 33.8749 26.5331C33.6822 26.068 33.3999 25.6454 33.0439 25.2894C32.6879 24.9335 32.2654 24.6511 31.8003 24.4585C31.3352 24.2658 30.8367 24.1667 30.3333 24.1667H28.7767C27.5539 24.1671 26.3813 24.6532 25.5168 25.518C24.6523 26.3828 24.1666 27.5555 24.1666 28.7783V29.1667C24.1666 29.8233 24.296 30.4735 24.5473 31.0801C24.7985 31.6867 25.1668 32.2379 25.6311 32.7022C26.0954 33.1665 26.6466 33.5348 27.2532 33.7861C27.8599 34.0373 28.51 34.1667 29.1667 34.1667C29.5711 34.1611 29.975 34.1295 30.375 34.0717C30.7067 34.0217 31.0433 33.955 31.3367 33.8567C31.5539 33.7975 31.7568 33.6948 31.9333 33.555C32.0962 33.4086 32.3101 33.3322 32.5288 33.3423C32.7475 33.3524 32.9535 33.4481 33.1022 33.6088C33.2509 33.7696 33.3303 33.9824 33.3233 34.2012C33.3164 34.4201 33.2236 34.6274 33.065 34.7783C32.715 35.1033 32.265 35.305 31.8583 35.44C31.4417 35.5767 31.0017 35.665 30.6133 35.72C30.1383 35.7922 29.6588 35.8301 29.1783 35.8333H29.1667C27.3985 35.8333 25.7028 35.131 24.4526 33.8807C23.2024 32.6305 22.5 30.9348 22.5 29.1667V28.7783ZM30.7633 29.1667C30.7633 27.9467 29.8717 27.0833 28.9233 27.0833C27.975 27.0833 27.0833 27.9467 27.0833 29.1667C27.0833 30.3867 27.9733 31.25 28.9233 31.25C29.8733 31.25 30.7633 30.3867 30.7633 29.1667ZM16.6666 6.25C14.49 6.25 12.7833 7.96 12.7833 10C12.7833 12.04 14.4933 13.75 16.6666 13.75C18.84 13.75 20.5466 12.04 20.5466 10C20.5466 7.96 18.84 6.25 16.6666 6.25ZM10.2833 10C10.2833 6.51667 13.1716 3.75 16.6666 3.75C20.1616 3.75 23.045 6.51667 23.045 10C23.045 13.4833 20.16 16.25 16.6666 16.25C13.1733 16.25 10.2833 13.4833 10.2833 10ZM12.4516 19.9433C12.15 19.7483 11.92 19.7367 11.8133 19.765C11.5733 19.8317 11.335 19.9028 11.0983 19.9783L9.45831 20.5033C8.89678 20.6766 8.38332 20.9782 7.95863 21.3844C7.53395 21.7906 7.20972 22.2901 7.01165 22.8433C6.9667 22.9909 6.93765 23.1429 6.92498 23.2967L6.27331 29.4617L6.26998 29.4833C6.14498 30.3617 6.61331 31.0333 7.32498 31.2C9.11998 31.6167 12.1433 32.0833 16.6666 32.0833C16.9982 32.0833 17.3161 32.215 17.5505 32.4495C17.785 32.6839 17.9166 33.0018 17.9166 33.3333C17.9166 33.6649 17.785 33.9828 17.5505 34.2172C17.3161 34.4516 16.9982 34.5833 16.6666 34.5833C11.9716 34.5833 8.75665 34.0967 6.75998 33.6333C4.61165 33.135 3.52498 31.1167 3.79165 29.155L4.43831 23.0333C4.46831 22.7467 4.52165 22.3917 4.64831 22.0267C4.97336 21.1065 5.50829 20.2747 6.2107 19.5971C6.9131 18.9196 7.76367 18.415 8.69498 18.1233L10.3366 17.5967C10.6055 17.5111 10.8766 17.4306 11.15 17.355C12.1683 17.075 13.1366 17.41 13.81 17.845C14.4266 18.245 15.4333 18.7267 16.6666 18.7267C17.9016 18.7267 18.9083 18.2433 19.525 17.8433C20.1983 17.41 21.1666 17.075 22.185 17.355C22.4572 17.4306 22.7283 17.5111 22.9983 17.5967L24.64 18.1233C24.7995 18.1707 24.948 18.2495 25.0767 18.355C25.2054 18.4606 25.3117 18.5907 25.3894 18.7379C25.4671 18.8851 25.5147 19.0463 25.5292 19.2121C25.5438 19.3778 25.5252 19.5449 25.4743 19.7033C25.4235 19.8618 25.3415 20.0086 25.2333 20.1349C25.125 20.2613 24.9925 20.3648 24.8437 20.4393C24.6949 20.5138 24.5327 20.5579 24.3666 20.5689C24.2006 20.5799 24.034 20.5576 23.8766 20.5033L22.2366 19.9783C21.9998 19.9024 21.7614 19.8313 21.5216 19.765C21.415 19.7367 21.185 19.7483 20.8833 19.9433C20.0283 20.4967 18.55 21.2267 16.6666 21.2267C14.7833 21.2267 13.3066 20.4967 12.4516 19.9433Z"
            fill={projectData?.testColor}
            // fill="black"
          />
        </svg>
      ),
    },
    {
      title: "Services",
      subtitle: "Live Chat Integration",
      svg: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="w-10 mx-auto h-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.667 15C30.0837 15 28.7087 14.5278 27.542 13.5834C26.3753 12.6389 25.5976 11.4445 25.2087 10H14.7503C14.4448 11.1667 13.8687 12.1739 13.022 13.0217C12.1753 13.8695 11.1681 14.4456 10.0003 14.75V25.2084C11.4448 25.5972 12.6392 26.375 13.5837 27.5417C14.5281 28.7084 15.0003 30.0834 15.0003 31.6667C15.0003 33.5 14.3475 35.0695 13.042 36.375C11.7364 37.6806 10.167 38.3334 8.33366 38.3334C6.50033 38.3334 4.93088 37.6806 3.62533 36.375C2.31977 35.0695 1.66699 33.5 1.66699 31.6667C1.66699 30.0834 2.13921 28.7084 3.08366 27.5417C4.0281 26.375 5.22255 25.5972 6.66699 25.2084V14.75C5.22255 14.3611 4.0281 13.5834 3.08366 12.4167C2.13921 11.25 1.66699 9.88891 1.66699 8.33335C1.66699 6.50002 2.31977 4.93058 3.62533 3.62502C4.93088 2.31946 6.50033 1.66669 8.33366 1.66669C9.88922 1.66669 11.2503 2.13891 12.417 3.08335C13.5837 4.0278 14.3614 5.22224 14.7503 6.66669H25.2087C25.5976 5.22224 26.3753 4.0278 27.542 3.08335C28.7087 2.13891 30.0837 1.66669 31.667 1.66669C33.5003 1.66669 35.0698 2.31946 36.3753 3.62502C37.6809 4.93058 38.3337 6.50002 38.3337 8.33335C38.3337 10.1667 37.6809 11.7361 36.3753 13.0417C35.0698 14.3472 33.5003 15 31.667 15ZM8.33366 35C9.25033 35 10.0353 34.6667 10.6887 34C11.342 33.3334 11.6681 32.5556 11.667 31.6667C11.667 30.75 11.3409 29.9656 10.6887 29.3134C10.0364 28.6611 9.25144 28.3345 8.33366 28.3334C7.44477 28.3334 6.66699 28.66 6.00033 29.3134C5.33366 29.9667 5.00033 30.7511 5.00033 31.6667C5.00033 32.5556 5.33366 33.3334 6.00033 34C6.66699 34.6667 7.44477 35 8.33366 35ZM8.33366 11.6667C9.25033 11.6667 10.0353 11.3406 10.6887 10.6884C11.342 10.0361 11.6681 9.25113 11.667 8.33335C11.6659 7.41558 11.3398 6.63113 10.6887 5.98002C10.0375 5.32891 9.25255 5.00224 8.33366 5.00002C7.44477 5.00002 6.66699 5.32669 6.00033 5.98002C5.33366 6.63335 5.00033 7.4178 5.00033 8.33335C5.00033 9.24891 5.33366 10.0339 6.00033 10.6884C6.66699 11.3428 7.44477 11.6689 8.33366 11.6667ZM31.667 38.3334C29.8337 38.3334 28.2642 37.6806 26.9587 36.375C25.6531 35.0695 25.0003 33.5 25.0003 31.6667C25.0003 29.8334 25.6531 28.2639 26.9587 26.9584C28.2642 25.6528 29.8337 25 31.667 25C33.5003 25 35.0698 25.6528 36.3753 26.9584C37.6809 28.2639 38.3337 29.8334 38.3337 31.6667C38.3337 33.5 37.6809 35.0695 36.3753 36.375C35.0698 37.6806 33.5003 38.3334 31.667 38.3334ZM31.667 35C32.5837 35 33.3687 34.6667 34.022 34C34.6753 33.3334 35.0014 32.5556 35.0003 31.6667C35.0003 30.75 34.6742 29.9656 34.022 29.3134C33.3698 28.6611 32.5848 28.3345 31.667 28.3334C30.7492 28.3322 29.9648 28.6589 29.3137 29.3134C28.6625 29.9678 28.3359 30.7522 28.3337 31.6667C28.3337 32.5556 28.6603 33.3334 29.3137 34C29.967 34.6667 30.7514 35 31.667 35ZM31.667 11.6667C32.5837 11.6667 33.3687 11.3406 34.022 10.6884C34.6753 10.0361 35.0014 9.25113 35.0003 8.33335C34.9992 7.41558 34.6731 6.63113 34.022 5.98002C33.3709 5.32891 32.5859 5.00224 31.667 5.00002C30.7481 4.9978 29.9637 5.32447 29.3137 5.98002C28.6637 6.63558 28.337 7.42002 28.3337 8.33335C28.3303 9.24669 28.657 10.0317 29.3137 10.6884C29.9703 11.345 30.7548 11.6711 31.667 11.6667Z"
            fill={projectData?.testColor}
            // fill="black"
          />
        </svg>
      ),
    },
    {
      title: "Business Type",
      subtitle: "FemTech",
      svg: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="w-10 mx-auto h-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.6473 11.3685C23.4505 10.8112 23.0857 10.3286 22.6031 9.98732C22.1206 9.64601 21.5441 9.46275 20.953 9.4628H18.7445C18.1163 9.46456 17.5109 9.69799 17.0441 10.1184C16.5774 10.5388 16.2821 11.1166 16.2149 11.7411C16.1476 12.3657 16.3132 12.9931 16.6797 13.5032C17.0463 14.0133 17.5882 14.3702 18.2016 14.5057L21.5673 15.2399C22.259 15.3874 22.8714 15.7862 23.2861 16.3591C23.7007 16.9321 23.8882 17.6384 23.8121 18.3416C23.736 19.0447 23.4018 19.6947 22.8743 20.1657C22.3467 20.6367 21.6631 20.8952 20.9559 20.8914H19.053C18.462 20.8914 17.8855 20.7082 17.4029 20.3668C16.9204 20.0255 16.5556 19.543 16.3588 18.9857M20.0016 9.4628V6.60565M20.0016 23.7485V20.8914"
            stroke={projectData?.testColor}
            // stroke="black"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.2871 38.5713H25.7157M32.8585 14.3742C32.8744 12.0792 32.2756 9.82181 31.1245 7.83638C29.9733 5.85094 28.3117 4.20982 26.3121 3.08339C24.3126 1.95697 22.0479 1.38629 19.7533 1.43062C17.4588 1.47495 15.2179 2.13266 13.2633 3.33547C11.3087 4.53829 9.71172 6.24236 8.6381 8.27077C7.56449 10.2992 7.05339 12.578 7.15786 14.8706C7.26233 17.1633 7.97857 19.3862 9.23222 21.3085C10.4859 23.2309 12.2312 24.7827 14.2871 25.8027V30.0884C14.2871 30.4673 14.4376 30.8307 14.7055 31.0986C14.9734 31.3665 15.3368 31.517 15.7157 31.517H24.2871C24.666 31.517 25.0293 31.3665 25.2972 31.0986C25.5651 30.8307 25.7157 30.4673 25.7157 30.0884V25.8027C27.8513 24.7505 29.6512 23.1235 30.913 21.1046C32.1748 19.0857 32.8486 16.7549 32.8585 14.3742Z"
            stroke={projectData?.testColor}
            // stroke="black"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Project Duration",
      subtitle: projectData?.developmentTime,
      svg: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="w-10 mx-auto h-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 1.79688C19.7109 1.79688 19.4219 1.80469 19.1328 1.81797L19.1953 3.22266C19.4609 3.21016 19.7266 3.20312 20 3.20312C29.2812 3.20312 36.7969 10.7188 36.7969 20C36.7969 29.2812 29.2812 36.7969 20 36.7969C13 36.7969 7.00391 32.5234 4.48047 26.4375L6.63906 25.7891L2.85547 23.1094L1.36719 27.3672L3.12891 26.8438C5.83437 33.5 12.375 38.2031 20 38.2031C30.0469 38.2031 38.2031 30.0469 38.2031 20C38.2031 9.95312 30.0469 1.79688 20 1.79688ZM17.5938 1.95625C16.5547 2.09297 15.5547 2.31563 14.5781 2.61875L15.0156 3.95391C15.9062 3.67734 16.8359 3.47344 17.7812 3.34844L17.5938 1.95625ZM13.1406 3.1375C12.1719 3.53203 11.25 4.00625 10.375 4.55312L11.1172 5.74141C11.9219 5.23828 12.7734 4.80156 13.6641 4.43906L13.1406 3.1375ZM9.09375 5.42969C8.27357 6.04441 7.50655 6.72703 6.80078 7.47031L7.82031 8.42969C8.46875 7.74453 9.17969 7.11641 9.92969 6.55L9.55469 6.03672L9.09375 5.42969ZM14.5234 6.1L14.1797 7.4625L31.1328 11.7969L31.4766 10.4375L14.5234 6.1ZM5.78672 8.63281C5.14687 9.42969 4.57266 10.2891 4.07266 11.1875L5.29531 11.875C5.75703 11.0391 6.28672 10.25 6.87813 9.50781L5.78672 8.63281ZM15.7578 9.32031C15.4531 11.3516 15.9766 13.6328 16.8672 15.5078C17.3672 16.5547 17.9766 17.4766 18.5781 18.1484C18.9062 18.5156 19.2344 18.7969 19.5312 19L19.1094 20.6562C18.75 20.6875 18.3281 20.7812 17.8594 20.9453C17.0078 21.2422 16.0312 21.7578 15.0938 22.4375C13.4062 23.6563 11.8594 25.3984 11.1562 27.3281L24.2422 30.6797C24.5469 28.6484 24.0234 26.3672 23.1328 24.4922C22.6328 23.4453 22.0234 22.5234 21.4219 21.8516C21.0938 21.4844 20.7656 21.2031 20.4688 21L20.8906 19.3438C21.2422 19.3047 21.6719 19.2188 22.1406 19.0547C22.9922 18.7578 23.9688 18.2422 24.9062 17.5625C26.5938 16.3438 28.1406 14.6016 28.8438 12.6719L15.7578 9.32031ZM3.37813 12.5703C2.96172 13.5078 2.62031 14.4766 2.3625 15.4844L3.72813 15.8125C3.96484 14.8906 4.27812 14 4.66172 13.1406L3.37813 12.5703ZM2.04688 16.9922C1.88359 17.9688 1.79688 18.9766 1.79688 20V20.0703L3.20312 20.0547V20C3.20312 19.0547 3.28281 18.125 3.43359 17.2188L2.04688 16.9922ZM8.86719 28.2031L8.52344 29.5625L25.4766 33.8984L25.8203 32.5391L8.86719 28.2031Z"
            fill={projectData?.testColor}
            // fill="black"
          />
        </svg>
      ),
    },
  ];
  return (
    <>
      <section
        className={`w-full  lg:rounded-bl-[100px] relative overflow-hidden backdrop-blur-xl bg-cover bg-center mt-20`}
        style={{
          backgroundImage: `linear-gradient(to right, ${projectData?.themeColor?.bgGradientOne}, ${projectData?.themeColor?.bgGradientTwo})`,
        }}
      >
        <div className="container">
          <div className="w-full flex justify-between ">
            <div className="w-full lg:w-[520px] flex flex-col gap-4 sm:gap-10 py-6">
              <Button
                onClick={() => router.back()}
                className="w-10 h-10 p-0 sm:p-0 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-white"
              >
                <Image
                  width={18}
                  height={18}
                  className="w-4 h-4"
                  src="/images/left_arrow.svg"
                  alt="icon"
                />
              </Button>

              <div className="w-full flex-wrap sm:flex-nowrap items-center sm:gap-7 flex">
                {projectData?.projectLogo && (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 flex items-center justify-center lg:h-24 bg-white shadow-[0_20px_48px_0_#EB00293D] rounded-xl sm:rounded-2xl sm:p-5 p-2">
                    <Image
                      width={58}
                      height={64}
                      className="w-10 sm:w-14 h-10 sm:h-14 lg:w-16 lg:h-16 object-contain"
                      src={projectData?.projectLogo}
                      alt="icon"
                    />
                  </div>
                )}
                <h2
                  className="font-bold text-3xl sm:text-[35px] lg:text-[45px] w-full lg:w-fit sm:w-fit lg:whitespace-nowrap mt-4 sm:mt-0 "
                  style={{ color: projectData?.testColor }}
                >
                  {projectData?.projectName}
                </h2>
              </div>
              <p
                className="text-sm sm:text-base slg:text-lg"
                style={{ color: projectData?.testColor }}
              >
                {projectData?.description}
              </p>
              <div className="w-full lg:max-w-sm grid grid-cols-2 gap-5">
                {cardData.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex flex-col justify-center items-center text-center gap-2.5 border rounded-lg p-2.5"
                    style={{
                      borderColor: projectData?.testColor,
                    }}
                  >
                    <div>{item.svg}</div>
                    <div style={{ color: projectData?.testColor }}>
                      <b className="text-xs inline-block w-full">
                        {item.title}
                      </b>
                      <span className="text-xs">{item.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {projectData?.mockupImage && (
              <div className="w-[875px] -right-10 relative hidden lg:inline">
                <Image
                  width={875}
                  height={570}
                  className="w-full h-full object-cover"
                  src={projectData?.mockupImage}
                  alt="mobile image"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="w-full relative overflow-hidden pt-12 sm:pt-14 lg:pt-20">
        <div className="container">
          <div className="w-full">
            <div className="w-full text-center mb-8 sm:mb-20">
              <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto flex items-center justify-center bg-themebg rounded-2xl">
                <Image
                  width={65}
                  height={65}
                  className="w-10 h-10 sm:w-16 sm:h-16 mx-auto object-contain "
                  src="/images/overview_icon.svg"
                  alt="icon"
                />
              </div>
              <h2 className="font-bold text-2xl text-white mt-4 sm:mt-10 mb-5 sm:text-3xl lg:text-[38px]">
                About The Project
              </h2>
            </div>
            <div className="w-full flex flex-wrap sm:flex-nowrap flex-col gap-10 sm:gap-32">
              <div className="w-full flex flex-wrap sm:flex-nowrap items-center gap-5 lg:gap-14 justify-between">
                <div className="w-full order-2 sm:order-none sm:w-1/2 lg:w-3/5">
                  <div className="w-fit  flex items-center  gap-2 mb-2 sm:mb-5 lg:mb-8">
                    <h2 className="font-bold text-xl text-white  sm:text-3xl lg:text-[38px]">
                      Project Idea
                    </h2>

                    <Image
                      width={60}
                      height={20}
                      className="w-8 sm:w-auto"
                      src="/images/moving_arrow.svg"
                      alt="icon"
                    />
                  </div>

                  <p className="text-sm lg:text-base">
                    {projectData?.projectIdea}
                  </p>
                </div>

                <div className="w-full order-1 sm:order-none sm:w-1/2 lg:w-2/5 relative">
                  <div className="hidden sm:inline absolute -top-20  -right-[120px] sm:-right-[220px] -z-10 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] rounded-full bg-[#FFC3A466]"></div>

                  <Image
                    width={520}
                    height={400}
                    className="w-full h-[250px] sm:h-[400px] object-cover"
                    src="/images/project_one.png"
                    alt="image"
                  />
                </div>
              </div>
              <div className="w-full flex flex-wrap sm:flex-nowrap items-center gap-5 lg:gap-14 justify-between">
                <div className="w-full order-1 sm:order-none sm:w-1/2 lg:w-2/5 relative">
                  <div className="hidden sm:inline absolute -top-20  -left-[120px] sm:-left-[220px] -z-10 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] rounded-full bg-[#FFC3A466]"></div>
                  <Image
                    width={520}
                    height={400}
                    className="w-full h-[250px] sm:h-[400px] object-cover"
                    src="/images/project_two.png"
                    alt="image"
                  />
                </div>
                <div className="w-full order-2 sm:order-none sm:w-1/2 lg:w-3/5">
                  <div className="w-fit  flex items-center  gap-2 mb-2 sm:mb-5 lg:mb-8">
                    <h2 className="font-bold text-xl text-white  sm:text-3xl lg:text-[38px]">
                      Development
                    </h2>
                    <Image
                      width={60}
                      height={20}
                      className="w-8 sm:w-auto"
                      src="/images/moving_arrow.svg"
                      alt="icon"
                    />
                  </div>
                  <p className="text-sm lg:text-base">
                    {projectData?.developmentDescription}
                  </p>
                </div>
              </div>
              <div className="w-full flex  flex-wrap sm:flex-nowrap items-center gap-5 lg:gap-14 justify-between">
                <div className="w-full order-2 sm:order-none sm:w-1/2 lg:w-3/5">
                  <div className="w-fit  flex items-center  gap-2 mb-2 sm:mb-5 lg:mb-8">
                    <h2 className="font-bold text-xl text-white  sm:text-3xl lg:text-[38px]">
                      The Solution
                    </h2>
                    <Image
                      width={60}
                      height={20}
                      className="w-8 sm:w-auto"
                      src="/images/moving_arrow.svg"
                      alt="icon"
                    />
                  </div>
                  <p className="text-sm lg:text-base">
                    {projectData?.theSolution}
                  </p>
                </div>
                <div className="w-full order-1 sm:order-none sm:w-1/2 lg:w-2/5 relative">
                  <div className="hidden sm:inline absolute -top-20 -right-[120px] sm:-right-[220px] -z-10 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] rounded-full bg-[#FFC3A466]"></div>
                  <Image
                    width={520}
                    height={400}
                    className="w-full  h-[250px] sm:h-[400px] object-cover"
                    src="/images/project_three.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full text-center mb-12 sm:my-20 lg:my-24 overflow-hidden">
        <div className="container remove-bg">
          <div className="w-full">
            <div className="w-fit mx-auto  flex items-center justify-center gap-2  mt-10">
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] text-shadow-2xl  ">
                Technology Stack
              </h2>
              <Image
                width={60}
                height={20}
                className="w-8 sm:w-auto"
                src="/images/moving_arrow.svg"
                alt="icon"
              />
            </div>

            <div className="w-full mt-8 lg:mt-14 grid grid-cols-2 sm:grid-cols-3 sm:flex  xl:grid-cols-6 justify-center items-center gap-y-10 sm:gap-y-0  gap-5 sm:gap-10 lg:gap-14">
              {projectData?.technologyImages.map((data, index) => (
                <div key={index} className="flex flex-col gap-2 sm:gap-5">
                  <div className="w-full mx-auto sm:w-32 h-32 lg:w-40 lg:h-40 p-5 sm:p-3 rounded-3xl flex items-center justify-center border-[4px] border-white/20 relative">
                    <Image
                      src={data.ImageUrl}
                      alt="Technology"
                      width={53}
                      height={65}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg">
                    {data.ImageName}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full text-black">
        <div className="container remove-bg">
          <div className="w-full text-center mb-5 sm:mb-10">
            <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto flex items-center justify-center bg-themebg rounded-2xl">
              <Image
                width={65}
                height={65}
                className="w-10 h-10 sm:w-16 sm:h-16 mx-auto object-contain "
                src="/images/star.svg"
                alt="icon"
              />
            </div>
            <h2 className="text-center text-white font-bold text-2xl sm:text-3xl lg:text-[38px] text-shadow-2xl mt-5 sm:mt-10 ">
              Main Features of The Project
            </h2>
          </div>
          <div className="w-full flex relative items-center gap-[200px] bg-[#FFF1ED] overflow-hidden rounded-2xl lg:rounded-[60px] px-5 py-5 lg:px-14 lg:py-14">
            <div className="w-[200px] h-[200px] bg-[#FFE5DD] rounded-full absolute -top-10 -right-10"></div>
            <div className="w-9 h-9 bg-[#FFE5DD] rounded-full absolute top-48 right-5"></div>
            <div className="w-[200px] h-[200px] bg-[#FFE5DD] rounded-full absolute -bottom-12  left-1/2"></div>
            <div className="w-full lg:w-1/2 relative z-10 lg:static">
              <h3 className=" font-bold text-2xl sm:text-3xl lg:text-[38px] text-shadow-2xl mb-3 sm:mb-5">
                Mobile App
              </h3>
              <ul className="list-decimal sm:font-bold text-sm space-y-4 pl-3 sm:pl-5">
                {projectData?.features &&
                  projectData?.features.map((data, index) => (
                    <li key={index}>{data} </li>
                  ))}
              </ul>
            </div>
            <div className="w-1/2 hidden lg:inline relative">
              <div className="relative top-0">
                {projectData?.mobileImage && (
                  <Image
                    width={380}
                    height={467}
                    className="object-contain"
                    src={projectData?.mobileImage}
                    alt="image"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative py-12 sm:py-20 overflow-hidden">
        <div className="container">
          <div className="w-full">
            <div className="w-full text-center  mx-auto flex flex-col gap-5 sm:gap-10">
              <div className="w-fit mx-auto flex items-center justify-center gap-2">
                <h2 className="font-bold text-2xl text-white  sm:text-3xl lg:text-[38px]">
                  Process
                </h2>
                <Image
                  width={60}
                  height={20}
                  className="w-8 sm:w-auto"
                  src="/images/moving_arrow.svg"
                  alt="icon"
                />
              </div>
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-12">
                <div className="w-full flex gap-5 justify-between items-center p-4 bg-white/10 border border-white/25 rounded-xl">
                  <div className=" flex flex-col gap-6">
                    <Image
                      width={36}
                      height={36}
                      className="w-9 h-9"
                      src="/images/research_icon.svg"
                      alt="icon"
                    />
                    <span className="font-medium text-sm sm:text-base lg:text-base">
                      Research
                    </span>
                  </div>
                  <div className="text-4xl text-white/15 sm:text-[50px] lg:text-[65px]">
                    1
                  </div>
                </div>
                <div className="w-full flex gap-5 justify-between items-center p-4 bg-white/10 border border-white/25 rounded-xl">
                  <div className=" flex flex-col gap-6">
                    <Image
                      width={36}
                      height={36}
                      className="w-9 h-9"
                      src="/images/ux_icon.svg"
                      alt="icon"
                    />
                    <span className="font-medium whitespace-nowrap text-sm sm:text-base lg:text-base">
                      UI/UX Design
                    </span>
                  </div>
                  <div className="text-4xl text-white/15 sm:text-[50px] lg:text-[65px]">
                    2
                  </div>
                </div>
                <div className="w-full flex gap-5 justify-between items-center p-4 pb-4 bg-white/10 border border-white/25 rounded-xl">
                  <div className=" flex flex-col text-left gap-6">
                    <Image
                      width={42}
                      height={42}
                      className="w-[42px] h-[42px]"
                      src="/images/style_icon.svg"
                      alt="icon"
                    />
                    <span className="font-medium text-sm sm:text-base lg:text-base">
                      Development
                    </span>
                  </div>
                  <div className="text-4xl  text-white/15 sm:text-[50px] lg:text-[65px]">
                    3
                  </div>
                </div>
                <div className="w-full flex gap-5 justify-between items-center p-4 bg-white/10 border border-white/25 rounded-xl">
                  <div className=" flex flex-col gap-6">
                    <Image
                      width={36}
                      height={36}
                      className="w-9 h-9"
                      src="/images/ux_icon.svg"
                      alt="icon"
                    />
                    <span className="font-medium text-sm sm:text-base lg:text-base">
                      Deployment
                    </span>
                  </div>
                  <div className="text-4xl text-white/15 sm:text-[50px] lg:text-[65px]">
                    4
                  </div>
                </div>
                <div className="w-full flex gap-5 justify-between items-center p-4 bg-white/10 border border-white/25 rounded-xl">
                  <div className=" flex flex-col text-left gap-6">
                    <Image
                      width={42}
                      height={42}
                      className="w-[42px] h-[42px]"
                      src="/images/style_icon.svg"
                      alt="icon"
                    />
                    <span className="font-medium text-sm sm:text-base lg:text-base">
                      Maintenance
                    </span>
                  </div>
                  <div className="text-4xl  text-white/15 sm:text-[50px] lg:text-[65px]">
                    5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {projectData?.adminData && (
        <section className="w-full  text-black pb-12 sm:pb-14 lg:pb-20">
          <div className="container remove-bg">
            <div className="w-full flex relative items-center gap-14 bg-[#FFF1ED] overflow-hidden rounded-2xl lg:rounded-[60px] px-4 py-5 lg:px-14 lg:py-14 lg:pt-7">
              <div className="w-[200px] h-[200px] bg-[#FFE5DD] rounded-full absolute -top-10 -left-10"></div>
              <div className="w-9 h-9 bg-[#FFE5DD] rounded-full absolute top-5 left-60"></div>
              <div className="w-[200px] h-[200px] bg-[#FFE5DD] rounded-full absolute -bottom-12  left-[40%]"></div>
              <div className="w-3/5 hidden lg:inline relative">
                <div className="w-full top-5 h-[399px] relative">
                  <Image
                    fill
                    className="w-full object-contain"
                    src={projectData?.adminData?.image}
                    alt="image"
                  />
                </div>
              </div>
              <div className="w-full relative z-10 lg:static lg:w-2/5">
                <h3 className=" font-bold text-2xl sm:text-3xl lg:text-[38px] text-shadow-2xl mb-3 sm:mb-5">
                  Admin Panel
                </h3>
                <ul className="list-decimal sm:font-bold text-sm space-y-4 pl-3 sm:pl-5">
                  {projectData?.adminData?.data.map((record, i) => (
                    <li key={i}>{record}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
      <ContactForm />
    </>
  );
};

export default ClientCaseStudy;
