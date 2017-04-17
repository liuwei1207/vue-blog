<template>
    <div id="app">
        <Site-Header></Site-Header>
        <!-- 一级路由 -->
        <router-view></router-view>
    </div>
</template>
<script>
import SiteHeader from './components/common/SiteHeader.vue';
export default {
    data() {
            return {

            }
        },
        components: {
            SiteHeader
        }
}
</script>
<style>
@import './assets/styles/reset.css';
</style>
