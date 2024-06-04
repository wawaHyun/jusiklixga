'use client';
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import LinkButton, { linkButtonTitles } from '@/app/atoms/button/LinkButton';
import { destroyCookie, parseCookies } from 'nookies';
import { useDispatch } from "react-redux";
import { logout } from '../../users/service/user.service';
import Image from 'next/image'
import { HomeIcon } from '@/app/atoms/icons/icons';


function Header() {
  const [showProfile, setShowProfile] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();
  const accCookies = parseCookies().accessToken

  useEffect(() => {
    if (accCookies) {
      setShowProfile(true)
    } else {
      setShowProfile(false)
    }
  }, [accCookies])

  const logoutHandler = () => {
    console.log('logout 적용 전' + parseCookies().accessToken)
    dispatch(logout())
      .then((res: any) => {
        destroyCookie(null, 'accessToken')
        setShowProfile(false)
        router.push('/')
      })
      .catch((err: any) => {
        console.log('header : logout error' + err)
      })
  }



  return (
<>  </>
  );
}
export default Header;