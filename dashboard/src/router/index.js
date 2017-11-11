import Vue from 'vue'
import Router from 'vue-router'
import VueWebsocket from 'vue-websocket'
import HelloWorld from '@/components/HelloWorld'
import CampaignComponent from '@/components/Campaign'

Vue.use(Router)
Vue.use(VueWebsocket, 'ws://localhost:8123')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/campaign',
      name: 'Campaign',
      component: CampaignComponent
    }
  ]
})
