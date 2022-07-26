import { Link } from 'react-router-dom'
import MyButton from '../UI/MyButton'
import githubIcon from '../assets/dark-github.svg'
import { useSelector } from 'react-redux'
import { githubUrl } from '../utils'
import Typewriter from 'typewriter-effect'


const PreviewSection = (props) => {
  const { theme } = useSelector(state => state.theme)


  return (
    <div className="flex items-center flex-col mb-32 dark:text-white">
      <h1 className="text-3xl sm:text-5xl font-bold mb-2">
        <Typewriter options={{cursor: '_'}} onInit={(typewriter)=> {
           typewriter
            .typeString(`Веб-разработчик`)
            .pauseFor(500)
            .start()
           }}
         />
      </h1>
      <p className="text-sm px-7 sm:px-0 text-center font-light mb-9">Разработка сайтов, PWA-приложений, Backend-а и UI/UX дизайна.</p>
      <div className="flex gap-4 flex-col sm:flex-row items-center">
        <MyButton
          to={'/works'}
          styleParams={`
                        text-purple-700 border-purple-700 border transition ease-in-out
                        hover:scale-105 hover:bg-purple-700 duration-250 hover:text-white
                        dark:text-cyan-300 dark:border-cyan-300 dark:hover:bg-cyan-300 dark:hover:text-black
                      `}
        >Мои работы</MyButton>
        <MyButton
          to={{pathname: githubUrl}}
          target={'_blank'}
          icon={githubIcon}
          styleParams={`bg-black text-white dark:border-white border`}
          style={{background: theme === 'dark' ? '#090909': ''}}
        >Перейти в github</MyButton>
      </div>
    </div>
  )
}

export default PreviewSection
