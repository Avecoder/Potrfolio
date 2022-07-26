import SkillSection from '../components/SkillSection'
import { useEffect } from 'react'

const SkillsPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <SkillSection />
  )
}

export default SkillsPage
