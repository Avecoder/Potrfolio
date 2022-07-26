
import { SpinnerCircular } from 'spinners-react'

const Loading = (props) => {

  const isDark = localStorage.getItem('theme') === 'dark'

  return (
    <div className="flex items-center flex-col dark:bg-black min-h-screen justify-center">
      <SpinnerCircular color={isDark ? '#67e8f9' : '#7e22ce'} size="70px" secondaryColor="transparent"/>
    </div>
  )
}

export default Loading
