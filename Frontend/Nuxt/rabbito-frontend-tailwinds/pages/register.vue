<template>
    <div style="margin-">
      <div class="container2 form bg-gray-900" >
        <div class="title">
          <h2 class="subtitle-text">Register</h2>
        </div>

        <section class="section">
    <!-- <div class="container2"> -->
      <!-- <div class="columns">
        <div class="column is-4 is-offset-4"> -->
      <!-- <h2 class="title has-text-centered">Register</h2> -->

      <Notification :message="error"  id="notification" />

      <v-form method="post" @submit.prevent="register">
        <div class="field">
          <!-- <label class="label">Email</label> -->
          <div class="control">
            <!-- <v-text-field
              type="text"
              class="input"
              label="Full Name"
              v-model="username"
            >
            </v-text-field> -->

            <label for="uname" class="subtitle-text"><b>Username</b></label>
                <input
                v-model="user.username"
                type="text"
                class="input subtitle-text2"
                placeholder="Enter Username"
                name="uname"
                required
                />

          </div>
        </div>
        <div class="field">
          <!-- <label class="label">Email</label> -->

          <div class="control">
            <!-- <v-text-field
              type="email"
              class="input"
              label="Email"
              v-model="email"
            >
            </v-text-field> -->

            <label for="email" class="subtitle-text"><b>Email</b></label>
                <input
                v-model="user.email"
                type="email"
                class="input subtitle-text2"
                placeholder="Email"
                name="email"
                required
                />
          </div>
        </div>

        <div class="field">
          <!-- <label class="label">Password</label> -->

          <div class="control">
            <!-- <v-text-field
              type="password"
              class="input"
              label="Password"
              v-model="password"
            ></v-text-field> -->

            <label for="psw" class="subtitle-text "><b>Password</b></label>
        <input
          v-model="user.password"
          type="password"
          class="input subtitle-text2"
          placeholder="Enter Password"
          name="psw"
          required
        />
          </div>
        </div>
        <div class="field">
          <!-- <label class="label">Password</label> -->
          <div class="control">
            <!-- <v-text-field
              type="password"
              class="input"
              label="Confirm Password"
              v-model="password2"
            ></v-text-field> -->
            <label for="psw2" class="subtitle-text "><b>Confirm Password</b></label>
        <input
          v-model="user.confirmPassword"
          type="password"
          class="input subtitle-text2"
          placeholder="Confirm Password"
          name="psw2"
          required
        />
          </div>
        </div>
        <div style="width: 100%; display:flex; justify-content:center; padding:10px 0">
            <nav>
          <nuxt-link @click="loginPage">
            <p class="subtitle-text opac">Already have an account? <span style="color:#f59e0b"> Login.</span> </p>
          </nuxt-link>
        </nav>
        </div>
        <div style="width: 100%; display:flex; justify-content:center">
          <button @click.prevent="register" class="button">Register</button>
  
        </div>
        <!-- <div class="field">
              <div class="control">
                <v-text-field
                  type="text"
                  class="input"
                  label="Role"
                  v-model="role"
                >
                </v-text-field>
              </div>
            </div> -->

        <!-- <div class="control">
          <v-btn block type="submit" outlined>Register</v-btn>
        </div>
        <p class="title has-text-centered register">
          Already got an account?
          <router-link :to="{ name: 'login' }">Login</router-link>
        </p> -->
      </v-form>

      <!-- <div class="has-text-centered" style="margin-top: 20px">
            <p>
              Don't have an account? <nuxt-link to="/register">Register</nuxt-link>
            </p>
          </div> -->
      <!-- </div>
      </div> -->
    <!-- </div> -->
  </section>
        <!-- <label for="uname" class="subtitle-text"><b>Username</b></label>
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
        /> -->
       
      </div>
    </div>
  </template>
  <script lang="ts" setup>
  import { storeToRefs } from 'pinia';
  // import { useAuthStore } from '~/store/auth';
  
  import { useAuthStore } from '../stores/auth';

  import { ref, watch } from 'vue';
  
  const { registerUser } = useAuthStore(); // use auth store
  
  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
  
  const user = ref({
    username:"",
    email: '',
    password: '',
    confirmPassword:""
  });
  const router = useRouter();
  
  const error =  ref('')
  const register = async () => {
     error.value = await registerUser(user.value);
     console.log(error)
    // redirect to homepage if user is authenticated
    // if (authenticated) {
    //   router.push('/');
    // }
  };

  const loginPage = () => {
  
  router.push('/login');
    };

// single ref
// watch(error, (newX) => {
//   console.log(`x is ${newX}`)
// })

  </script>

  <style>
  .title {
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 26px;
    
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
    .button {
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
  
    .button:hover {
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
  
    /* Change styles for span and cancel button on extra small screens */
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
  