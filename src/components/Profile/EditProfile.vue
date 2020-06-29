<template>
<div>
     <div class="flex-container">
                      <div v-if="isGeneratedUser === 'true'" >
                          <div v-if="getGender === 'male'">
                               <img :src="fullImageSrc|maleImageSrcFilter" aspect-ratio="1">
                          </div>
                           <div v-if="getGender === 'female'">
                                <img :src="fullImageSrc|femaleImageSrcFilter" aspect-ratio="1" >
                          </div>
                      </div>
                      <div v-else>
                            <img :src="fullImageSrc|imageSrcFilter" aspect-ratio="1">
                      </div>
                      <div>
                        <a @click="removeSelectedFile" href="javascript:void(0);"><span  v-if="fullImageSrc">X</span></a>
                        <input type="file" ref="file"  @change="onSelect">
                         <v-card-actions>
                        <div>
                            <h5>Allowed file types: {{allowedTypes}}</h5>
                            </div>
                            &nbsp;
                            <div v-if="uploadError">
                            <h5 style="color:red;">{{message}}</h5>
                            </div>
                            &nbsp;
                            <div v-if="uploadSuccess">
                            <h5 style="color:green;">{{message}}</h5>
                            </div>
                    </v-card-actions>
                      </div>
                     
         </div>
          <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
           <v-card class="elevation-12">
               <h2 style="text-align:center;">Edit Profile</h2>
              <v-form @submit.prevent="formSubmit" enctype="multipart/form-data"  style="padding: 1em;">
                    <v-text-field
                    v-model="formData.username"
                    :counter="10"
                    label="Username"
                    required
                
                    ></v-text-field>
                    <v-text-field
                    v-model="formData.about"
                    label="About"
                    required
                    ></v-text-field>
                    <v-text-field
                    v-model="formData.email"
                    label="E-mail"
                    required
                    ></v-text-field>
                    <v-text-field
                    v-model="formData.password"
                    label="Password"
                    required
                    password
                    ></v-text-field>
                    <v-text-field
                    v-model="formData.confirmPassword"
                    label="Confirm Password"
                    required
                    password
                ></v-text-field>
                <v-btn class="mr-4">submit</v-btn>
                <v-btn>clear</v-btn>
            </v-form>
             </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
</div>
     
</template>

<script>
    export default {
        components: {

        },
        created(){
            console.log(`User Generated value: ${this.$store.getters.isGeneratedUser}`);
        },
        data(){
            return {
                imageUrl:'',
                selectedFile: null,
                uploadError: false,
                uploadSuccess: false,
                allowedTypes: '.jpg, .jpeg, .png',
                message: '',
                formData: {
                    username: '',
                    email: '',
                    about: '',
                    confirmPassword: '',
                    
                }
               
                
            }
        },
        methods: {
             onSelect: function(e){
                this.selectedFile = e.target.files[0];
                if (this.selectedFile) {
                    // File is selected  
                   const reader = new FileReader();
                    reader.onload = e =>  this.imageUrl = e.target.result;
                    reader.readAsDataURL(this.selectedFile);
                }
            },

            formSubmit(){
                this.$store.dispatch('setAuthHeaderTokenAction');
                this.$store.dispatch('editUserInfoAction', this.formData);
                if(this.imageUrl){
                    this.$store.dispatch('uploadUserImageAction', this.imageUrl);
                }
                
            },

              removeSelectedFile(){
                this.selectedFile = null;
                this.$refs.file.value = null;
                this.imageUrl = '';
            },
        },
        computed: {
           
            fullImageSrc: function(){
                return this.$store.getters.getUser;
            },
            isProfileComplete(){
               return this.$store.getters.isProfileComplete;
            },
            isGeneratedUser(){
               return this.$store.getters.isGeneratedUser;
            },
            getGender(){
                return this.$store.getters.getGender;
            }
        },
        filters: {
            imageSrcFilter(src){
                if(src.images.imagePaths.length > 0){
                   return require(`../../assets/static/random-users/uploads/${src.images.imagePaths[0].path}`);
                } else {
                  return 'http://via.placeholder.com/230x230';
                }
            },
            maleImageSrcFilter(src){
                if(src.images.imagePaths.length > 0){
                    return require(`../../assets/static/random-users/men/${src.images.imagePaths[0].path}`);
                }else {
                    return 'http://via.placeholder.com/230x230';
                }
            },
            femaleImageSrcFilter(src){
                if(src.images.imagePaths.length > 0){
                 return require(`../../assets/static/random-users/women/${src.images.imagePaths[0].path}`);
                }else {
                    return 'http://via.placeholder.com/230x230';
                }
            },
         
         }
    }
</script>

<style scoped>
.flex-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>