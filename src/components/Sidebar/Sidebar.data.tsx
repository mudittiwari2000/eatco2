import {
  Assessment,
  Dashboard,
  Notifications,
  Settings,
} from '@mui/icons-material'

const sidebarData = [
  {
    title: 'Dashboard',
    Icon: Dashboard,
    path: '/dashboard',
  },
  {
    title: 'Reports',
    Icon: Assessment,
    path: '/reports',
  },
  {
    title: 'Notifications',
    Icon: Notifications,
    path: '/notifications',
  },
  {
    title: 'Settings',
    Icon: Settings,
    path: '/settings',
  },
]

export default sidebarData
