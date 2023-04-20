import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardView.vue'),
      //SE AGREGO EL CHILDREN PARA PODER UTILIZAR EL BODY
      children:[
        {
          path: '/DashDepartamento',
          name: 'DashDepartamento',
          component: () => import('../components/Departamento/DepartamentoDash.vue'),
          children: [{
            path: '/GetDep',
            name: 'GetDep',
            component: () => import('../components/Departamento/GetDep.vue')
          },
          {
            path: '/PostDep',
            name: 'PostDep',
            component: () => import('../components/Departamento/PostDep.vue')
          },
          {
            path: '/PutDep',
            name: 'PutDep',
            component: () => import('../components/Departamento/PutDep.vue')
          },
          ]
        },
        {
          path: '/DashboardClie',
          name: 'DashboardClie',
          component: () => import('../components/Cliente/DashboardClie.vue'),
          children: [{
            path: '/Getclie',
            name: 'Getclie',
            component: () => import('../components/Cliente/Getclie.vue')
          },
          {
            path: '/Postclie',
            name: 'Postclie',
            component: () => import('../components/Cliente/Postclie.vue')
          },
          {
            path: '/Putclie',
            name: 'Putclie',
            component: () => import('../components/Cliente/Putclie.vue')
          },
          ]
        },
        {
          path: '/Dashempleado',
          name: 'Dashempleado',
          component: () => import('../components/Empleado/DasbEmpleado.vue'),
          children: [{
            path: '/GetEmp',
            name: 'GetEmp',
            component: () => import('../components/Empleado/GetEmp.vue')
          },
          {
            path: '/PostEmpleado',
            name: 'PostEmpleado',
            component: () => import('../components/Empleado/PostEmpleado.vue')
          },
          {
            path: '/PutEmp',
            name: 'PutEmp',
            component: () => import('../components/Empleado/PutEmp.vue')
          },
          ]
        },
        {
          path: '/DashFacturas',
          name: 'DashFacturas',
          component: () => import('../components/Facturas/DashboardFac.vue'),
          children: [{
            path: '/GetFac',
            name: 'GetFac',
            component: () => import('../components/Facturas/GetFac.vue')
          },
          {
            path: '/PostFac',
            name: 'PostFac',
            component: () => import('../components/Facturas/PostFac.vue')
          },
          {
            path: '/PutFac',
            name: 'PutFac',
            component: () => import('../components/Facturas/PutFac.vue')
          },
          ]
        },
        {
          path: '/DashPuestos',
          name: 'DashPuestos',
          component: () => import('../components/Puesto/DashboardPues.vue'),
          children: [{
            path: '/GetPues',
            name: 'GetPues',
            component: () => import('../components/Puesto/GetPues.vue')
          },
          {
            path: '/PostPues',
            name: 'PostPues',
            component: () => import('../components/Puesto/PostPues.vue')
          },
          {
            path: '/PutPues',
            name: 'PutPues',
            component: () => import('../components/Puesto/PutPues.vue')
          },
          ]
        },
        {
          path: '/DashRol',
          name: 'DashRol',
          component: () => import('../components/Rol/DashboardRol.vue'),
          children: [{
            path: '/GetRol',
            name: 'GetRol',
            component: () => import('../components/Rol/GetRol.vue')
          },
          {
            path: '/PostRol',
            name: 'PostRol',
            component: () => import('../components/Rol/PostRol.vue')
          },
          {
            path: '/PutRol',
            name: 'PutRol',
            component: () => import('../components/Rol/PutRol.vue')
          },
          ]
        },
        {
          path:'/ClienteDashboard',
          name: 'ClienteDashboard',
          component: () => import('../components/Dashboard/Dashboardusuario.vue'),
          children:[
            {
              path:'/PostC',
              name: 'PostC',
              component: () => import('../components/Dashboard/PostC.vue'),
            },
            {
              path:'/Put',
              name: 'Put',
              component: () => import('../components/Dashboard/Put.vue'),
            },
            {
              path:'/GetC',
              name: 'GetC',
              component: () => import('../components/Dashboard/GetC.vue'),
            },

          ]
        },
       
  
      ]
    },

  ]
})

export default router
