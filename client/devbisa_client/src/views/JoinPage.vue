<template>
<div>
  <NavbarItem />
  <div class="container">
    <h3 class="text-center"><span>By Sign Up and Sign in you can create your project, invite someone to colaborate and enroll to a Project</span></h3>
    <div class="text-center">
      <button type="button" @click.prevent="signInClick" class="btn btn-info">Sign In</button>
      <button type="button" @click.prevent="signUpClick" class="btn btn-primary">Sign Up</button>
    </div>
    <br><br>
    <section v-if="tombol === 'SignUp'" class="vh-100" style="background-color: #eee">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style="border-radius: 25px">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <!-- form  -->
                    <form class="mx-1 mx-md-4" @submit.prevent="handleRegister">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            class="form-control"
                            placeholder="Full Name"
                            v-model="newUser.fullName"
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            class="form-control"
                            placeholder="your email address"
                            v-model="newUser.email"
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            class="form-control"
                            placeholder="password"
                            v-model="newUser.password"
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example4cd"
                            class="form-control"
                            placeholder="github account"
                            v-model="newUser.githubAccount"
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example4cd"
                            class="form-control"
                            placeholder="discordAccount"
                            v-model="newUser.discordAccount"
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example4cd"
                            class="form-control"
                            placeholder="WA Phone number"
                            v-model="newUser.phoneNumber"
                          />
                        </div>
                      </div>

                      <div
                        class="d-flex justify-content-center mx-4 mb-3 mb-lg-4 text-center"
                      ><br />
                        <button type="submit" class="btn btn-primary btn-lg">
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    class="
                      col-md-10 col-lg-6 col-xl-7
                      d-flex
                      align-items-center
                      order-1 order-lg-2
                    "
                  >
                    <img
                      src="assets/images/mac.jpg"
                      class="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="tombol === 'SignIn'" class="vh-100" style="background-color: #eee">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style="border-radius: 25px">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign In
                    </p>
                    <!-- form  -->
                    <form class="mx-1 mx-md-4" @submit.prevent="handleLogin">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            class="form-control"
                            placeholder="your email address"
                            v-model="user.email"
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            class="form-control"
                            placeholder="password"
                            v-model="user.password"
                          />
                        </div>
                      </div>

                      <div
                        class="d-flex justify-content-center mx-4 mb-3 mb-lg-4 text-center"
                      ><br />
                        <button type="submit" class="btn btn-primary btn-lg">
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    class="
                      col-md-10 col-lg-6 col-xl-7
                      d-flex
                      align-items-center
                      order-1 order-lg-2
                    "
                  >
                    <img
                      src="assets/images/mac.jpg"
                      class="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import NavbarItem from '../components/NavbarItem.vue'
import Swal from 'sweetalert2'
export default {
  name: 'RegisterPage',
  components: {
    NavbarItem
  },
  data () {
    return {
      tombol: '',
      newUser: {
        fullname: '',
        email: '',
        password: '',
        githubAccount: '',
        discordAccount: '',
        phoneNumber: ''
      },
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signInClick () {
      this.tombol = 'SignIn'
    },
    signUpClick () {
      this.tombol = 'SignUp'
    },
    handleRegister () {
      const { fullName, email, password, githubAccount, discordAccount, phoneNumber } = this.newUser
      axios({
        url: 'http://localhost:3000/register',
        method: 'POST',
        data: {
          fullName, email, password, githubAccount, discordAccount, phoneNumber
        }
      })
        .then((response) => {
          this.newUser.fullname = ''
          this.newUser.email = ''
          this.newUser.password = ''
          this.newUser.githubAccount = ''
          this.newUser.discordAccount = ''
          this.newUser.phoneNumber = ''
          Swal.fire({
            icon: 'success',
            title: 'OK!',
            text: 'Please Login'
          })
          this.tombol = 'SignIn'
        })
        .catch((error) => {
          console.log(error)
          this.newUser.fullname = ''
          this.newUser.email = ''
          this.newUser.password = ''
          this.newUser.githubAccount = ''
          this.newUser.discordAccount = ''
          this.newUser.phoneNumber = ''
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong, please check your data'
          })
          this.tombol = 'SignUp'
        })
    },
    handleLogin () {
      const { email, password } = this.user
      axios({
        url: 'http://localhost:3000/login',
        method: 'POST',
        data: {
          email, password
        }
      })
        .then((response) => {
          const data = response.data
          console.log(response.status, 'ini code respon')
          localStorage.setItem('accesstoken', data.accesstoken)
          localStorage.setItem('email', data.email)
          this.$store.dispatch('getLoginValue')
          this.$router.push({ name: 'home' })
        })
        .catch((error) => {
          console.log(error)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Check Your email or password'
          })
        })
    }
  }
}
</script>

<style></style>
