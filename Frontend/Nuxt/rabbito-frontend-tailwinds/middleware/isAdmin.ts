
export default defineNuxtRouteMiddleware((to) => {

  const { user, loggedIn } = useJwtAuth()
  console.log(user)
  if (user && user.value.role && user.value.role =='user') {
    return navigateTo('/user')
  }

});