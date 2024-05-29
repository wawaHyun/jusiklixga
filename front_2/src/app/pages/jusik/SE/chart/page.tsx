import { useState } from "react";
import MyChart from "../../../../component/jusik/mychart";

export default function ChartPage() {

  return (
    <div className="w-screen">
      <ul className="w-auto">
        <li className="w-[50%]"><MyChart /></li>
        <li className="w-[50%]"><MyChart /></li>
      </ul>
    </div>

  )
}