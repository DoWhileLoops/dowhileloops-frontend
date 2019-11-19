/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '',
    // Relative to /src/views
    view: 'Home'
  },
  {
    path: '/dashboard',
    // Relative to /src/views
    view: 'Dashboard'
  },
  {
    path: '/tech',
    name: 'Tech',
    view: 'Tech'
  },
  {
    path: '/tunes',
    name: 'Tunes',
    view: 'Tunes'
  },
  {
    path: '/blog/:id',
    name: 'SingleBlog',
    view: 'SingleBlog'
  },
  {
    path: '/blog',
    name: 'Blog',
    view: 'Blog'
  },
  {
    path: '/about',
    name: 'About',
    view: 'About'
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    view: 'UserProfile'
  },
  {
    path: '/table-list',
    name: 'Table List',
    view: 'TableList'
  },
  {
    path: '/typography',
    view: 'Typography'
  },
  {
    path: '/icons',
    view: 'Icons'
  },
  {
    path: '/maps',
    view: 'Maps'
  },
  {
    path: '/notifications',
    view: 'Notifications'
  },
  {
    path: '/upgrade',
    name: 'Upgrade to PRO',
    view: 'Upgrade'
  }
]
