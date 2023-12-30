import { RouteConfig, createWebHistory, createRouter } from 'vue-router';

const routes: Array<RouteConfig> = [
  {
    path: '/weather',
    name: 'home',
    component: () => import('../views/WeatherView.vue')
  },
  {
    path: '/multdayForecast',
    name: 'forecastTo4Days',
    component: () => import('../views/ForecastView.vue')
  }
]

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;