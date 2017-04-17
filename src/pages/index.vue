<template>
    <div class="out-wrapper">
        <div class="site-content content-blog">
            <!-- Navigation -->
            <!-- <Navigation></Navigation> -->
            <!-- /Navigation -->
            <!-- Introduce -->
            <Introduce></Introduce>
            <!-- /Introduce -->
            <!-- Recent-Work-list -->
            <Recent-Work></Recent-Work>
            <!-- /Recent-Work-list -->
            <!-- ContactMe -->
            <ContactMe></ContactMe>
            <!-- /ContactMe -->
        </div>
    </div>
</template>
<script>
import Navigation from '../components/common/Navigation.vue';
import Introduce from '../components/indexPage/Introduce.vue';
import RecentWork from '../components/indexPage/RecentWork.vue';
import ContactMe from '../components/indexPage/ContactMe.vue';
export default {
    data() {
            return {

            }
        },
        components: {
            Navigation,
            RecentWork,
            Introduce,
            ContactMe
        }
}
</script>
<style>
/* # =================================================================
   # site-content
   # ================================================================= */

.site-content {
    margin-left: 35%;
    padding: 8em 4em 4em 4em;
    width: calc(100% - 35%);
}

@media screen and (max-width: 980px) {
    .site-content {
        width: 100%;
        margin: 0;
    }
}


/* # =================================================================
   # content-blog__introduce
   # ================================================================= */

.content-blog__introduce h2 {
    font-size: 2em;
    color: #787878;
    font-weight: 400;
    margin: 0 0 1em 0;
}

.content-blog__introduce p {
    margin: 0 0 2em 0;
}

.content-blog__introduce__button {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    -moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    -ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    background-color: transparent;
    border-radius: 0.35em;
    border: solid 3px #efefef;
    color: #787878 !important;
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    height: 3.15em;
    height: calc(2.75em + 6px);
    line-height: 2.75em;
    min-width: 10em;
    padding: 0 1.5em;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
}

.content-blog__introduce__button:hover {
    border-color: #49bf9d;
    color: #49bf9d !important;
}
</style>
