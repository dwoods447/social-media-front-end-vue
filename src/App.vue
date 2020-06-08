<template>
  <v-app>
    <v-content>
    <app-menu/>
    <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Menu from './components/Menu/Menu'
export default {
  name: 'App',

  components: {
  'app-menu': Menu,
  },
  created(){
    this.$store.dispatch('tryAutoLoginAction');
  },
  data: () => ({
    //
  }),
};
</script>
