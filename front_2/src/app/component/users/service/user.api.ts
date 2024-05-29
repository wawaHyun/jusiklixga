import instance from "@/app/component/common/configs/axios-config"
import { IUser } from "../model/user.model"

export const fetchAllUsersAPI = async (page: number) => {
    try {
        const response = await instance().get('/users/list', {
            params: { page, limit: 10 } //1page 당 10 게시글
        })
        return response.data
    } catch (error) {
        console.log(error, " fetchAllUsersAPI EERR!!!")
        return error
    }
}

export const findUserByIdAPI = async (id: number) => {
    try {
        const response = await instance().get('/users/detail', {
            params: { id }
        })
        return response.data
    } catch (error) {
        console.log(error, " findUserByIdAPI EERR!!!")
        return error
    }
}

export const countUsersAPI = async () => {
    try {
        const response = await instance().get('/users/count')

        return response.data
    } catch (error) {
        console.log(error, " countAllUsersAPI EERR!!!")
        return error
    }
}

export const modifyUserByIdAPI = async (user: IUser) => {
    try {
        const response = await instance().put('/users/modify', user)
        console.log("response ", JSON.stringify(response.data))
        return response.data
    } catch (error) {
        console.log(error, " modifyUserByIdAPI EERR!!!")
        return error
    }
}

export const deleteUserByIdAPI = async (id: number) => {
    try {
        const response = await instance().delete('/users/delete', {
            params: { id }
        })
        console.log("response ", response)
        return response.data
    } catch (error) {
        console.log(error, " deleteUserByIdAPI EERR!!!")
        return error
    }
}

export const loginUserAPI = async (props: any) => {
    try {
        const response = await instance().post('/auth/login', props)
        return response.data
    } catch (error) {
        console.log(error, "loginUserByIdAPI EERR!!!")
        return error
    }
}

export const joinUserAPI = async (props: any) => {
    try {
        const response = await instance().post('/users/save', props)
        console.log("response ", JSON.stringify(response.data))
        return response.data
    } catch (error) {
        console.log(error, " joinUserAPI EERR!!!")
        return error
    }
}

export const existsByUsernameAPI = async (username: string) => {
    try {
        const response = await instance().get('/auth/exists-username', {
            params: { username }
        })
        console.log("exist username response " + response.data)
        return response.data
    } catch (error) {
        console.log(error, " existsByUsernameAPI EERR!!!")
        return error
    }
}

export const logoutAPI = async () => {
    try {
        const response = await instance().get('/users/logout',)
        console.log('logout response', JSON.stringify(response.data))
        return response.data
    } catch (error) {
        console.log(error, " logoutAPI EERR!!!")
        return error
    }
}


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
``
import { NextResponse } from "next/server"
import { Iresponse } from "@/app/pages/jusik/SE/news/page"

export const client = new PrismaClient();

export async function handlerAPI(
    // req: NextApiRequest
    // res: NextApiResponse
    req:Iresponse
) {
    if (req.method === "GET") {
        const userlist = await client.users.findMany({
           
        });
        console.log(JSON.stringify(userlist))
        // const userli2st = await client.users.findFirst({
        //     where: {
        //         username: "",
        //     },
        // });
        // const uniqUsers1 = await client.users.findUnique({
        //     where: {
        //         id: 1,
        //     },
        // });
        // res.status(200).json({ ok: true });
    }
    // if (req.method === "POST") {
    //     //Create
    //     res.json({ ok: true });
    // }
    // if (req.method === "PUT") {
    //     //Update
    //     res.json({ ok: true });
    // }
    // if (req.method === "DELETE") {
    //     //Delete
    //     res.json({ ok: true });
    // }
}
