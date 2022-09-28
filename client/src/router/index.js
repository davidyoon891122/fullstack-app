import Vue from 'vue'
import VueRouter from "vue-router"
import HomeView from "@/components/HomeView"
import ArticleView from "@/components/ArticleView"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", name: "Home", component: HomeView },
        { path: "/:id", component: ArticleView }
    ]
})

export default router