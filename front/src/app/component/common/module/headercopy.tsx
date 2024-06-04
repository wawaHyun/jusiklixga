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

    <nav className="bg-white border-gray-200 dark:bg-gray-900">

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <HomeIcon />
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

          {showProfile &&
            <button type="button" className="flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <svg className="h-16 w-16 text-gguntheme-130" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          }


          {showProfile &&
            <div className="px-4 py-3 visible float-end ">
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                </li>

                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                  <span onClick={logoutHandler} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><a href="#">Sign out</a></span>
                </li>
              </ul>
            </div>


          }

        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            {showProfile &&
              linkButtonTitles.map((elem) => (
                <ul key={elem.id}>
                  <LinkButton id={elem.id} title={elem.title} path={elem.path} />
                </ul>
              ))
            }

          </ul>
        </div>
      </div>



    </nav >
  );
}
export default Header;