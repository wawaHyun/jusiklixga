'use client'

import Mychart from "@/app/component/jusik/mychart";

export interface Iresponse {
  method: string,
  headers: {},
  body: {}
}

function SeChartPage() {



  return (
    <>
      <div className="w-screen">
      <ul className="w-auto">
        <li className="w-[50%]"><Mychart /></li>
      </ul>
    </div>
    </>

  );
}

export default SeChartPage;