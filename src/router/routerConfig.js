
// import DefaultLayout from 'layout/DefaultLayout'
// import Dashboard from '../pages/Dashboard'
// import BoardPanel from '../pages/BoardPanel'
// import BoardCardDetail from 'components/BoardCardDetail'

import AppBoardWrapper from 'pages/AppBoardWrapper'

const navRouter = [
  {
    path: '/'
  },
  {
    path: '/auth',
  },
  {
    path: '/app',
    exact: false,
    component: AppBoardWrapper
  }
]

const routerConfig = navRouter

export default routerConfig
