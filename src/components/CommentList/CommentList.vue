<template>
    <div>
        <comment :content="comment.content" v-for="comment in comments" :key="comment.id"></comment>
    </div>
</template>

<script>
   import Comment from '../Comment/Comment'
    export default {
        props:{
            postId: {
                 type: String,
                 required: true
            }
        },
        components: {
            'comment':Comment
        },
        crteated(){
            this.getCommentsOnPost();
        },
        data(){
            return {
                comments: [],
            }
        },
        methods: {
            getCommentsOnPost(){
                this.$store.dispatch('getCommentsOnPostAction');
            }
        }
    }
</script>

<style  scoped>

</style>