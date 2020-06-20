<template>
    <div>
      <v-card style=" margin: 7px auto; max-width: 500px;">
                <v-toolbar dark color="primary">
                    <div v-if="generatedUser === 'true'">
                        <div v-if="gender === 'male'" >
                              <img :src="postCreatorImage|maleImageSrcFilter" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
                        </div>
                        <div v-if="gender === 'female'">
                              <img :src="postCreatorImage|femaleImageSrcFilter" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
                        </div>
                    </div>
                     <div v-else>
                           <img :src="postCreatorImage|imageSrcFilter" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;" >
                    </div>
              
                <h2 style="font-size: 1.1em; margin-right: 20px;">&nbsp;&nbsp;{{ postedBy.username }}<br/><span style="font-size: small;">{{ created | dateFilter}}</span></h2>
                <v-spacer></v-spacer>
              </v-toolbar>

       <v-card-text>
           {{this.text}}
           <v-card-actions>
                <v-btn icon @click="addLikeToPost(postId)">
                 <v-icon  dark :class="{'pink--text':postHasLikes}">mdi-heart</v-icon> &nbsp;&nbsp; {{ postLikes.length }}
                </v-btn>

               <v-btn icon>
                <v-icon>insert_comment</v-icon> &nbsp;&nbsp; {{ numberOfComments.length }}
                </v-btn>
           </v-card-actions>
            <v-card-actions>
                <v-text-field
                label="Write something"
                v-model="comment">
                </v-text-field>
                <v-btn  icon @click="addCommentToPost(postId)">
                    <v-icon>send</v-icon>
                </v-btn>
           </v-card-actions>
           <slot></slot>
       </v-card-text>        
      </v-card>
    </div>
</template>

<script>
import moment from 'moment'
    export default {
        props: {
            text: {
                type: String,
            },
            numberOfLikes: {
                type: Array,
            },
            numberOfComments:{
                type: Array,
            },
            postedBy: {
                type: Object
            },
            created:{
                type: String
            },
            postCreatorImage: {
                type: String
            },
            generatedUser:{
                type: String
            },
            gender: {
                type: String
            },
            postId: {
                type: String
            }
        },
        created(){
            this.checkLikes();   
       },
        data(){
            return {
                comment: '',
                postHasLikes: true,
            }
        },
        computed: {
            postLikes(){
                return this.numberOfLikes;
            }
        },
        methods:{
            checkLikes(){
                if(this.numberOfLikes.length > 0){
                        this.postHasLikes = true;
                }else {
                     this.postHasLikes = false;
                }
            },
            addLikeToPost(postId){
                const postInfo  = {postId: postId}
                this.$store.dispatch('addLikeToPostAction', postInfo);
            },
            addCommentToPost(postId){
                if(this.comment){
                 console.log(`Adding comment to post with id ${postId}`);
                 const postInfo  = {postId: postId, comment: this.comment };
                 this.$store.dispatch('addCommentToPost', postInfo);
                }
             
            }
        },
        filters: {
            dateFilter(date){
              if(date){
                return moment(new Date(date), 'MM/DD/YYYY').format('l')
              }
            },

            imageSrcFilter(src){
                if(src){
                    return require('../../assets/static/random-users/uploads/'+src);
                } else {
                  return 'http://via.placeholder.com/230x230';
                }
            },
            maleImageSrcFilter(src){
                if(src){
                    return require('../../assets/static/random-users/men/'+ src);
                }else {
                    return 'http://via.placeholder.com/230x230';
                }
            },
            femaleImageSrcFilter(src){
                if(src){
                  return require('../../assets/static/random-users/women/'+ src);
                }else {
                    return 'http://via.placeholder.com/230x230';
                }
            },
        }
    }
</script>

<style  scoped>
 .post-like{
     color: red;
 }
</style>