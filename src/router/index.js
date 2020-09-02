import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "kontak",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Kontak.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
      children: [
        {
          path: "kontak",
          component: () =>
            import(/* webpackChunkName: "about" */ "../views/Kontak.vue")
        }
      ]
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
