import { Link } from 'react-router-dom'

const MyButton = ({children, styleParams, to, icon = null, target = null, style = null}) => {

  return (
      !target
      ? <Link
        className={`rounded-lg px-5 py-2 flex items-center gap-2 transition ease-in-out hover:scale-105 duration-250 ${styleParams}`}
        to={to}
      >{children}</Link>

      : <a
          href={to.pathname}
          style={style}
          target={target}
          className={`rounded-lg px-5 py-2 flex items-center gap-2 transition ease-in-out hover:scale-105 duration-250 ${styleParams}`}
        >
          {
            children
          }
          <img src={icon} alt="btn icon"/>
        </a>
  )
}

export default MyButton
