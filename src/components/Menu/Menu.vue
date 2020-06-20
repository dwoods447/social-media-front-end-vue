 <template>
  <div>
 <v-card>
   <v-app-bar>
      <v-toolbar-title ><v-btn text @click="navigateTo('home')">{{ this.$store.getters.getAppName}}</v-btn></v-toolbar-title>
      <span>
        <v-btn text
        v-if="isAuthenticated" @click="navigateTo('newsfeed')">
        NewsFeed
        </v-btn>
      </span>
      <v-spacer></v-spacer>
         <div v-if="isAuthenticated && userInfo">
                <div v-if="userInfo.generatedUser === 'true'" :class="['is-a-generated-user']">
                     <div v-if="userInfo.gender === 'male'" :class="['is-a-male-user']">
                            <img :src="userInfo|maleImageSrcFilter" style="display: inline-block; width:50px; height: 50px; margin-right: 7px; border-radius: 50%;">
                     </div>
                    <div v-if="userInfo.gender === 'female'" :class="['is-a-female-user']">
                            <img :src="userInfo|femaleImageSrcFilter" style="display: inline-block; width:50px; height: 50px; margin-right: 7px; border-radius: 50%;">
                     </div>
                 </div>
                 <div v-else :class="['is-not-a-generated-user']">
                      <img :src="userInfo|imageSrcFilter" style="width:50px; height: 50px; margin-right: 7px; border-radius: 50%;">
          </div>
       </div>
 
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

    filters: {
         imageSrcFilter(src){
                 console.log(`${src.images.imagePaths[0].path}`);
                if(src.images.imagePaths[0].length > 0){
                    //return require(`../../assets/static/random-users/uploads/${src}`);
                    return require('../../assets/static/random-users/uploads/'+src.images.imagePaths[0].path)
                } else {
                  return 'http://via.placeholder.com/230x230';
                }
            },
            maleImageSrcFilter(src){
                console.log(`${src.images.imagePaths[0].path}`);
                if(src.images.imagePaths[0].length > 0){
                    console.log(`${src}`);
                    //return require(`../../assets/static/random-users/men/${src}`)
                    return require('../../assets/static/random-users/men/'+src.images.imagePaths[0].path);
                }else {
                    return 'http://via.placeholder.com/230x230';
                }
            },
            femaleImageSrcFilter(src){
                console.log(`Src for female filter ${src.images.imagePaths[0].path}`);
                if(src.images.imagePaths[0].length > 0){
                    console.log(`${src}`);
                  return require('../../assets/static/random-users/women/'+src.images.imagePaths[0].path);
                }else {
                    return 'http://via.placeholder.com/230x230';
                }
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