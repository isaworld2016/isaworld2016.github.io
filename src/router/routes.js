
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/About.vue') },
      { path: '/About', component: () => import('pages/About.vue') },
      { path: '/Contact', component: () => import('pages/Contact.vue') },
      { path: '/Skills', component: () => import('pages/Skills.vue') },
      { path: '/Education', component: () => import('pages/Education.vue') },
      { path: '/Todos', component: () => import('pages/Todos.vue') },
      { path: '/RandomBox', component: () => import('pages/RandomBox.vue') }

    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
