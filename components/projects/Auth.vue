<template>
  <div>
    <h3 class="display-1 mb-5">
      Firebase Authentication
    </h3>
    <div class="links">
      <v-form v-if="!isLoggedIn" v-model="formValid">
        <h5>SignUp / LogIn</h5>
        <v-text-field
          v-model="formData.email"
          label="Email"
          color="primary"
          type="email"
          autocomplete="username"
          :loading="true"
        ></v-text-field>
        <v-text-field
          v-model="formData.password"
          label="Password"
          :rules="formRules.password"
          color="primary"
          type="password"
          autocomplete="current-password"
          :loading="true"
        ></v-text-field>
        <v-btn
          :disabled="!formValid"
          color="primary"
          outlined
          @click="createUser()"
        >
          Register
        </v-btn>
        <v-btn
          :disabled="!formValid"
          color="primary"
          outlined
          @click="signInUser()"
        >
          Sign In
        </v-btn>
      </v-form>
      <div v-else>
        <p>You are logged in with {{ authUser.email }}.</p>
        <v-btn color="primary" outlined @click="logout">Logout</v-btn>

        <v-container>
          <v-select
            v-model="dataForm.producer"
            :items="nameGroup"
            :append-icon="'mdi-plus'"
            :prepend-icon="'mdi-alien-outline'"
            label="Producer"
          />
          <v-select
            v-model="dataForm.programDirector"
            :items="nameGroup"
            :append-icon="'mdi-plus'"
            :prepend-icon="'mdi-arm-flex-outline'"
            label="ProgramDirector"
          />
          <v-select
            v-model="dataForm.cam1"
            :items="nameGroup"
            :append-icon="'mdi-plus'"
            :prepend-icon="'mdi-arm-flex-outline'"
            label="Cam 1"
          />
          <v-select
            v-model="dataForm.cam2"
            :items="nameGroup"
            :append-icon="'mdi-plus'"
            :prepend-icon="'mdi-arm-flex-outline'"
            label="Cam 2"
          />
          <v-select
            v-model="dataForm.cam3"
            :items="nameGroup"
            :append-icon="'mdi-plus'"
            :prepend-icon="'mdi-arm-flex-outline'"
            label="Cam 3"
          />
          <v-select
            v-model="dataForm.VJ"
            :items="nameGroup"
            :append-icon="'mdi-plus'"
            :prepend-icon="'mdi-arm-flex-outline'"
            label="VJ"
          />
          <v-select
            v-model="dataForm.photographer1"
            :items="nameGroup"
            :append-icon="'mdi-plus'"
            :prepend-icon="'mdi-arm-flex-outline'"
            label="photographer 1"
          />
          <v-select
            v-model="dataForm.photographer2"
            :items="nameGroup"
            :append-icon="'mdi-plus'"
            :prepend-icon="'mdi-arm-flex-outline'"
            label="photographer 2"
          />
          <v-btn color="primary" outlined @click="addStudent()">
            add a student
          </v-btn>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
// import firebase from 'firebase'

export default Vue.extend({
  data: () => ({
    formData: {
      email: '',
      password: '',
    },
    nameGroup: [
      'Spencer',
      'Hank',
      'Leo',
      'Wesley',
      'Ding',
      'Woody',
      'Lun',
      'Samuel',
      'Walter',
      'Royal',
    ],
    dataForm: {
      producer: '',
      programDirector: '',
      cam1: '',
      cam2: '',
      cam3: '',
      VJ: '',
      photographer1: '',
      photographer2: '',
    },
    formValid: false,
    formRules: {
      names: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
    },
  }),
  computed: {
    ...mapState({
      authUser: (state) => state.authUser,
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
    }),
  },
  methods: {
    // ...mapActions({
    //   onAuthStateChanged: 'onAuthStateChanged',
    // }),
    async createUser() {
      try {
        await this.$fireAuth.createUserWithEmailAndPassword(
          this.formData.email,
          this.formData.password,
        )
      } catch (e) {
        alert(e)
      }
    },
    async signInUser() {
      try {
        await this.$fireAuth.signInWithEmailAndPassword(
          this.formData.email,
          this.formData.password,
        )
      } catch (e) {
        alert(e)
      }
    },
    async logout() {
      try {
        await this.$fireAuth.signOut()
      } catch (e) {
        alert(e)
      }
    },
    async addStudent() {
      try {
        const test = await this.$fireStore
          .collection('Students')
          .doc('student_02')
          .set({
            ...this.dataForm,
          })
        console.log(test)

        // const newPath = 'result'
        // this.$router.push({ path: newPath })
      } catch (e) {
        alert(e)
      }
    },
  },
})
</script>
