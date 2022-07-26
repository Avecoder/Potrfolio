import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '../redux/slices/theme'
import { CSSTransition, TransitionGroup }  from 'react-transition-group'

const ThemeButton = (props) => {
  const { theme } = useSelector(state => state.theme)
  const dispatch = useDispatch()


  const enterDarkMode = () => dispatch(setTheme('dark'))

  const enterLightMode = () => dispatch(setTheme('light'))





  return (
    <>
      {
        theme === 'dark'
        ?
        <TransitionGroup component={null}>
          <CSSTransition classNames="button-bounce" key={location.key} timeout={300}>
            <button
              onClick={enterLightMode}
              className="transition ease-in-out duration-250 w-9 h-9 bg-cyan-300 hover:bg-cyan-400 hover:scale-105 rounded-md pointer flex justify-center items-center"
            >
              <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 2.47672V4.53922M11 18.2892V20.3517M17.3198 5.09437L15.8615 6.55273M6.13852 16.2757L4.68016 17.7341M19.9375 11.4142H17.875M4.125 11.4142H2.0625M17.3198 17.7341L15.8615 16.2757M6.13852 6.55273L4.68016 5.09437" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                <path d="M11 14.8517C12.8985 14.8517 14.4375 13.3127 14.4375 11.4142C14.4375 9.51574 12.8985 7.97672 11 7.97672C9.10152 7.97672 7.5625 9.51574 7.5625 11.4142C7.5625 13.3127 9.10152 14.8517 11 14.8517Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
              </svg>
            </button>
          </CSSTransition>
        </TransitionGroup>
        :
        <TransitionGroup component={null}>
          <CSSTransition classNames="button-bounce" key={location.key} timeout={300}>
            <button
              onClick={enterDarkMode}
              className="transition ease-in-out duration-250 w-9 h-9 bg-purple-700 hover:bg-purple-800 hover:scale-105 rounded-md pointer flex justify-center items-center"
            >
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.7076 13.0859C17.2356 12.3811 16.4648 11.5241 15.5904 11.6297C15.233 11.6729 14.8691 11.6951 14.5001 11.6951C9.5295 11.6951 5.50006 7.66566 5.50006 2.6951C5.50006 2.32604 5.52227 1.96217 5.56544 1.60475C5.67103 0.730369 4.8141 -0.0404873 4.10922 0.487571C1.91801 2.12912 0.500061 4.74652 0.500061 7.6951C0.500061 12.6657 4.5295 16.6951 9.50006 16.6951C12.4486 16.6951 15.066 15.2772 16.7076 13.0859Z" fill="white"/>
              </svg>
            </button>
          </CSSTransition>
        </TransitionGroup>
      }

    </>
  )
}

export default ThemeButton
