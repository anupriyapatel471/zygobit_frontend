import { ReactNode } from "react";

export interface ProjectTechnology {
  ImageUrl: string;
  ImageName: string;
}

export interface AdminProjectData {
  image: string;
  data: string[];
}

export interface ProjectThemeColor {
  bgGradientOne: string;
  bgGradientTwo: string;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  projectName: ReactNode;
  subTitle: ReactNode;
  mobileImage?: string;
  androidDownloads?: number;
  iosDownloads?: number;
  createdAt?: string; // Or Date if parsing as Date
  updatedAt?: string; // Or Date
  clientLocation?: string;

  targetUsers?: string;
  subDescription?: string;
  technologyDescription?: string;
  developmentDescription?: string;
  evaluationDescription?: string;
  evaluationImage?: string;
  googlePlayAppLink?: string;
  appStoreAppLink?: string;
  technologyImages: ProjectTechnology[];

  category?: string;
  slug?: string;
  projectIcon?: string;
  backgroundImage?: string;
  adminData?: AdminProjectData;
  themeColor?: ProjectThemeColor;
  projectLogo: string;
  testColor: string;
  mockupImage?: string;
  projectIdea: string;
  theSolution: string;
  features?: string[];

  clientName: string;
  services: string;
  businessType: string;
  developmentTime?: string;
}
