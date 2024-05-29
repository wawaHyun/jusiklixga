'use client'

import CardButton from "@/app/atoms/button/CardButton"
import { CallIcon, ChartIcon, HomeIcon, ListIcon, NewsIcon } from "@/app/atoms/icons/icons";
import { fetchAllBoards } from "@/app/component/boards/service/board.service";
import { getAllBoards } from "@/app/component/boards/service/board.slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function Boardcards() {


    const allBoards = [
        { id: 1, title: "고객센터", description: "고객센터 게시판 목록으로 갑니다. ", img: <CallIcon /> },
        { id: 2, title: "News", description: "뉴스 게시판 목록으로 갑니다. ", img: <NewsIcon /> },
        { id: 3, title: "Chart", description: "차트 게시판 목록으로 갑니다. ", img: <ChartIcon /> },
        { id: 4, title: "List", description: "QnA 게시판 목록으로 갑니다. ", img: <ListIcon /> },
    ]

    return (<>
        <div className="w-screen h-[20%] mb-5">
            <ul className="flex w-screen h-full">
                <li className="bg-[#9fc9ed] w-1/5 hover:w-2/5 transition-delay-150 duration-300 ease-in-out"></li>
                <li className="bg-[#0f3469] w-1/5 hover:w-2/5 transition-delay-150 duration-300 ease-in-out"></li>
                <li className="bg-[#3F72AF] w-1/5 hover:w-2/5 transition-delay-150 duration-300 ease-in-out"></li>
                <li className="bg-[#DBE2EF] w-1/5 hover:w-2/5 transition-delay-150 duration-300 ease-in-out"></li>
                <li className="bg-[#F9F7F7] w-1/5 hover:w-2/5 transition-delay-150 duration-300 ease-in-out"></li>
            </ul>
        </div>

        <div className="flex flex-row ml-5 gap-5 items-center justify-center text-center">
            {allBoards && allBoards.map((elem: IBoard) => (
                <CardButton key={elem.id} id={elem.id} title={elem.title}
                    description={elem.description} img={elem.img} />
            ))}

        </div>

    </>)
}