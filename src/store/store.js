
import Vue from 'vue'
import Vuex from 'vuex'
import Auth from '../services/AuthenticationService'
//import Cookie from 'js-cookie'
//mport UserService from '../services/UserService'
Vue.use(Vuex)



const store = new Vuex.Store({
 state: {
  token: null,
  user: null,
  isLoggedIn: false,
  appName: "InTheMix"
 },

 mutations: {
  setAuthTokenMutation(state, token){
    state.token = token;
  },
  setLogOutMutation(state){
    state.token =  null;
    state.user = null;
    state.token = null;
    state.isLoggedIn =  false;
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
    localStorage.removeItem('user');
  },
  
  setErrorMessageMutation(state, message){
    state.error  = '';
    state.error = message;
  },

  clearToken (state){
    state.token = null;
    state.user = null;
    state.isLoggedIn =  false;
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
    localStorage.removeItem('user');
  },
  
  setLoggedInUserIdMutation(state, user){
    let storedUser = {};
    if(typeof user === 'string'){
      console.log('user is a string converting to JSON')
      let storedUser;
      user = JSON.parse(user);
      storedUser = {...user},
      state.user = storedUser;
    }
    storedUser = {...user};
    state.user = storedUser;
    state.isLoggedIn =  true;
  },


  

 },

 actions: {
  setLogOutTimerAction(context, exprationTime){
     console.log(`Expiration time : ${exprationTime}`)
    setTimeout(()=>{
      context.commit('setLogOutMutation');
    }, exprationTime)
   },
   tryAutoLoginAction(context){
      console.log(`Trying auto login.......`);
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');
      
      if(!token){
        return;
      }

      const expirationDate = localStorage.getItem('expirationDate');
      const now = new Date();
      if(now <= expirationDate){
        return;
      }
      console.log(`User is authneticated.......`);
      console.log(`Resetting vuex state.......`);
      context.commit('setLoggedInUserIdMutation', user);
      context.commit('setAuthTokenMutation', token);
   },
  
   setLogOutAction(context){
      context.commit('clearToken');
      localStorage.removeItem('token');
      localStorage.removeItem('tokenExpiration');
      localStorage.removeItem('user');
  },

  async login(context, credentails){
    let token;
    let user;
    let tokenExpr;
    console.log('Logging in...')
    try{
    const response  = await Auth.login(credentails);
      if(response.data.token){
        token  = response.data.token;
        tokenExpr = JSON.stringify(response.data.tokenExpiresIn);
        user = JSON.stringify(response.data.user);
        const now  = new Date();
        const expirationDate =  new Date(now.getTime() + (Number.parseInt(tokenExpr) * 1000));
        tokenExpr = expirationDate;
        localStorage.setItem('token', token);
        localStorage.setItem('tokenExpiration', tokenExpr);
        localStorage.setItem('user', user);
        // Cookie.set('jwt', token);
        // Cookie.set('expiresDate',  tokenExpr);
        // Cookie.set('user', user);
        context.commit('setAuthTokenMutation', token);
        context.commit('setLoggedInUserIdMutation', response.data.user);
        context.dispatch('setLogOutTimerAction', tokenExpr);
      }
            return response;
        }catch(err){
          console.log(err);
          let errorMessage = 'Invalid username/password';
          context.commit('setErrorMessageMutation', errorMessage);
      }
    },
 },

 getters: {
    isLoggedIn(state){
      return state.isLoggedIn;
    },
    getUser(state){
      if(state.user !== null){
        return state.user;
      } else {
        return false;
      }
    },

    getAppName(state){
      return  state.appName;
    },
 }


});

export default store