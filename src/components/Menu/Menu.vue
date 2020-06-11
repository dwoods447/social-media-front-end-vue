 <template>
  <div>
 <v-card>
   <v-app-bar>
      <v-toolbar-title ><v-btn text @click="navigateTo('home')">{{ this.$store.getters.getAppName}}</v-btn></v-toolbar-title>
      <v-spacer></v-spacer>
         <span v-if="isAuthenticated && userInfo">Welcome, {{userInfo.username}}</span>&nbsp;
         <v-btn text v-if="!isAuthenticated" @click="navigateTo('signin')">
           Sign In
        </v-btn>

         <v-btn text v-if="!isAuthenticated" @click="navigateTo('signup')">
           Sign Up
        </v-btn>

        <v-btn text v-if="isAuthenticated" @click="logOut">
           LogOut
        </v-btn>

    </v-app-bar>



  </v-card>
  </div>
</template>
<script>
export default {
    data(){
         return {
           drawer : false
         }
    },
    methods: {
        navigateTo(route, param){
        if (param) {
          this.$router.push({ name: route, params: param });
        } else {
          this.$router.push({name: route});
        }
      },

      logOut(){
        this.$store.dispatch('setLogOutAction');
      },
    },

     computed: {
       isAuthenticated(){
         return this.$store.getters.isLoggedIn;
       },
       userInfo(){
         return this.$store.getters.getUser;
       }
     },
     
}
</script>