"use client";

import Image from "next/image";
import React from "react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../components/ui/3d-card";

export function UiuxTeams() {

  const teamData = [
    {
      id: 1,
      username: "@nextjs",
      role: "Design Manager",
      thumbnail: "/images/member.png",
      background: "/images/teams_bg.png",
    },
    {
      id: 2,
      username: "@nextjs",
      role: "Design Manager",
      thumbnail: "/images/member.png",
      background: "/images/teams_bg.png",
    },
    {
      id: 3,
      username: "@nextjs",
      role: "Design Manager",
      thumbnail: "/images/member.png",
      background: "/images/teams_bg.png",
    },
    {
      id: 4,
      username: "@nextjs",
      role: "Design Manager",
      thumbnail: "/images/member.png",
      background: "/images/teams_bg.png",
    },
    {
      id: 5,
      username: "@nextjs",
      role: "Design Manager",
      thumbnail: "/images/member.png",
      background: "/images/teams_bg.png",
    },
    {
      id: 6,
      username: "@nextjs",
      role: "Design Manager",
      thumbnail: "/images/member.png",
      background: "/images/teams_bg.png",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-10 w-full px-4 lg:px-0">
      {teamData.map((team) => (
        <CardContainer key={team.id} className="inter-var">
          <CardBody className="relative group/card w-full h-auto rounded-lg p-4 sm:py-5 sm:px-6">
            <div className="absolute top-0 left-0 size-full">
              {/* <img className="size-full" src={team.background} alt="" /> */}
              <Image
                  src={team.background}
                  alt="Background"
                  className="rounded-lg"
                  height={40}
                  width={40}
                  // priority
                />
            </div>
            <CardItem
              translateZ="50"
              className="text-lg sm:text-xl lg:text-2xl font-semibold"
            >
              {team.username}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-sm sm:text-base mt-3 mb-2"
            >
              {team.role}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={team.thumbnail}
                height="1000"
                width="1000"
                className="h-40 w-full object-cover rounded-lg group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>
    </>
  );
}
