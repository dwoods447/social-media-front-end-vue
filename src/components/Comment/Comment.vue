<template>
    <div class="comment-container">
    <v-row
        class="mb-6"
        justify="center"
        no-gutters
        >
      <v-col lg="2">
        <div v-if="comment.postedBy.generatedUser == 'true'" :class="['comment-border','is-generated-user']">
          <div v-if="comment.postedBy.gender == 'male'" class="comment-photo-container">
               <img :src="comment.postedBy.images.imagePaths[0].path|maleImageSrcFilter" :class="['comment-photo', 'is-male']">
               <p>{{ comment.username }}</p><p>{{ comment.text }}</p><p>{{comment.created}}</p>
          </div>
           <div v-if="comment.postedBy.gender ==='female'" class="comment-photo-container">
               <img :src="comment.postedBy.images.imagePaths[0].path|femaleImageSrcFilter" :class="['comment-photo','is-female']">
           </div>
        </div>
         <div v-else :class="['comment-border','is-not-a-generated-user']" class="comment-photo-container">
             <img :src="comment.postedBy.images.imagePaths[0].path|imageSrcFilter" :class="['comment-photo','is-real-user']">
         </div>
        </v-col>
       <v-col lg="10" class="comment-text-container">
             <p class="comment-text">{{ comment.postedBy.username }}</p>
             <p class="comment-text">{{ comment.text }}</p>
             <p class="comment-text">{{comment.created}}</p>
      </v-col>
      </v-row>
    </div>
</template>

<script>
    export default {
        props: {
            comment: {
                type: Object,
            }
        },
        created(){
            //console.log(`Printed Comment: ${JSON.stringify(this.comment, null, 2)}`);
        },
        data(){
            return {

            }
        },
        methods: {

        },
        filters:{
            imageSrcFilter(src){
                if(src){
                    console.log(`${src}`);
                    //return require(`../../assets/static/random-users/uploads/${src}`);
                    return require('../../assets/static/random-users/uploads/'+src)
                } else {
                  return 'http://via.placeholder.com/230x230';
                }
            },
            maleImageSrcFilter(src){
                if(src){
                    console.log(`${src}`);
                    //return require(`../../assets/static/random-users/men/${src}`)
                    return require('../../assets/static/random-users/men/'+src);
                }else {
                    return 'http://via.placeholder.com/230x230';
                }
            },
            femaleImageSrcFilter(src){
                if(src){
                    console.log(`${src}`);
                  return require('../../assets/static/random-users/women/'+src);
                }else {
                    return 'http://via.placeholder.com/230x230';
                }
            },
        }
    }
</script>

<style  scoped>
 .comment-photo{
     width: 50px;
     height: 50px;
     border-radius: 50%;
     display: flex;
 }
 .comment-photo-container{
      margin: 35% auto;
 }
 .comment-text-container{
     width: 53%;
     background-color: #eee;
     margin-left: -35px;
     padding: 0.5em;
 }
 .comment-text{
     padding: 0.5em;
     line-height: 8px;
 }
</style>