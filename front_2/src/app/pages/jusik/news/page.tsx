'use client'

import { useDispatch, useSelector } from "react-redux";
import { SingleUser } from "@/app/api/user/route";
import { instance, server } from "@/app/component/common/configs/axios-config";
import { FindSingleBoard } from "@/app/api/board/route";

export interface Iresponse {
  method: string,
  headers: {},
  body: {}
}

function SeChartPage() {


  const onClick = async () => {
    const response = await SingleUser(3)
    console.log("GET" + JSON.stringify(response))
  }

  return (
    <>
      {/* <IndexPage2 /> */}
      dddd
      <div className="border">
        <button onClick={() => onClick()}>머라도해야지</button>
      </div>

    </>

  );
}

export default SeChartPage;