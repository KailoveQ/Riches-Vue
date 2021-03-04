import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Labels from '@/views/Labels.vue';
import NotFound from '@/views/NotFound.vue';
import Money from '@/views/Money.vue';
import Tags from '@/views/Tags.vue';
import Charts from '@/views/Charts.vue';
import EditRecord from '@/views/EditRecord.vue';


Vue.use(VueRouter)


const routes: Array<RouteConfig> = [
  {
    path:'/',
    redirect:'/labels'
  },
  {
    path:'/labels',
    component:Labels
  },
  {
    path:'/money',
    component:Money
  },
  {
    path:'/charts',
    component:Charts
  },
  {
    path:'/tags',
    component:Tags
  },
  {
    path: '/record/edit/:id',
    component: EditRecord
  },
  {
    path:'*',
    component:NotFound
  }

];

const router = new VueRouter({
  routes
});

export default router;
