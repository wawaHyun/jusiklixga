'use client'

import { NextApiRequest, NextPage } from "next";
import React, { useEffect, useState } from "react";
import IndexPage2 from "../../../../component/jusik/crawling";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "@/app/component/users/model/user.model";
import { getAllUsers, getSingleUser } from "@/app/component/users/service/user.slice";
import { handlerAPI } from "@/app/component/users/service/user.api";
import { useRouter } from "next/router";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import client from "@/app/component/common/configs/prisma-server";

export interface Iresponse {
  method: string,
  headers: {},
  body: {}
}

const SeChartPage: NextPage = () => {

    const dispatch = useDispatch()
    const userls: [] = useSelector(getAllUsers)


const req:Iresponse = {
  method: "GET",
  headers: {
    'Content-Type': 'application/json'
  },
  body: ''
}

    // useEffect(() => {
    //     dispatch(handlerAPI(req))
    //     console.log("test2 :"+userls)
    // }, [])

  const onClick = async ()=>{
    console.log("버튼 눌림")
try{
  // const userlist = await client.users.create({
  //   data:{
  //     username : 'jaja',
  //     password : '0000'
  //   }
  // });

  const userlist = await client.users.findUnique({
    where: {
      id: 2,
    },
  })


  console.log(JSON.stringify(userlist))
}catch(error){
  console.log("버튼 눌림dd"+error)
}
    // setOpen(false);
    // const response = await fetch('users/userlist', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // if (response.ok) {
    //   console.log('채팅창 삭제 성공');
    // } else {
    //   console.log('채팅창 삭제 실패하셨습니다. 다시 시도해주세요.');
    // }
    // window.location.reload();
}

  return (
    <>
      {/* <IndexPage2 /> */}
      dddd
      <div className="border">

<button onClick={()=>onClick()}>머라도해야지</button>
      </div>

    </>

  );
}

export default SeChartPage;