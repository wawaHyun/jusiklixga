'use client'

import { useRouter } from "next/navigation";

interface IMoveButton {
    // id: Number,
    text: string,
    path: string
}

// const router = useRouter();

export default function MoveBotton({ text, path }: IMoveButton) {

    return (
        <button 
        // onClick={()=>router.push(path)}
        type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               {text}
        </button>
    )
}