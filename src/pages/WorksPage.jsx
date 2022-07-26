import Works from '../components/Works'
import { useEffect } from 'react'



const WorksPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <Works />
  )
}

export default WorksPage
