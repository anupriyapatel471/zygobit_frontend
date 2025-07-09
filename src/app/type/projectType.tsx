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
  createdAt?: string; // Or Date if parsing as Date
  updatedAt?: string; // Or Date
  clientLocation?: string;

  targetUsers?: string;
  subDescription?: string;
  developmentDescription?: string;
  technologyImages: ProjectTechnology[];

  category?: string;
  slug?: string;
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
