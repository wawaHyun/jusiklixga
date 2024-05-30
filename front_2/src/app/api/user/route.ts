import { IUser } from "@/app/component/users/model/user.model";
import client from "@/lib/db";
import { NextResponse } from "next/server";
import { IUsertype } from "./model/user-model";
import { Prisma } from "@prisma/client";

export async function GET() {
    const response = await client.users.findMany({
        where: { id: 3 },
    })
    return NextResponse.json({ message: "success", data: response })
}

export async function ExistUser(username:string) {
    const response = await client.users.findFirst({
        where: { username: username },
    })
    return NextResponse.json({ message: "success", data: response })
}

export async function LoginUser(data:IUsertype) {
    const {username,password} = data;
    const response = await client.users.update({
        where: { 
            username: username,
            password: password,
        },
        data:{
           token : "ddd",
        },
    });
    console.log(JSON.stringify("LoginUser :" + response))
    return response;
}