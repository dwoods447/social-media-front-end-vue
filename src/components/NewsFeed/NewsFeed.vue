<template>
    <div>
        <v-card  style="max-width: 65%; margin: 25px auto; ">
             <v-toolbar dark color="primary">
                <h2>News Feed</h2>  
                <v-spacer></v-spacer>
              </v-toolbar>

        <div style="padding: 0.5em;">
          <div>
               <NewPostForm :user="this.$store.getters.getUser"></NewPostForm>
            </div> 
             <div style="height:100vh; overflow-y: scroll;">
               <PostList :posts="allPosts"></PostList> 
            </div>       
          </div>   
        </v-card>
    </div>
</template>

<script>
import PostList from '../Posts/PostList'
import NewPostForm from '../Posts/NewPost'
import openSocket from 'socket.io-client'
import api from '../../services/API'
    export default {
        components: {
            PostList,
            NewPostForm
        },
        created(){
            console.log(`bASEURL = ${api.defaults.baseURL}`)
            this.getAllRecentPosts();
            const newPosts = [...this.$store.getters.getAllPosts];
            const socket = openSocket(api.defaults.baseURL);
            socket.on('new-posts', (data)=>{
                if(data.action === 'create'){
                   console.log(`New post action succedded on client via web SOCKETS`);
                  
                   newPosts.push(data.post);
                   let sortedPosts = newPosts.sort((a, b)=>{
                       var dateA = Date.parse(a.created);
                       var dateB = Date.parse(b.created);
                         if(dateB < dateA){
                                return -1;
                        // a should come after b in the sorted order
                        }else if(dateB > dateA){
                                return 1;
                        // and and b are the same
                        }else{
                                return 0;
                        }
                   }) 
                   sortedPosts  = newPosts;
                   this.posts = sortedPosts;
                   this.$store.dispatch('setAllPostsAction', this.posts);
                }
            });


            socket.on('new-likes', (data)=>{
                const newPosts = [...this.$store.getters.getAllPosts];
                if(data.action === 'hit-like'){
                   console.log(`New like action succeeded on client via web SOCKETS`); 
                   const likedPostIndex = newPosts.findIndex( post => {
                      // console.log(`is ${post._id.toString()} equal to: ${data.post._id.toString()}`);
                      return  post._id.toString() === data.post._id.toString();
                   });

                   if(likedPostIndex === -1){
                       // Post nto found or no longer exists
                       console.log(`Post not found!`);
                       return;
                   }
                      console.log(`Post found! updating....`);
                     newPosts[likedPostIndex] = data.post;  
                     let sortedPosts = newPosts.sort((a, b)=>{
                       var dateA = Date.parse(a.created);
                       var dateB = Date.parse(b.created);
                         if(dateB < dateA){
                                return -1;
                        // a should come after b in the sorted order
                        }else if(dateB > dateA){
                                return 1;
                        // and and b are the same
                        }else{
                                return 0;
                        }
                   })
                   sortedPosts  = newPosts;
                   this.posts = sortedPosts;
                   this.$store.dispatch('setAllPostsAction', this.posts);    

                }   
            })
            
        },
        data(){
            return {
                posts: [],
            }
        },
        methods: {
            async getAllRecentPosts(){
                console.log('Fetching all posts....');
                let allPosts = [];
                this.$store.dispatch('setAuthHeaderTokenAction', this.$store.getters.getAuthToken);
                allPosts = await this.$store.dispatch('fetchAllPostsAction');
                this.posts = allPosts; 
            },
           
        },
        computed: {
            allPosts(){
                return this.posts;
            }
        }
    }
</script>

<style scoped>

</style>