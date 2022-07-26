import { Link } from 'react-router-dom'

const SkillItem = ({title, description, id}) => {
  return (
    <div className="skill-item">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <p className="mt-1 text-sm font-light mb-5">{description}</p>
      <Link to={`/info/${id}`} className="font-light dark:text-cyan-300 dark:hover:text-black dark:hover:bg-cyan-50 text-purple-700 rounded-md py-1 px-4 hover:font-normal hover:bg-purple-100 text-sm transition ease duration-150">Подробнее →</Link>
    </div>
  )
}

export default SkillItem
