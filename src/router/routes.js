import Home from '../components/HomePage'
import SignUp from '../components/Auth/SignUp'
import SignIn from '../components/Auth/SignIn'
import UserList from '../components/Users/UserList'
import UserProfile from '../components/Profile/UserProfile'
import EditProfile from '../components/Profile/EditProfile'
import NewsFeed from '../components/NewsFeed/NewsFeed'
import store from '../store/store'

const routes = [
    {
        path: '/', 
        component: Home, 
        name:'home'
      },
    {
        path: '/signup', 
        component: SignUp, 
        name: 'signup'
    },
    {
        path: '/signin', 
        component: SignIn, 
        name: 'signin'
    },
    {
        path: '/users-list', 
        component: UserList, 
        name: 'user-list'
    },
    {
        path: '/users-profile', 
        component: UserProfile, 
        name: 'users-profile'
    },
    {
        path: '/edit-profile', 
        component: EditProfile, 
        name:'edit-profile'
    },
    {
        path: '/news-feed', 
        component:  NewsFeed, 
        name:'newsfeed',
        beforeEnter: (to, from, next) => {
            if(!store.getters.isLoggedIn){
                next({name: 'signin'});
            }else {
                next({name: 'newsfeed'});
            }
        }
    }
]


export default routes;