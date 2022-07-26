import githubIcon from '../assets/github.svg'
import githubIconDark from '../assets/dark-github.svg'
import gmailIcon from '../assets/gmail.svg'
import gmailIconDark from '../assets/dark-gmail.svg'
import telegramIcon from '../assets/telegram.svg'
import telegramIconDark from '../assets/dark-telegram.svg'
import { useSelector } from 'react-redux'
import { githubUrl, telegramUrl } from '../utils'

const ContactSection = (props) => {
  const { theme } = useSelector(state => state.theme)

  const isDark = theme === 'dark'

  const social = [
    {
      icon: isDark ? gmailIconDark : gmailIcon,
      title: 'foravecode@gmail.com',
      // url: 'https://github.com/Avecoder'
    },
    {
      icon:isDark ? telegramIconDark : telegramIcon,
      title: '@Avecoders',
      url: telegramUrl
    },
    {
      icon: isDark ? githubIconDark : githubIcon,
      title: '@Avecoder',
      url: githubUrl
    },
  ]

  return (
    <div className="px-7 sm:px-0">
      <h2 className="text-3xl font-semibold text-black mb-12 dark:text-white">Контактная информация</h2>
      <p className="text-sm font-light mb-8 dark:text-white">Если вы заинтерисовались моей кандидатурой или хотите пригласить в крупный проект, то вы можете написать на почту, либо связаться в телеграм:</p>
      <ul>
        {
          social.map(({icon, title, url = null}, i) =>
            <li key={i} className="flex gap-4 items-center mb-4 font-light dark:text-white">
              <img src={icon} alt="social"/>
              {
                url
                ? <a href={url} className="transition esae-in-out duration-250 dark:hover:text-cyan-300 hover:text-purple-700 hover:text-underline">{title}</a>
                : <p>{title}</p>
              }
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default ContactSection
