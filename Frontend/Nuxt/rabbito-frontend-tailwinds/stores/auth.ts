import { defineStore } from 'pinia';

let endpointAuth = `http://127.0.0.1:7500/api/auth`
let endpointUser = `http://127.0.0.1:7500/api/user/register`

interface UserPayloadInterface {
  email: string;
  password: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false,
    role:''
  }),
  actions: {
    async authenticateUser({ email, password }: UserPayloadInterface) {
      // useFetch from nuxt 3
      // console.log('try to login')
      // const result: any = await useFetch(`${endpoint}/login`, {
      const { data, pending, error }: any = await useFetch(`${endpointAuth}/login`, {
      // const { data, pending }: any = await useFetch('https://dummyjson.com/auth/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: {
          email,
          password,
        },
      });
      // console.log('error',error.value.statusMessage)
      // if(error.value.statusMessage=='Unauthorized'){
        // console.log('not')
        // return
      // }else{

      if(data.value==null) alert('Invalid username/password')
     
      this.loading = pending;
      let a = data.value.token
      let b = data.value.role  
      // console.log('b', data.value)
        
       if (a) {

        
        const { data, pending }: any = await useFetch(`${endpointAuth}/me`, {
        // const { data, pending }: any = await useFetch('https://dummyjson.com/auth/login', {
          method: 'get',
          // headers: { 'Content-Type': 'application/json' },
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${a}`,
          },
          // body: {
          //   email,
          //   password,
          // },
        });
        if(data){

          const token = useCookie('token', {
            maxAge: new Date().setDate(new Date().getDate() + 1)
          }); // useCookie new hook in nuxt 3
          token.value = a; // set token to cookie
          // token.value = data?.value?.token; // set token to cookie
          this.role = data.value.scope[0]
          this.authenticated = true; // set authenticated  state value to true
          // console.log(this.role)
        }
      }
    // }
    },
    logUserOut() {
      const token = useCookie('token'); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
    },

    async registerUser({username,email,password,confirmPassword}){
      const { data, pending, error }: any = await useFetch(`${endpointUser}`, {
        // const { data, pending }: any = await useFetch('https://dummyjson.com/auth/login', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: {
            username,
            email,
            password,
            confirmPassword
          },
        });
        // console.log('data here', data.value)
        return data.value
    }
  },
});
