import Api from './API'


export default {
    
    followUser(userId){
      return Api.post('/users/follow/user', userId)
    },
    loadUserProfile(user){
      console.log(`Userid re've in service ${JSON.stringify(user)}`);
      console.log(`Userid re've in service ${user.userId}`);
      return Api.get(`/users/find/user/${user.userId}`, user)
    },
    editUserInfo(userData){ 
     return Api.post(`/users/update/user/${userData._id}`, userData)
    },
    uploadUserPhoto(photo){
        const formData  = new FormData();
       formData.append('image', photo.image, photo.image.name) 
      return Api.post('/users/image/upload', formData);  
    },
    getAllUsersFollowed(){
      return Api.get('/users/get/users/followed'); 
    },
    getAllUsersNotFollowed(){
      return Api.get('/users/get/users/notfollowed'); 
    },
   
  
}