import MyButton from '../UI/MyButton'
import githubIcon from '../assets/dark-github.svg'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import InfoText from '../components/InfoText'


const InfoPage = (props) => {
  const { theme } = useSelector(state => state.theme)
  const { works, skills } = useSelector(state => state.posts)
  const { id } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    const currentPost = [...works.filter(item => item.id === id), ...skills.filter(item => item.id === id)]
    setPost(currentPost[0])

  }, [])

  const stack = []

  const isDark = theme === 'dark'


  if(!post) return <h2>Loading ...</h2>

  const isWorks = post.category === 'works'


  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-y-5 mx-7 sm:mx-0">
        <div className="flex gap-2 dark:text-white font-light">
          <Link to={isWorks ? '/works' : '/skills'} className="text-base text-purple-700 hover:underline dark:text-cyan-300">{isWorks ? 'Работы' : 'Навыки'}</Link>
          <span>></span>
          <h1 className="text-xl font-semibold">{post.title}</h1>
        </div>
        {
          isWorks &&
          <MyButton
            icon={githubIcon}
            target={'_blank'}
            to={{pathname: post.sourceUrl}}
            styleParams={`bg-black text-white dark:border-white border`}
            style={{background: isDark ? '#090909': ''}}
          >Исходники</MyButton>
        }
      </div>

      {
        post.imageUrl &&
        <img
          src={post.imageUrl}
          alt="preview"
          className="mt-9 rounded-md px-7 sm:px-0"
        />
      }

      <InfoText post={post} isDark={isDark} isWorks={isWorks}/>
    </div>
  )
}

export default InfoPage
