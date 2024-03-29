
export default defineNuxtRouteMiddleware((to) => {
  const { user, loggedIn } = useJwtAuth()

  if (loggedIn.value==false) {
    return navigateTo('/login')
  }
});
