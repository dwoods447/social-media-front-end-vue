import Home from '../components/HomePage'
import SignUp from '../components/Auth/SignUp'
import SignIn from '../components/Auth/SignIn'
import UserList from '../components/Users/UserList'
import UserProfile from '../components/Users/UserProfile'


const routes = [
    {path: '/', component: Home, name:'home'},
    {path: '/signup', component: SignUp, name: 'signup'},
    {path: '/signin', component: SignIn, name: 'signin'},
    {path: '/users-list', component: UserList, name: 'user-list'},
    {path: '/users-profile', component: UserProfile, name: 'users-profile'}
]


export default routes;