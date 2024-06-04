'use client'

import PieChart from "@/app/component/jusik/pieChart";
import Bubble from "@/app/component/jusik/bubble";
import { useState } from "react";
import Mychart from "@/app/component/jusik/mychart";
import NpsBarchart from "@/app/component/jusik/npsbarchart";

export default function ChartPage() {

  return (
    <div className="w-screen">
      <ul className="w-auto">

        fffff
        <li className="w-[50%]"><Mychart /></li>
        {/* <li className="w-[50%]"><Bubble /></li> */}
      </ul>
    </div>
  )
}