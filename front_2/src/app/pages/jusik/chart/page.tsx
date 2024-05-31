'use client'

// import Chartt from "@/app/component/jusik/chartt";
import PieChart from "@/app/component/jusik/pieChart";
import Bubble from "@/app/component/jusik/bubble";
import { useState } from "react";
import Mychart from "@/app/component/jusik/mychart";

export default function ChartPage() {

  return (
    <div className="w-screen">
      <ul className="w-auto">

        fffff
        {/* <li className="w-[50%]"><Chart2 /></li> */}
        <li className="w-[50%]"><Mychart /></li>
        {/* <li className="w-[50%]"><Bubble /></li> */}
      </ul>
    </div>
  )
}