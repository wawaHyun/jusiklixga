'use client'

import { NextApiRequest, NextPage } from "next";
import React, { useEffect, useState } from "react";
import IndexPage2 from "../../../../component/jusik/crawling";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "@/app/component/users/model/user.model";
import { getAllUsers, getSingleUser } from "@/app/component/users/service/user.slice";
import { useRouter } from "next/router";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import client from "@/lib/db";
import { GET } from "@/app/api/user/route";
import  { instance,server } from "@/app/component/common/configs/axios-config";

export interface Iresponse {
  method: string,
  headers: {},
  body: {}
}

function SeChartPage() {

  const dispatch = useDispatch()
  const userls: [] = useSelector(getAllUsers)


  const onClick = async () => {
    console.log("버튼 눌림")
    try {

    } catch (error) {
    console.log("버튼 눌림dd" + error)
  }

  const response = await server().get('/api/user', {
    params: {
      id: 2,
    }
  }
)
console.log("GET"+JSON.stringify(response.data))
  if (response) {
  } else {
    console.log('채팅창 삭제 실패하셨습니다. 다시 시도해주세요.');
  }
  // window.location.reload();
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