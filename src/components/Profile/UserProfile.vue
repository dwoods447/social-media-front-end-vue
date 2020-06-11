<template>
    <div>
       
        <v-card style="margin: 0 auto; width: 600px; padding: 1em;">
             <h2>User Profile</h2> 
             <v-row no-gutters style="border-bottom: 2px solid #ccc;">
                 <v-col cols="9"
                    justify="center"
                    no-gutters>
                    <v-row>
                        <v-col cols="4" no-gutters> <img src="http://via.placeholder.com/120x120"></v-col>
                        <v-col cols="8" no-gutters>
                            <h3>{{ 'Jane Smith'}}</h3>
                            <p>{{'janesmith@smith.info'}}</p>
                        </v-col>
                    </v-row>
                 </v-col>
                  <v-col cols="3"  justify="center" no-gutters>
                  <div class="flex-container-two">
                        <v-btn icon>
                            <v-icon> edit</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon> delete</v-icon>
                        </v-btn>
                    </div>
                 </v-col>
             </v-row>
          
             <v-row no-gutters >
                <v-col cols="12">
                    {{'Joined: Tue, May 2005'}}
                </v-col> 
             </v-row>   
        </v-card>
    </div>
</template>

<script>

    export default {
        components: {

        },
        data(){
            return {
                
            }
        }
    }
</script>

<style scoped>
    .flex-container{
        display: inline-block;
    }
    .flex-container-two{
        display: inline-block;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }
</style>