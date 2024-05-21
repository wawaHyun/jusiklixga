'use client'
import { useRouter } from "next/navigation";
import { PG } from "./redux/common/enums/PG";
import { NextPage } from "next";

const HomePage:NextPage=()=> {
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
          </div>

        </div>
      </div>
    </div>
  );
}

export default HomePage;