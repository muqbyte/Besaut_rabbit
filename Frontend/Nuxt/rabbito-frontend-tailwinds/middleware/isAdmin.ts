import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/stores/auth';

export default defineNuxtRouteMiddleware((to) => {
  const {role } = storeToRefs(useAuthStore()); // make authenticated state reactive
  if (role.value =='user') {
    return navigateTo('/user')
  }
});
