import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import Image from "next/image";
import moonImg from "../../../../../public/images/moon.svg";
import HtmlFive from "../../../../../public/images/html5.svg";
import cssThree from "../../../../../public/images/css3.svg";
import nodeJs from "../../../../../public/images/nodejs.svg";
import angularJs from "../../../../../public/images/angular.svg";
import reactJs from "../../../../../public/images/react.svg";
import flutter from "../../../../../public/images/fluter.svg";
import php from "../../../../../public/images/php.svg";
import Js from "../../../../../public/images/js.svg";
import Java from "../../../../../public/images/java.svg";
import python from "../../../../../public/images/python.svg";
import webPack from "../../../../../public/images/webpack.svg";
import native from "../../../../../public/images/native.svg";
import jquery from "../../../../../public/images/jquery.svg";

export function OrbitingCircle() {
  return (
    <div className="absolute -bottom-[570px] lg:-bottom-[600px] left-0 flex h-[1250px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={100} radius={560}>
        <div className="flex items-center justify-center relative w-full h-full rounded-full  backdrop-blur-xl">
          <Image src={moonImg} fill className="object-cover" alt="Moon image" />
          <Image
            src={HtmlFive}
            className="absolute top-0 left-0 w-full h-full p-8"
            fill
            alt="Icon"
          />
        </div>
        <div className="flex items-center justify-center relative w-full h-full rounded-full  backdrop-blur-xl">
          <Image src={moonImg} fill className="object-cover" alt="Moon image" />
          <Image
            src={cssThree}
            className="absolute top-0 left-0 w-full h-full p-8"
            fill
            alt="Icon"
          />
        </div>
        <div className="flex items-center justify-center relative w-full h-full rounded-full  backdrop-blur-xl">
          <Image src={moonImg} fill className="object-cover" alt="Moon image" />
          <Image
            src={nodeJs}
            className="absolute top-0 left-0 w-full h-full p-8"
            fill
            alt="Icon"
          />
        </div>
        <div className="flex items-center justify-center relative w-full h-full rounded-full  backdrop-blur-xl">
          <Image src={moonImg} fill className="object-cover" alt="Moon image" />
          <Image
            src={angularJs}
            className="absolute top-0 left-0 w-full h-full p-8"
            fill
            alt="Icon"
          />
        </div>
        <div className="flex items-center justify-center relative w-full h-full rounded-full  backdrop-blur-xl">
          <Image src={moonImg} fill className="object-cover" alt="Moon image" />
          <Image
            src={reactJs}
            className="absolute top-0 left-0 w-full h-full p-8"
            fill
            alt="Icon"
          />
        </div>
        <div className="flex items-center justify-center relative w-full h-full rounded-full  backdrop-blur-xl">
          <Image src={moonImg} fill className="object-cover" alt="Moon image" />
          <Image
            src={flutter}
            className="absolute top-0 left-0 w-full h-full p-8"
            fill
            alt="Icon"
          />
        </div>
        <div className="flex items-center justify-center relative w-full h-full rounded-full  backdrop-blur-xl">
          <Image src={moonImg} fill className="object-cover" alt="Moon image" />
          <Image
            src={php}
            className="absolute top-0 left-0 w-full h-full p-8"
            fill
            alt="Icon"
          />
        </div>
      </OrbitingCircles>
      <OrbitingCircles iconSize={100} reverse radius={420}>
        <div className="flex items-center justify-center relative w-full h-full rounded-full  backdrop-blur-xl">
          <Image src={moonImg} fill className="object-cover" alt="Moon image" />
          <Image
            src={HtmlFive}
            className="absolute top-0 left-0 w-full h-full p-8"
            fill
            alt="Icon"
          />
        </div>
        <div className="flex items-center justify-center relative w-full h-full rounded-full  backdrop-blur-xl">
          <Image src={moonImg} fill className="object-cover" alt="Moon image" />
          <Image
            src={cssThree}
            className="absolute top-0 left-0 w-full h-full p-8"
            fill
            alt="Icon"
          />
        </div>
        <div className="flex items-center justify-center relative w-full h-full rounded-full  backdrop-blur-xl">
          <Image src={moonImg} fill className="object-cover" alt="Moon image" />
          <Image
            src={nodeJs}
            className="absolute top-0 left-0 w-full h-full p-8"
            fill
            alt="Icon"
          />
        </div>
        <div className="flex items-center justify-center relative w-full h-full rounded-full  backdrop-blur-xl">
          <Image src={moonImg} fill className="object-cover" alt="Moon image" />
          <Image
            src={angularJs}
            className="absolute top-0 left-0 w-full h-full p-8"
            fill
            alt="Icon"
          />
        </div>
        <div className="flex items-center justify-center relative w-full h-full rounded-full  backdrop-blur-xl">
          <Image src={moonImg} fill className="object-cover" alt="Moon image" />
          <Image
            src={reactJs}
            className="absolute top-0 left-0 w-full h-full p-8"
            fill
            alt="Icon"
          />
        </div>
        <div className="flex items-center justify-center relative w-full h-full rounded-full  backdrop-blur-xl">
          <Image src={moonImg} fill className="object-cover" alt="Moon image" />
          <Image
            src={flutter}
            className="absolute top-0 left-0 w-full h-full p-8"
            fill
            alt="Icon"
          />
        </div>
        <div className="flex items-center justify-center relative w-full h-full rounded-full  backdrop-blur-xl">
          <Image src={moonImg} fill className="object-cover" alt="Moon image" />
          <Image
            src={php}
            className="absolute top-0 left-0 w-full h-full p-8"
            fill
            alt="Icon"
          />
        </div>
      </OrbitingCircles>
      <OrbitingCircles iconSize={100} radius={300}>
        <div className="flex items-center justify-center relative w-full h-full rounded-full  backdrop-blur-xl">
          <Image src={moonImg} fill className="object-cover" alt="Moon image" />
          <Image
            src={Js}
            className="absolute top-0 left-0 w-full h-full p-8"
            fill
            alt="Icon"
          />
        </div>
        <div className="flex items-center justify-center relative w-full h-full rounded-full  backdrop-blur-xl">
          <Image src={moonImg} fill className="object-cover" alt="Moon image" />
          <Image
            src={Java}
            className="absolute top-0 left-0 w-full h-full p-8"
            fill
            alt="Icon"
          />
        </div>
        <div className="flex items-center justify-center relative w-full h-full rounded-full  backdrop-blur-xl">
          <Image src={moonImg} fill className="object-cover" alt="Moon image" />
          <Image
            src={python}
            className="absolute top-0 left-0 w-full h-full p-8"
            fill
            alt="Icon"
          />
        </div>
        <div className="flex items-center justify-center relative w-full h-full rounded-full  backdrop-blur-xl">
          <Image src={moonImg} fill className="object-cover" alt="Moon image" />
          <Image
            src={webPack}
            className="absolute top-0 left-0 w-full h-full p-8"
            fill
            alt="Icon"
          />
        </div>
        <div className="flex items-center justify-center relative w-full h-full rounded-full  backdrop-blur-xl">
          <Image src={moonImg} fill className="object-cover" alt="Moon image" />
          <Image
            src={native}
            className="absolute top-0 left-0 w-full h-full p-8"
            fill
            alt="Icon"
          />
        </div>
        <div className="flex items-center justify-center relative w-full h-full rounded-full  backdrop-blur-xl">
          <Image src={moonImg} fill className="object-cover" alt="Moon image" />
          <Image
            src={jquery}
            className="absolute top-0 left-0 w-full h-full p-8"
            fill
            alt="Icon"
          />
        </div>
      </OrbitingCircles>
    </div>
  );
}
