<template>
    <div>
        <Post v-for="post in posts" 
        :text="post.text" 
        :numberOfLikes="post.likes" 
        :postedBy="post.postedBy" 
        :key="post._id"
        :created="post.created"
        :postCreatorImage="post.postedBy.images.imagePaths[0].path"
        :numberOfComments="post.comments"
        :generatedUser="post.postedBy.generatedUser"
        :gender="post.postedBy.gender"
        :postId="post._id"
        >
        <div v-if="post.comments" class="comment-list-outer-container">
             <comment-list 
            :comments="post.comments"
             ></comment-list>
        </div>
       
        </Post>
    </div>
</template>

<script>
import Post from '../Posts/Post'
import CommmentList from '../CommentList/CommentList'
    export default {
        props:{
            posts: {
                type: Array,
                required: true
            }
        },
        components: {Post, 'comment-list': 
        CommmentList},
        data(){
            return {

            }
        }
    }
</script>

<style  scoped>
.comment-list-outer-container{
    overflow: hidden;
}
</style>