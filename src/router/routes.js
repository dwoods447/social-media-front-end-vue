import Home from '../components/HomePage'
import SignUp from '../components/Auth/SignUp'
import SignIn from '../components/Auth/SignIn'
import UserList from '../components/Users/UserList'
import UserProfile from '../components/Profile/UserProfile'
import EditProfile from '../components/Profile/EditProfile'
import NewsFeed from '../components/NewsFeed/NewsFeed'
import FindPeopleList from '@/components/Users/FindPeopleList'


//import store from '../store/store'

const routes = [
    
    {
        path: '/', 
        name:'home',
        component: Home, 
        
    },
    {
        path: '/signup', 
        name: 'signup',
        component: SignUp, 
        
    },
    {
        path: '/signin', 
        name: 'signin',
        component: SignIn, 
        
    },
    {
        path: '/people', 
        name:'find-people',
        component: FindPeopleList,   
    },
    {
        path: '/users-list',
        name: 'user-list', 
        component: UserList, 
        
    },
    {
        path: '/edit-profile',
        name:'edit-profile', 
        component: EditProfile, 
        
    },
    {
        path: '/profile',
        name:'profile', 
        component: UserProfile, 
        
    },
    {
        path: '/news-feed', 
        name:'newsfeed',
        component:  NewsFeed, 
        // beforeEnter: (to, from, next) => {
        //     if(!store.getters.isLoggedIn && to.name !== 'signin') next({name: 'newsfeed'}) 
        //     else next();
        // }
    }
]


export default routes;