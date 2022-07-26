import SkillItem from './SkillItem'
import { useSelector } from 'react-redux'

const SkillSection = () => {
  const { skills } = useSelector(state => state.posts)


  return (
    <div className="mb-32">
      <h2 className="text-3xl pl-7 sm:pl-0 font-semibold text-black mb-12 dark:text-white">Навыки</h2>
      <div className="grid px-7 grid-cols-1 sm:px-0 sm:grid-cols-2 sm:gap-y-20 gap-x-12 gap-y-14 dark:text-white">
        {
          skills.map((item, i) =>
            <SkillItem key={i} {...item} />
          )
        }
      </div>
    </div>
  )
}

export default SkillSection
