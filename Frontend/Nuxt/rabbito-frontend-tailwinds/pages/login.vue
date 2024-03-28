<template>
  <div style="margin-">
    <div class="container2 form bg-gray-900" >
      <div class="title">
        <h2 class="subtitle-text">Login</h2>
      </div>
      <label for="uname" class="subtitle-text"><b>Username</b></label>
      <input
        v-model="user.email"
        type="text"
        class="input subtitle-text2"
        placeholder="Enter Username"
        name="uname"
        required
      />

      <label for="psw" class="subtitle-text "><b>Password</b></label>
      <input
        v-model="user.password"
        type="password"
        class="input subtitle-text2"
        placeholder="Enter Password"
        name="psw"
        required
      />
      <div class="link-container">
        <nav>
          <nuxt-link @click="register">
            <p class="subtitle-text opac">Do not have an account? <span style="color:#f59e0b"> Register here.</span> </p>
          </nuxt-link>
        </nav>
       

      </div>
      <div style="width: 100%; display:flex; justify-content:center">
        <v-btn @click.prevent="login" class="v-btn">Login</v-btn>

      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { $jwtAuth } = useNuxtApp()
console.log('jwtAuth', $jwtAuth)
import { storeToRefs } from 'pinia';
// import { useAuthStore } from '~/store/auth';

import { useAuthStore } from '../stores/auth';

const { authenticateUser } = useAuthStore(); // use auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive

const user = ref({
  email: 'seaic.iot@gmail.com',
  password: '000000',
});
const router = useRouter();

const login = async () => {
  console.log('email:user.email', user.value.email)
  try {
      const generatedToken = await $jwtAuth.login(
      {
        email:user.value.email,
        password: user.value.password
      }
      )

    } catch (error) {
      console.error(error);
    }
};

const register = () => {
  
  router.push('/register');
};

</script>
<style>
.title {
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 26px;
  
}
.link-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
}
.subtitle-text{
  color: deepskyblue 
}
.subtitle-text2{
  color: #2ebce4 
}

.opac{
  opacity: .7;
}

.opac:hover{
  cursor: pointer;
}
.container2 {
  padding: 16px;
  margin-top:20px;
  margin: auto;
  width: 350px;
  opacity: 0.85;
  border: 1px solid #f59e0b !important;

  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.form {
  border: 3px solid #f1f1f1;
  border-radius: 10px;
  .input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    /* opacity: 0.8; */
  }
  .v-btn {
    background-color: rgb(34, 197, 94);
    color: white;
    padding: 8px 20px;
    /* margin: 8px 0; */
    border: none;
    cursor: pointer;
    border-radius: 15px;
    border: 1px solid #f59e0b !important;
    width: 150px;
    
  }

  .v-btn:hover {
    opacity: 0.8;
  }
  .cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
  }

  span.psw {
    float: right;
    padding-top: 16px;
  }

  /* Change styles for span and cancel v-btn on extra small screens */
  @media screen and (max-width: 300px) {
    span.psw {
      display: block;
      float: none;
    }
    .cancelbtn {
      width: 100%;
    }
  }
}
</style>
