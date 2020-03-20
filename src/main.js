import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

router.beforeEach((to,from,next) => {
    console.log(to)

    let isRequireLogin = to.matched.some((item) => {
        return item.meta.login_require
    })
    if (isRequireLogin) {
        next('/')
    } else {
        next()
    }
    
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");