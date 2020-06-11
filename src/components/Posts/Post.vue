<template>
    <div>

        <h2 style="text-align: center;">Single Post</h2>
      <v-card style=" margin: 0 auto; max-width: 500px;">
                <v-toolbar dark color="primary">
                <img :src="'http://via.placeholder.com/50x50'" style="border-radius: 50%; margin-right: 10px;">
                <span style="margin-right: 20px;">&nbsp;&nbsp;{{ 'Demaria Woods' }}<br/><span style="font-size: small;">{{ 'Fri Dec 22, 2017'}}</span></span>
                <v-spacer></v-spacer>
              </v-toolbar>

       <v-card-text>
           {{'"Injustice anywhere is a threat to justice everywhere." - Martin Luther King'}}
           <v-card-actions>
                <v-btn icon>
                <v-icon>mdi-heart</v-icon> &nbsp;&nbsp; {{ 3 }}
                </v-btn>

            <v-btn   v-btn icon>
                <v-icon>insert_comment</v-icon> &nbsp;&nbsp; {{ 2 }}
                </v-btn>
           </v-card-actions>
            <v-card-actions>
                <v-text-field
                label="Write something"></v-text-field>
           </v-card-actions>
       </v-card-text>        
      </v-card>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>