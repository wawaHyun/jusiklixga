'use client'

import { PG } from "@/app/component/common/enums/PG";
import Link from "next/link";
import Image from 'next/image'
import { HomeIcon } from "../icons/icons";
import MoveButton from "./MoveButton";



export default function CardButton({ id, title, description, img }: IBoard) {
    return (
        <div key={id} className="max-w-sm bg-white-500 border items-center border-gray-200 rounded-lg shadow ">
            <Link href={`${PG.ARTICLE}/mylist/${id}`}>
                <div className="flex justify-center mt-5">
                    {img}
                </div>
            </Link>
            <div className="p-5 border">
                <Link href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                        {title}
                    </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 ">
                    {description}
                </p>
                <p className="h-[35px]">
                <MoveButton text={title +" Read more"} path={()=>`${PG.ARTICLE}/mylist/${id}`}/>
                </p>
            </div>
        </div>
    )
}