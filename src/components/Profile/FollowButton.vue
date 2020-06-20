<template>
    <div>
         <v-tbn text @click="followUser(followUser)">
            Follow  
         </v-tbn>   
    </div>
</template>

<script>
    export default {
        props:['userID'],
        components: {

        },
        data(){
            return {

            }
        },
        methods: {
           followUser(useriD){
               this.$store.dispatch('followUserAction', useriD);
           }
        }
    }
</script>

<style scoped>

</style>