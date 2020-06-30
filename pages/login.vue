<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="formData.email"
                label="Login"
                name="login"
                prepend-icon="mdi-account"
                type="text"
              ></v-text-field>

              <v-text-field
                id="password"
                v-model="formData.password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="createUser()">
              Register
            </v-btn>
            <v-btn color="primary" @click="signInUser()">
              Sign In
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  layout: 'login',
  props: {
    source: {
      type: String,
      default: '123',
    },
  },
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
    }
  },
  computed: {
    ...mapState({
      authUser: (state) => state.authUser,
    }),
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },
  methods: {
    ...mapActions({
      setToken: 'auth/setToken',
    }),
    async createUser() {
      try {
        await this.$fireAuth.createUserWithEmailAndPassword(
          this.formData.email,
          this.formData.password,
        )
      } catch (error) {
        console.log(error)
      }
    },
    async signInUser() {
      try {
        const data = await this.$fireAuth.signInWithEmailAndPassword(
          this.formData.email,
          this.formData.password,
        )
        // console.log(data.user.email)
        // console.log(data.user.uid)
        // console.log(data.user.refreshToken)
        this.setToken(data.user.uid)

        this.$router.push('/')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
