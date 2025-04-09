import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const portfolioProjects = () => {
  return (
    <>
      <section className="w-full relative overflow-hidden mt-10 mb-14 sm:mb-20">
        <div className="container remove-bg">
          <div className="w-full">
            <Tabs defaultValue="Mobile Application" className="w-full">
              <TabsList className="grid w-full grid-cols-1 lg:grid-cols-5 h-auto">
                <TabsTrigger
                  className="justify-normal sm:justify-center"
                  value="Mobile Application"
                >
                  Mobile Application
                </TabsTrigger>
                <TabsTrigger
                  className="justify-normal sm:justify-center"
                  value="Web Development"
                >
                  Web Development
                </TabsTrigger>
                <TabsTrigger
                  className="justify-normal sm:justify-center"
                  value="Design"
                >
                  Design
                </TabsTrigger>
                <TabsTrigger
                  className="justify-normal sm:justify-center"
                  value="SEO"
                >
                  SEO
                </TabsTrigger>
                <TabsTrigger
                  className="justify-normal sm:justify-center"
                  value="PPC"
                >
                  SEO
                </TabsTrigger>
              </TabsList>
              <TabsContent value="Mobile Application">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/her_calendar_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/her_calendar.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/her_calendar.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/mh_ride_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/mh_ride.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/mh_ride.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/sed_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/bee_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/suitor_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/tia_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="Web Development">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/her_calendar_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/her_calendar.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/her_calendar.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/mh_ride_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/mh_ride.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/mh_ride.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/sed_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/bee_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/suitor_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/tia_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="Design">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/her_calendar_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/her_calendar.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/her_calendar.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/mh_ride_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/mh_ride.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/mh_ride.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/sed_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/bee_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/suitor_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/tia_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="SEO">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/her_calendar_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/her_calendar.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/her_calendar.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/mh_ride_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/mh_ride.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/mh_ride.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/sed_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/bee_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/suitor_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/tia_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="PPC">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/her_calendar_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/her_calendar.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/her_calendar.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/mh_ride_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/mh_ride.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/mh_ride.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/sed_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/bee_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/suitor_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/tia_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};
export default portfolioProjects;
