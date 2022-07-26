import Card from './Card'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Works = (props) => {
  const { pathname } = useLocation()
  const works = useSelector(state => pathname !== '/works' ? state.posts.works.slice(0, 4) : state.posts.works)


  return (
    <div className="mb-32">
      <h2 className="text-3xl pl-7 sm:pl-0  font-semibold text-black mb-12 dark:text-white">Работы</h2>
      <div className="grid grid-cols-1 px-7 sm:px-0 sm:grid-cols-2 gap-x-7 gap-y-14 mb-12">
        {
          works.map((item, i) =>
            <Card key={i} {...item}/>
          )
        }
      </div>
      {
        pathname !== '/works' && <Link to="/works" className="dark:text-cyan-300 dark:hover:text-black dark:hover:bg-cyan-50 font-light underline text-purple-700 rounded-md py-1 px-4 hover:font-normal hover:bg-purple-100 text-sm transition ease duration-150">Просмотреть все работы   →</Link>
      }
    </div>
  )
}

export default Works
