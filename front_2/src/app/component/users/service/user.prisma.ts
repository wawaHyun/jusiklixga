

export const userlistAPI222 = async () => {
    console.log("userlist")
    try {
        const response = await client.users.findUnique({
            where: {
                id: 1,
            },
        });
        console.log('userlist response', JSON.stringify(response))
        console.log("exist username response " + response)
        return response
    } catch (error) {
        console.log(error, " userlistAPI EERR!!!")
        return error
    }
}


export const userlistAPI333 = async (id:number) => {
    const response = await fetch(`http://localhost:3000/users/${id}`);
    const user = await response.json();
    return user;
}

userlistAPI333(1).then(user => console.log(user)).catch(error => console.error('Error fetching user:', error));

export async function userlistAPI() {
    try {
      const response = await fetch('http://localhost:3000/users');
      const userList = await response.json();
      console.log(userList);
    } catch (error) {
      console.error('Error fetching user list:', error);
    }
  }


import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();


export async function handlerAPI(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        const userlist = await client.users.findMany({
            where: {
                username: "dmcclure0",
            },
        });
        const userli2st = await client.users.findFirst({
            where: {
                username: "",
            },
        });
        const uniqUsers1 = await client.users.findUnique({
            where: {
                id: 1,
            },
        });
        res.json({ ok: true });
    }
    if (req.method === "POST") {
        //Create
        res.json({ ok: true });
    }
    if (req.method === "PUT") {
        //Update
        res.json({ ok: true });
    }
    if (req.method === "DELETE") {
        //Delete
        res.json({ ok: true });
    }
}