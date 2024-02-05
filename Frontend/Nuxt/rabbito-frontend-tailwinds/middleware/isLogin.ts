import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/stores/auth';

export default defineNuxtRouteMiddleware((to) => {
  const { authenticated, role } = storeToRefs(useAuthStore()); // make authenticated state reactive
  const token = useCookie('token'); // get token from cookies
  // console.log('role', role)
// if(role.value==""){
//   return navigateTo('/')
// }
  if (!token.value) {
    return navigateTo('/login')
  }
});
