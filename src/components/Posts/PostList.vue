<template>
    <div>
        <Post v-for="post in posts" :key="post.id"/>
    </div>
</template>

<script>
import Post from '../Posts/Post'
    export default {
        components: {Post},
        data(){
            return {

            }
        }
    }
</script>

<style  scoped>

</style>