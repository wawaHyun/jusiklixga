'use client'

// import NpsBarchart from "@/app/component/jusik/chart/npsBarchart";
// import TestChart from "@/app/component/jusik/chart/testchart";
import { useCallback, useEffect, useState } from "react";
// import styles from  '../styles/Index.module.css'
import TestChart from "@/app/component/jusik/chart/testchart";
import { INpstype } from "@/app/api/jusik/model/nps-model";
import { AllNps, Top10Nps } from "@/app/api/jusik/route";
import NpsBarchart from "@/app/component/jusik/chart/npsbarchart";
import { useRouter } from "next/navigation";

export default function ChartPage() {

  const [datazip, setDatazip] = useState<INpstype[]>([])
  const router = useRouter();

  const handleButton = (e: any) => {
    console.log("npsdata2 e : ");
    npsdata2()
  }

  const npsdata2 = async () => {
    try {
      await Top10Nps()
        .then((res: any) => {
          setDatazip(res);
          console.log("npsdata res : " + JSON.stringify(res));
          console.log("npsdata datazip22 : " + JSON.stringify(datazip));
        })
        .catch((error) => {
          console.log("npsdata error1 : " + error);
        })

    } catch (error) {
      console.log("npsdata error2 : " + error)
    }
  }

  useEffect(() => {
    // npsdata2()
    // .then((res: any) => {
    //   router.refresh()
    //   setDatazip(res);
    //   console.log("useEffect res : " + JSON.stringify(res));
    //   console.log("useEffect datazip : " + JSON.stringify(datazip));
    //   })
    //   .catch((error)=>{
    //     console.log("useEffect error : " +error);
    // })
  }, [])



  return (
    <div className="w-screen">
      <ul className="w-auto">
        <li>차트 시작함</li>
        {/* <li className=""><TestChart /></li> */}
        <li>중간 구분선 </li>
        <li className="w-[50%]"> <NpsBarchart /></li>
        {/* <li className="w-[50%]"><Bubble /></li> */}
        <li><button onClick={handleButton}>클릭! </button></li>
      </ul>
    </div>
  )
}