'use client'

import { NextPage } from "next";
import React, { useEffect, useState } from "react";

const Loadings: NextPage = () => {

  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState("");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots === "...") return "";
        return prevDots + ".";
      });
    }, 500);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      //  remove else part id
      if (progress <= 100) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        setProgress(1);
      }
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  return (
    <>
      <div className="bg-black bg-opacity-20 min-h-screen flex justify-center items-center">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10 text-left mx-5 xl:mx-0">
            {/* (1) Loader with dots */}
            <div className="bg-gray-200 flex justify-center py-6 h-52">
              <div className="h-36 w-40 flex items-center gap-2">
                <div className="flex items-center justify-center">
                  <div className="text-4xl font-bold animate-pulse">
                    Loading{dots}
                  </div>
                </div>
              </div>
            </div>
            {/* (2) Loader with progressbar */}
            <div className="bg-gray-200 flex justify-center py-6 h-52">
              <div className="h-36 w-40 flex items-center gap-2 flex-col justify-center">
                <div className="text-2xl  leading-[28px] font-semibold ">
                  Loading...
                </div>
                <div className="w-32 h-1 bg-gray-600 rounded-full">
                  {/* remove this condition */}
                  {progress <= 100 && (
                    <div
                      className="h-full bg-blue-500 rounded-full transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    ></div>
                  )}
                </div>
              </div>
            </div>
            {/* (3) Loader with Bars
        you need to add keyframes in tailwind.config file OR you can add in global.css file
            @keyframes  bars: {
                "58%": {
                  height: "50%",
                },
                "100%": {
                  height: "100%",
                },
              },
           */}
            <div className="bg-gray-200 flex justify-center py-6 h-52">
              <div className="h-36 w-40 flex items-center justify-center">
                <div className="h-12 flex rotate-180">
                  <div className="bg-black h-full w-2 ml-0.5 animate-[bars_1.2s_ease-in-out_infinite] m-0.5"></div>
                  <div
                    className="bg-black h-full w-2 ml-0.5 animate-[bars_1.2s_ease-in-out_infinite]  m-0.5"
                    style={{
                      animationDelay: "0.3s",
                    }}
                  ></div>
                  <div
                    className="bg-black h-full w-2 ml-0.5 animate-[bars_1.2s_ease-in-out_infinite]  m-0.5"
                    style={{
                      animationDelay: "0.6s",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            {/* (4) Loader with Bars */}
            {/*
          you need to add keyframes in tailwind.config file OR you can add in global.css file
          @keyframes  bars: {
              "58%": {
                height: "50%",
              },
              "100%": {
                height: "100%",
              },
            },
        */}
            <div className="bg-gray-200 flex justify-center py-6 h-52">
              <div className="h-36 w-40 flex items-center justify-center">
                <div className="h-12 flex rotate-180 items-center ">
                  <div className="bg-black h-full w-2 ml-0.5 animate-[bars_1.2s_ease-in-out_infinite] m-0.5"></div>
                  <div
                    className="bg-black h-full w-2 ml-0.5 animate-[bars_1.2s_ease-in-out_infinite]  m-0.5"
                    style={{
                      animationDelay: "0.3s",
                    }}
                  ></div>
                  <div
                    className="bg-black h-full w-2 ml-0.5 animate-[bars_1.2s_ease-in-out_infinite]  m-0.5"
                    style={{
                      animationDelay: "0.6s",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            {/* (5) Spinner loader */}
            <div className="bg-gray-200 flex justify-center py-6 h-52">
              <div className="h-36 w-40 flex items-center justify-center">
                <div aria-label="Loading..." role="status">
                  <svg
                    className="animate-spin w-12 h-12 stroke-blue-500"
                    viewBox="0 0 256 256"
                  >
                    <line
                      x1="128"
                      y1="32"
                      x2="128"
                      y2="64"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="195.9"
                      y1="60.1"
                      x2="173.3"
                      y2="82.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="224"
                      y1="128"
                      x2="192"
                      y2="128"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="195.9"
                      y1="195.9"
                      x2="173.3"
                      y2="173.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="128"
                      y1="224"
                      x2="128"
                      y2="192"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="60.1"
                      y1="195.9"
                      x2="82.7"
                      y2="173.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="32"
                      y1="128"
                      x2="64"
                      y2="128"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                    <line
                      x1="60.1"
                      y1="60.1"
                      x2="82.7"
                      y2="82.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="24"
                    ></line>
                  </svg>
                </div>
              </div>
            </div>
            {/* (6) Spinner loader */}
            <div className="bg-gray-200 flex justify-center py-6 h-52">
              <div className="h-36 w-40 flex items-center justify-center">
                <div className="flex flex-col gap-2 w-full max-w-max h-max items-center">
                  <svg
                    className="animate-spin"
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="23"
                      cy="23"
                      r="20"
                      stroke="#F3F4F6"
                      strokeWidth="6"
                    />
                    <path
                      d="M23 2.98983C23 1.33859 24.3442 -0.0200001 25.9815 0.194053C29.1734 0.611351 32.2538 1.69571 35.0175 3.38928C38.6341 5.60557 41.5675 8.77882 43.4931 12.5582C45.4188 16.3376 46.2619 20.5759 45.9291 24.8046C45.6748 28.0358 44.7415 31.1653 43.2029 33.9929C42.4137 35.4433 40.5244 35.7323 39.1886 34.7617C37.8527 33.7911 37.584 31.9288 38.3062 30.4439C39.2334 28.5374 39.8002 26.4663 39.9679 24.3354C40.2141 21.2061 39.5903 18.0697 38.1652 15.2729C36.7402 12.4761 34.5695 10.1279 31.8931 8.48778C30.0706 7.37093 28.0619 6.6121 25.9745 6.2416C24.3487 5.95301 23 4.64108 23 2.98983Z"
                      fill="#3B82F6"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* (7) Wave loader */}
            {/*
          you need to add keyframes in tailwind.config file OR you can add in global.css file
            @keyframes  wave: {
              "0%": {
                transform: "translate(-50%, -50%) rotate(0)",
                top: "-30%",
              },
              "50%": {
                top: "-50%",
              },
              "100%": {
                transform: "translate(-50%, -50%) rotate(360deg)",
                top: "-80%",
              },
          },
        */}
            <div className="bg-gray-200 flex justify-center py-6 h-52">
              <div className="h-36 w-36 flex items-center justify-center">
                <div className="container flex justify-center items-center">
                  <div className="water h-20 w-20 bg-[#35b3e7] rounded-full relative overflow-hidden before:content-[''] before:absolute before:w-[200%] before:h-[200%] before:-top-[50%] before:left-[50%] before:bg-white after:content-[''] after:absolute after:w-[200%] after:h-[200%] after:-top-[50%] after:left-[50%] after:bg-white before:rounded-[45%] before:animate-[wave_5s_linear_infinite] after:rounded-[35%] after:bg-white/30 after:animate-[wave_5s_linear_infinite]"></div>
                </div>
              </div>
            </div>
            {/* (8) Infinity loader */}
            <div className="bg-gray-200 flex justify-center py-6 h-52">
              <div className="h-36 w-36 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  className="animate-spin h-16 w-16 "
                >
                  <path d="M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Loadings;