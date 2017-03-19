import Vue from 'vue'
import Router from 'vue-router'

// 加载页面与组件
import IndexPage from '../pages/index.vue';

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: IndexPage
    }]
})

// 加载路由
export default router
