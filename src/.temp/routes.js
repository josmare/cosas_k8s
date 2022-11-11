const c1 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/josmar/MyDev/del-github/cosas_k8s/src/templates/Post.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/josmar/MyDev/del-github/cosas_k8s/node_modules/gridsome/app/pages/404.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/josmar/MyDev/del-github/cosas_k8s/src/pages/Index.vue")

export default [
  {
    path: "/blog/test-post1/",
    component: c1
  },
  {
    path: "/blog/test-post2/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
