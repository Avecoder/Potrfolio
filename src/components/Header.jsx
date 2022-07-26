import route from '../router'
import { Link, useLocation } from 'react-router-dom'
import ThemeButton from '../UI/ThemeButton'
import { useState } from 'react'


const Header = (props) => {
  const { pathname } = useLocation()
  const [navbar, setNavbar] = useState(false)


  return (
    <nav className="flex justify-end sm:justify-between py-12 px-3 sm:px-0">
      <ul className={`
                       flex justify-start flex-col gap-y-6 gap-x-5 items-center
                       pt-28 bg-white z-10 w-full h-full left-0 top-0 fixed text-xl
                       sm:text-sm font-light sm:flex-row sm:w-auto sm:h-auto sm:static sm:z-0 sm:pt-0
                       navbar duration-400 transition ease-in-out
                       ${!navbar ? 'hidden' : ''}
                       sm:flex
                    `}>
        {
          route.filter(item => item.name !== 'Инфо').map((item, i) =>
            <li key={i}>
              <Link
                className={`text-black hover:bg-purple-100 hover:text-underline
                          dark:text-white dark:hover:text-black dark:hover:bg-cyan-100
                          transition ease-in-out duration-250 py-1 px-2
                          rounded-md ${pathname === item.path ? 'dark:text-black dark:bg-cyan-300 bg-purple-100 font-normal text-purple-700'
                         : ''}`}
                to={item.path}
                onClick={() => setNavbar(!navbar)}
              >{item.name}</Link>
            </li>
          )
        }
      </ul>
      <div className="flex gap-3">

        <ThemeButton />
        <button
          onClick={() => setNavbar(!navbar)}
          className={
            `z-20 sm:hidden rounded-md transition
             ease-in-out duration-250 w-9 h-9 flex items-center justify-center bg-white
             nav-btn__wrap `
          }
        >
          <div className={`nav-btn ${navbar ? 'active' : ''}`}></div>
        </button>
      </div>

    </nav>
  )
}

export default Header
