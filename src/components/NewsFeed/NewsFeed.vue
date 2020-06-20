<template>
    <div>
        
        <v-card  style="max-width: 45%; margin: 25px auto; ">
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
    export default {
        components: {
            PostList,
            NewPostForm
        },
        created(){
            this.getAllRecentPosts();
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