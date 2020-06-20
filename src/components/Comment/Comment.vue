<template>
    <div class="comment-container">
        <div v-if="comment.postedBy.generatedUser == 'true'" :class="['comment-border','is-generated-user']">
          <div v-if="comment.postedBy.gender == 'male'">
               <img :src="comment.postedBy.images.imagePaths[0].path|maleImageSrcFilter" :class="['comment-photo', 'is-male']">
               <p>{{ comment.username }}</p><p>{{ comment.text }}</p><p>{{comment.created}}</p>
          </div>
           <div v-if="comment.postedBy.gender ==='female'">
               <img :src="comment.postedBy.images.imagePaths[0].path|femaleImageSrcFilter" :class="['comment-photo','is-female']">
               <p>{{ comment.username }}</p><p>{{ comment.text }}</p><p>{{comment.created}}</p>
           </div>
        </div>
         <div v-else :class="['comment-border','is-not-a-generated-user']">
             <img :src="comment.postedBy.images.imagePaths[0].path|imageSrcFilter" :class="['comment-photo','is-real-user']">
             <p>{{ comment.username }}</p><p>{{ comment.text }}</p><p>{{comment.created}}</p>
         </div>
         
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
            console.log(`Printed Comment: ${JSON.stringify(this.comment, null, 2)}`);
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
 }

 .comment-border{
     width: 93%;
     margin: 0 auto;
     border: 1px solid #ddd;
     background-color: lightgrey;
 }
</style>