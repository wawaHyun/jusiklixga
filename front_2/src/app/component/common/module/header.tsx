'use client';
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import LinkButton, { linkButtonTitles } from '@/app/atoms/button/LinkButton';
import { destroyCookie, parseCookies } from 'nookies';
import { useDispatch } from "react-redux";
import { logout } from '../../users/service/user.service';
import Image from 'next/image'
import { CallIcon, ChartIcon, HomeIcon, ListIcon, MailIcon, NewsIcon } from '@/app/atoms/icons/icons';
import { table } from 'console';
import { PG } from '../enums/PG';


function Header() {
  const [showProfile, setShowProfile] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  // const logoutHandler = () => {
  //   console.log('logout 적용 전' + parseCookies().accessToken)
  //   dispatch(logout())
  //     .then((res: any) => {
  //       destroyCookie(null, 'accessToken')
  //       setShowProfile(false)
  //       router.push('/')
  //     })
  //     .catch((err: any) => {
  //       console.log('header : logout error' + err)
  //     })
  // }


  interface HoverTextProps {
    id: number;
    title: string;
    icon: any;
    address: any;
  }

  const subMemus: HoverTextProps[] = [
    { id: 1, title: "home", icon: <HomeIcon />, address: ()=>router.push(`/`) },
    { id: 2, title: "news", icon: <NewsIcon />, address: ()=>router.push(`${PG.JUSIK}/news`)},
    { id: 3, title: "chart", icon: <ChartIcon />, address: ()=>router.push(`${PG.JUSIK}/chart`)},
    { id: 4, title: "login", icon: <MailIcon />, address: ()=>router.push(`${PG.USER}/login`)},
    { id: 5, title: "board", icon: <ListIcon />, address: ()=>router.push(`${PG.BOARD}/list`)},
    { id: 6, title: "머하쥐", icon: <CallIcon />, address: ()=>router.push(`/`)},
  ]


  const memus = [
    { id: 1, title: "HOME", icon: <HomeIcon /> },
    { id: 2, title: "News", icon: <NewsIcon /> },
    { id: 3, title: "Mail", icon: <MailIcon /> },
    { id: 4, title: "chart", icon: <ChartIcon /> },
    { id: 5, title: "List", icon: <ListIcon /> },
    { id: 6, title: "Call", icon: <CallIcon /> },
  ]


  return (
    <div className="w-screen h-[300px]">

      <div>
        <ul role="list" className="w-screen grid grid-cols-6 justify-center gap-5">
          {memus.map((i) => (
            <li key={i.id} className="group/item hover:bg-slate-100 ">
              <div className="flex items-center justify-center mb-5 font-bold mt-5">
                {i.icon}{i.title}
              </div>
              <a className="group/edit invisible group-hover/item:visible block ">
                {subMemus.map((hover: HoverTextProps, i:number) => (
                  <div className="h-auto">
                    <ul key={i}  className="flex group py-2 items-center justify-center">
                      <li className="">
                      <button className="flex hover:text-gguntheme-210 " onClick={hover.address}>{hover.icon}{hover.title}</button></li>
                    </ul>
                  </div>
                ))}

              </a>
            </li>
          ))}
        </ul>
      </div>

    </div>

  );
}
export default Header;