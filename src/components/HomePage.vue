<template style="margin: 0; padding: 0;">
    <div style="margin: 0; padding: 0;">
            <template style="margin: 0; padding: 0;">
                <v-parallax src="../assets/banner/home-banner.jpg" 
                height="856">
                <div class="flex-container">
                    <div class="flex-item">
                        <h1>Connect with friends and the world around you on {{ this.$store.getters.getAppName}}</h1>
                        <ul>
                            <li>See photos and updates from followers in News Feed.</li>
                            <li>Share what's new in your life on your Timeline.</li>
                            <li>Find more of what you're looking for with {{ this.$store.getters.getAppName}} search</li>
                        </ul>
                    </div>
                    <div class="flex-item">
                           <h1>Sign Up</h1>
                           <p>It’s quick and easy.</p>
                           <signup-component></signup-component> 
                    </div>
                </div>
                </v-parallax>
            </template>
    </div>
</template>

<script>
    import SignUp from '../components/Auth/SignUp'
    export default {
        components: {
            'signup-component': SignUp
        },
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
 .flex-container{
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: center;
 }

 .header-text{
     font-size: 6em
 }

 .flex-item {
     width: 35%;
     height: 560px;
     margin: 10px;
 }
</style>