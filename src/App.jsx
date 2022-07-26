import { useState, useEffect } from 'react'
import AppRouter from './components/AppRouter'
import Header from './components/Header'
import Model from './components/Model'
import Footer from './components/Footer'
import Loading from './components/Loading'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from './redux/slices/posts'


function App() {
  const { theme } = useSelector(state => state.theme)
  const { status } = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
    theme === 'dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
  }, [theme])

  if(status === 'loading') return <Loading />

  return (
    <div
      className="App transition duration-400"
      style={{background: theme === 'dark' ? '#090909': ''}}
    >
      <div className="max-w-2xl mx-auto">
        <Header/>
        <Model/>

        <AppRouter/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
