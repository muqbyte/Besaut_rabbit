import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/stores/auth';

export default defineNuxtRouteMiddleware((to) => {
  const { user, loggedIn } = useJwtAuth()
  const {role } = storeToRefs(useAuthStore()); // make 
  if (user.value.role !='super admin') {
    return navigateTo('/')
  }
});
