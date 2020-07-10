<template>
  <div>
    <h3 class="display-1 mb-5">
      Firebase Authentication
    </h3>
    <div class="links">
      <div>
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
// import Vue from 'vue'
// import { mapState, mapGetters } from 'vuex'
// import firebase from 'firebase'

export default {
  data() {
    return {
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
    }
  },
  methods: {
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
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
