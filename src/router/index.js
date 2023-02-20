import { createRouter, createWebHistory } from "vue-router";
import Post from "../components/Blogs/Post.vue";
import SinglePost from "../components/Blogs/SinglePost.vue";
import Practice from "../components/Practice/Practice.vue";
import Computed from "../components/Practice/Computed.vue";
import CreateMethod from "../components/Practice/CreateMethod.vue";
import MountMethod from "../components/Practice/MountMethod.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Post",
      component: Post,
    },
    {
      path: "/single/:id",
      name: "SinglePost",
      component: SinglePost,
    },
    {
      path: "/practice",
      name: "Practice",
      component: Practice,
    },
    {
      path: "/computed",
      name: "Computed",
      component: Computed,
    },
    {
      path: "/create",
      name: "CreateMethod",
      component: CreateMethod,
    },
    {
      path: "/mount",
      name: "MountMethod",
      component: MountMethod,
    },
  ],
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: HomeView
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (About.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import('../views/AboutView.vue')
  //   }
  // ]
});

export default router;
