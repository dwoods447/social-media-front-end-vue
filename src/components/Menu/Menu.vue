 <template>
  <div>
 <v-card>
   <v-app-bar>
      <v-toolbar-title >MySocialApp</v-toolbar-title>
      <v-spacer></v-spacer>
         <v-btn text>
           Sign In
        </v-btn>

         <v-btn text>
           Sign Up
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
     
    }
}
</script>