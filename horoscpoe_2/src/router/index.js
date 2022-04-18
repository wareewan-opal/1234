import { createRouter, createWebHistory } from 'vue-router'
import Love from '../views/Love.vue'
import Study from '../views/Study.vue'
import Health from '../views/Health.vue'
import Finance from '../views/Finance.vue'
import Home from '../views/Home.vue'
import RequestSun from '../views/RequestSun.vue'

const history = createWebHistory()

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home 
    },
    {
        path: '/love-horoscope',
        name: 'Love',
        component: Love
    },
    {
        path: '/study-horoscope',
        name: 'Study',
        component: Study
    },
    {
        path: '/health-horoscope',
        name: 'Health',
        component: Health 
    },
    {
        path: '/finance-horoscope',
        name: 'Finance',
        component: Finance 
    },
    {
        path: '/requst-to-sun',
        name: 'RequestSun',
        component: RequestSun
    }
]
const router = createRouter({ history,routes })
export default router