'use client'

import { NextPage } from "next";
import React, { useEffect, useState } from "react";

const SeChartPage: NextPage = () => {

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
                      className="h-full bg-gguntheme-200 rounded-full transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    ></div>
                  )}
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>

  );
}

export default SeChartPage;