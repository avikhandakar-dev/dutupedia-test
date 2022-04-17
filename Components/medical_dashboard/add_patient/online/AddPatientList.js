import React from "react";
import Image from "next/image";
import { Wrapper } from "../../styles/Scrollbar";
function AddPatientList() {
  return (
    <div className="container w-[90%] mx-auto relative ">
      <div className="absolute -right-5 -mt-9 cursor-pointer">
        <Image src="/cross.svg" width={45} height={45} />
      </div>
      <div className="  mt-16 md:h-[600px] h-[1000px] rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md pt-16 ">
        <div className="pt-2 relative text-gray-600">
          <input
            className=" h-12 px-5 md:w-[89%] w-[86%] mx-auto rounded-lg text-sm focus:outline-none md:ml-14 ml-5 outline-none border-2 border-solid border-[#ECECEC]"
            type="search"
            name="search"
            placeholder="Search"
          />
          <div className="absolute md:right-[95px] sm:right-[110px] right-12 top-1 mt-[18px]  cursor-pointer">
            <Image src="/search.svg" width={18} height={18} />
          </div>
        </div>
        <Wrapper>
          <div className="mx-auto w-[90%] routine-table-body-section pr-3">

            <div className="flex items-center border-t text-sm font-normal mt-4 ">
            <div className="flex items-center border-t text-sm font-normal mt-4 w-full mx-auto ">
                <div className=" flex border-2 rounded-md items-center w-full  md:h-20 h-[9rem] shadow-5xl">
                  
                  <div className="relative flex items-center ml-3">
                   
                    <div className="w-[50px] h-[50px] ">
                      <Image src="/person1.svg" width={50} height={50} />
                    </div>
                
                    <div className="absolute -bottom-[12px] -right-[12px] w-7 h-7">
                      <Image  src="/online.svg" width={27} height={27} />
                    </div>
                  </div>

                  <div className="flex flex-col justify-between md:flex-row w-full">
                    <div className="-space-y-3 mt-4 ml-4 md:-mt-3">
                      <p className="md:pl-4 pl-1 text-[#707070] text-[15px]">
                        Tanisha shima{" "}
                      </p>
                      <p className="md:pl-4 pl-1 text-[#707070] text-[12px]">
                        Id: Dp 343463
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center mt-4 md:mr-4 mr-1 ml-4">
                    <div className=" flex items-center cursor-pointer bg-[#DA1E37] md:h-10 h-8 rounded-lg">
                  <span className="pl-2">
                    <Image src="/ad.svg" width={15} height={15} />
                  </span>
                  <p className="pl-1 pr-2 text-white md:text-[15px] text-[12px]">
                    Add To Patient List
                  </p>
                </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center border-t text-sm font-normal ">
            <div className="flex items-center border-t text-sm font-normal mt-4 w-full mx-auto ">
                <div className=" flex border-2 rounded-md items-center w-full  md:h-20 h-[9rem] shadow-5xl">
                  
                  <div className="relative flex items-center ml-3">
                   
                    <div className="w-[50px] h-[50px] ">
                      <Image src="/person1.svg" width={50} height={50} />
                    </div>
                
                    <div className="absolute -bottom-[12px] -right-[12px] w-7 h-7">
                      <Image  src="/online.svg" width={27} height={27} />
                    </div>
                  </div>

                  <div className="flex flex-col justify-between md:flex-row w-full">
                    <div className="-space-y-3 mt-4 ml-4 md:-mt-3">
                      <p className="md:pl-4 pl-1 text-[#707070] text-[15px]">
                        Tanisha shima{" "}
                      </p>
                      <p className="md:pl-4 pl-1 text-[#707070] text-[12px]">
                        Id: Dp 343463
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center mt-4 md:mr-4 mr-1 ml-4">
                    <div className=" flex items-center cursor-pointer bg-[#DA1E37] md:h-10 h-8 rounded-lg">
                  <span className="pl-2">
                    <Image src="/ad.svg" width={15} height={15} />
                  </span>
                  <p className="pl-1 pr-2 text-white md:text-[15px] text-[12px]">
                    Add To Patient List
                  </p>
                </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center border-t text-sm font-normal ">
            <div className="flex items-center border-t text-sm font-normal mt-4 w-full mx-auto ">
                <div className=" flex border-2 rounded-md items-center w-full  md:h-20 h-[9rem] shadow-5xl">
                  
                  <div className="relative flex items-center ml-3">
                   
                    <div className="w-[50px] h-[50px] ">
                      <Image src="/person1.svg" width={50} height={50} />
                    </div>
                
                    <div className="absolute -bottom-[12px] -right-[12px] w-7 h-7">
                      <Image  src="/online.svg" width={27} height={27} />
                    </div>
                  </div>

                  <div className="flex flex-col justify-between md:flex-row w-full">
                    <div className="-space-y-3 mt-4 ml-4 md:-mt-3">
                      <p className="md:pl-4 pl-1 text-[#707070] text-[15px]">
                        Tanisha shima{" "}
                      </p>
                      <p className="md:pl-4 pl-1 text-[#707070] text-[12px]">
                        Id: Dp 343463
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center mt-4 md:mr-4 mr-1 ml-4">
                    <div className=" flex items-center cursor-pointer bg-[#DA1E37] md:h-10 h-8 rounded-lg">
                  <span className="pl-2">
                    <Image src="/ad.svg" width={15} height={15} />
                  </span>
                  <p className="pl-1 pr-2 text-white md:text-[15px] text-[12px]">
                    Add To Patient List
                  </p>
                </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center border-t text-sm font-normal ">
            <div className="flex items-center border-t text-sm font-normal mt-4 w-full mx-auto ">
                <div className=" flex border-2 rounded-md items-center w-full  md:h-20 h-[9rem] shadow-5xl">
                  
                  <div className="relative flex items-center ml-3">
                   
                    <div className="w-[50px] h-[50px] ">
                      <Image src="/person1.svg" width={50} height={50} />
                    </div>
                
                    <div className="absolute -bottom-[12px] -right-[12px] w-7 h-7">
                      <Image  src="/online.svg" width={27} height={27} />
                    </div>
                  </div>

                  <div className="flex flex-col justify-between md:flex-row w-full">
                    <div className="-space-y-3 mt-4 ml-4 md:-mt-3">
                      <p className="md:pl-4 pl-1 text-[#707070] text-[15px]">
                        Tanisha shima{" "}
                      </p>
                      <p className="md:pl-4 pl-1 text-[#707070] text-[12px]">
                        Id: Dp 343463
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center mt-4 md:mr-4 mr-1 ml-4">
                    <div className=" flex items-center cursor-pointer bg-[#DA1E37] md:h-10 h-8 rounded-lg">
                  <span className="pl-2">
                    <Image src="/ad.svg" width={15} height={15} />
                  </span>
                  <p className="pl-1 pr-2 text-white md:text-[15px] text-[12px]">
                    Add To Patient List
                  </p>
                </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center border-t text-sm font-normal ">
            <div className="flex items-center border-t text-sm font-normal mt-4 w-full mx-auto ">
                <div className=" flex border-2 rounded-md items-center w-full  md:h-20 h-[9rem] shadow-5xl">
                  
                  <div className="relative flex items-center ml-3">
                   
                    <div className="w-[50px] h-[50px] ">
                      <Image src="/person1.svg" width={50} height={50} />
                    </div>
                
                    <div className="absolute -bottom-[12px] -right-[12px] w-7 h-7">
                      <Image  src="/online.svg" width={27} height={27} />
                    </div>
                  </div>

                  <div className="flex flex-col justify-between md:flex-row w-full">
                    <div className="-space-y-3 mt-4 ml-4 md:-mt-3">
                      <p className="md:pl-4 pl-1 text-[#707070] text-[15px]">
                        Tanisha shima{" "}
                      </p>
                      <p className="md:pl-4 pl-1 text-[#707070] text-[12px]">
                        Id: Dp 343463
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center mt-4 md:mr-4 mr-1 ml-4">
                    <div className=" flex items-center cursor-pointer bg-[#DA1E37] md:h-10 h-8 rounded-lg">
                  <span className="pl-2">
                    <Image src="/ad.svg" width={15} height={15} />
                  </span>
                  <p className="pl-1 pr-2 text-white md:text-[15px] text-[12px]">
                    Add To Patient List
                  </p>
                </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}

export default AddPatientList;