
import DefaultLayout from '../layout/Default'
import Dashboard from '../pages/Dashboard'

const routerConfig = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/dashboard',
        component: Dashboard
      }
    ]
  },

  {
    path: '*',
    component: null
  }
]

export default routerConfig
