import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/listAlbums",
    name: "listAlbums",
    component: () => import("./views/ListAlbums.vue")
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("./views/EditTutorial.vue"),
    props: true
  },
];
const router = createRouter({
  base: process.env.NODE_ENV === 'development' ? '/' : '/album-frontend/',
  history: createWebHistory(),
  routes,
});

export default router;