'use client'

import PieChart from "@/app/component/jusik/pieChart";
import Bubble from "@/app/component/jusik/bubble";
import { useEffect, useState } from "react";
import Mychart from "@/app/component/jusik/mychart";
import NpsBarchart from "@/app/component/jusik/npsbarchart";
import { INpstype } from "@/api/jusik/model/nps-model";
import { AllNps, ToptenNps } from "@/api/jusik/route";
import PinkButton from "@/app/atoms/button/PinkButton";

export default function ChartPage() {


  const [data, setData] = useState({
    x : 0, y: 0
  })
  const [z, setZ] = useState({})
  const [x, setX] = useState({})
  const [title, setTitle] = useState('')

  const boxer = () =>{
    npsdata()
    .then((res:any)=>{
      console.log("npsdata : {}",res)
      // res.map((i:number)=>{
        // setX(i.stock)
        // setZ(i.valuation)
        // console.log("z : {}, x : {}", z, x)
        setData(res)
        console.log("dataset : "+ JSON.stringify(data))
      // })
      // setTitle('국민연금 국내 투자 top10')
      // console.log("title : {}, z : {}, x : {}", title, z, x)
    })
  }

  const npsdata = async () => {
    try {
      const response:INpstype[] = await ToptenNps()
      // console.log("npsdata : {}",response)
      return response
    } catch (error) {
      console.log("npsdata : " + error)
    }
  }
  
  useEffect(() => {
  }, [])

  return (
    <div className="w-screen">
      <ul className="w-auto">
        {/* <li className="w-[50%]"><NpsBarchart dataa={data} title ={title} /></li> */}
        {/* <li className="w-[50%]"><NpsBarchart /></li> */}
      </ul>
      <div>
        <button><PinkButton text="CILK" path={boxer}/></button>
      </div>
    </div>
  )
}