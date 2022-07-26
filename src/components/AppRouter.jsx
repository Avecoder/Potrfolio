import {
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom'

import { CSSTransition, TransitionGroup }  from 'react-transition-group'

import routes from '../router'

const AppRouter = () => {
  const location = useLocation()

  return (
      <TransitionGroup component={null}>
        <CSSTransition classNames="fade" key={location.key} timeout={300}>
          <Routes>
            {routes.map(({path, Component}, i) =>
              <Route path={path} element={<Component/>} key={i}></Route>
            )}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>


  )
}

export default AppRouter
