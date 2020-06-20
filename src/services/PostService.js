import Api from './API'

export default {
    getAllPosts(){
        return Api.get('/posts/all/posts');
    },
    createPost(postInfo){
        return Api.post('/posts/create/post', postInfo);
    },
    deletePost(postID){
        return Api.post(`/posts/delete/${postID}/post`);
    },
    addCommentToPost(postInfo){
        return Api.post(`/posts/add/comment/${postInfo.postId}/post`, postInfo);
    },
    addLikeToPost(postInfo){
        return Api.post(`/posts/add/like/${postInfo.postId}/post`, postInfo);
    }
}