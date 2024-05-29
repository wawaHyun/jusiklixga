import { useState } from "react";
import MyChart from "../../../../component/jusik/mychart";
import PieChart from "../../../../component/jusik/PieChart";

export default function ChartPage() {

  return (
    <div className="w-screen">
      <ul className="w-auto">
        <li className="w-[50%]"><MyChart /></li>
        <li className="w-[50%]"><PieChart /></li>
      </ul>
    </div>

  )
}