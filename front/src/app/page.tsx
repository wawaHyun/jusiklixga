'use client'
import { useRouter } from "next/navigation";
import { NextPage } from "next";
import './globals.css'
import { PG } from "./component/common/enums/PG";
import { Component } from "react";


const Home:NextPage=()=> {
  const router = useRouter();

  return (
    <div>
      <div className="w-screen h-screen justify-center content-center bg-gray-950">
        <div className="text-center content-center bg-center bg-bg_img bg-cover h-[70%]">

          <span className="text-gray-300 text-6xl font-bold font-['Inter'] ">TEST TEST TEST TEST TEST!<br /></span>
          <span className="text-gray-400 text-3xl font-['Inter']">test page입니다!</span><br />

          <div className="mt-[15%]">
            <button className="w-44 h-16 bg-gray-950 rounded-lg hover:bg-pink-700" onClick={()=>router.push(PG.USER+"/login")}>
              <div className="text-white font-medium font-['Inter'] leading-normal">s t a r t </div>
            </button>

            <button className="w-44 h-16 bg-gray-950 rounded-lg hover:bg-pink-700" onClick={()=>router.push(PG.SE+"/news")}>
              <div className="text-white font-medium font-['Inter'] leading-normal">SE news! </div>
            </button>
            <button className="w-44 h-16 bg-gray-950 rounded-lg hover:bg-pink-700" 
            onClick={()=>window.open("C:\\Users\\bitcamp\\Gisa\\lixgit\\front\\src\\app\\pages\\jusik\\SE\\news\\kr-state.html")}>
              <div className="text-white font-medium font-['Inter'] leading-normal">
                {/* <Component onClick={()=>window.open("C:\\Users\\bitcamp\\Gisa\\lixgit\\front\\src\\app\\pages\\jusik\\SE\\news\\kr-state.html")}></Component> */}
                SE chart 

                </div>
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;