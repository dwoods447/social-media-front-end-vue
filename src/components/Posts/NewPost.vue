<template>
    <div>
         <v-card  style="max-width: 80%; margin: 25px auto;">
             <v-toolbar dark color="grey">
                 <div v-if="isAuthenticated">
                        <div v-if="user.generatedUser === 'true'" :class="['is-a-generated-user']">
                     <div v-if="user.gender === 'male'" :class="['is-a-male-user']">
                            <img :src="user|maleImageSrcFilter" style="display: inline-block; width:50px; height: 50px; margin-right: 7px; border-radius: 50%;">&nbsp;<h2 style="display: inline-block;">{{user.username}}</h2> 
                     </div>
                    <div v-if="user.gender === 'female'" :class="['is-a-female-user']">
                            <img :src="user|femaleImageSrcFilter" style="display: inline-block; width:50px; height: 50px; margin-right: 7px; border-radius: 50%;">&nbsp;<h2 style="display: inline-block;">{{user.username}}</h2> 
                     </div>
                 </div>
                 <div v-else :class="['is-not-a-generated-user']">
                      <img :src="user|imageSrcFilter" style="width:50px; height: 50px; margin-right: 7px; border-radius: 50%;">&nbsp;<h2>{{user.username}}</h2> 
                 </div>
                 </div>
                <v-spacer></v-spacer>
              </v-toolbar>
           <v-card-actions>
            <v-form style="width: 85%; padding: 1em; background-color: #eee; margin: 0 auto;">
                <v-text-field
                label="Share your thoughts..."
                v-model="text">
                </v-text-field>
                <v-btn text>
                    <v-icon>camera_alt</v-icon>
                </v-btn>
                 <v-btn text>
                    <v-icon>videocam</v-icon>
                </v-btn>
               <br/>
            </v-form>
           </v-card-actions>  
           <v-btn color="primary" style="margin: 10px 55px;" @click="addNewPost($event)">POST</v-btn>
          </v-card>
    </div>
</template>

<script>
    export default {
        props:{
            user: {
                type: Object
            }
        },
        created(){
            console.log(`This is a user on NEWPOST ${JSON.stringify(this.user)}`)
        },
        components: {

        },
        data(){
            return {
                photo: '',
                text: '',
            }
        },
        methods: {
             addNewPost(event){
              event.preventDefault();
              console.log(`Adding new post on the client.`)       
             let postContents = {};
             if(this.photo || this.text){
                if(this.photo){
                    postContents.photo = this.photo;
                }
                if(this.text){
                    postContents.text = this.text;
                } 
                 this.$store.dispatch('setAuthHeaderTokenAction', this.$store.getters.getAuthToken);
                 this.$store.dispatch('createPostAction', postContents);
              }
            }
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
        }
    }
</script>

<style scoped>

</style>