import ContactPage from './pages/ContactPage'
import InfoPage from './pages/InfoPage'
import MainPage from './pages/MainPage'
import SkillsPage from './pages/SkillsPage'
import WorksPage from './pages/WorksPage'

const route = [
  {path: '/', Component: MainPage, name: 'Главная'},
  {path: '/works', Component: WorksPage, name: 'Работы'},
  {path: '/skills', Component: SkillsPage, name: 'Навыки'},
  {path: '/info/:id', Component: InfoPage, name: 'Инфо'},
  {path: '/contact', Component: ContactPage, name: 'Контакты'},
]

export default route
