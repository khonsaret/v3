//1.import webhistory
import { createRouter, createWebHistory } from 'vue-router'

//2.import from page
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Service from '@/pages/Service.vue';
import Why from '@/pages/Why.vue';
import Team from '@/pages/Team/Team.vue';
import TeamComponent from "@/components/Team.vue";
import TeamMember from '@/pages/Team/TeamMember.vue';
import Course from '@/pages/courses/index.vue';
import CoursePage from '@/pages/courses/CoursePage.vue';
import Repository from '@/pages/Repository.vue';
import Register from '@/pages/Register.vue';



//3.route home & about
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/service', component: Service },
    { path: '/why', component: Why },
//childern route
    { path: '/team', component: Team, children:[
      {path: ':id',component:TeamMember},
      {path: '',component:TeamComponent},
      //nested-route
      {path: 'service',component:Service},
      ]
     },
     {path: '/courses',component:Course},
     // { path: '/team/:id', component: TeamMember },
     {path: '/courses/:id',component:CoursePage},
     { path: '/repos', component: Repository },
     { path: '/register', component: Register },
    
  ]

//4.from 1 back to back default
const router = createRouter({
    history: createWebHistory(),
    routes
  })

//add new
  export default router
