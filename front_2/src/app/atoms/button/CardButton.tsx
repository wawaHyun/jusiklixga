'use client'

import { PG } from "@/app/component/common/enums/PG";
import Link from "next/link";
import Image from 'next/image'
import { HomeIcon } from "../icons/icons";



export default function CardButton({ id, title, description, img }: IBoard) {
    return (
        <div className="max-w-sm b-white border items-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {/* <Link href={`${PG.ARTICLE}/mylist/${id}`}> */}
            <Link href={`${PG.ARTICLE}/mylist/${id}`}>
                <div className="flex justify-center mt-5">
                    {img}
                </div>
            </Link>
            <div className="p-5">
                <Link href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
                <Link href={`${PG.ARTICLE}/mylist/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {title} Read more
                </Link>
            </div>
        </div>
    )
}