
export default defineNuxtRouteMiddleware((to) => {
  const { user, loggedIn } = useJwtAuth()

  if (user.value.role!=='user') {
    return navigateTo('/')
  }
});
