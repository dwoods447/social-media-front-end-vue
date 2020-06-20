import Api from './API'


export default {
    
    followUser(userId){
      return Api.post('/follow', userId)
    },
    editUserInfo(userData){ 
     return Api.post('/update', userData)
    },
    uploadUserPhoto(photo){
        const formData  = new FormData();
       formData.append('image', photo.image, photo.image.name) 
      return Api.post('/users/image/upload', formData);  
    },
  
}