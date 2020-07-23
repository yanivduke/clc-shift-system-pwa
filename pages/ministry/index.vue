<template>
  <section v-if="!loading">
    <basic-table-layout title="Ministry">
      <div class="ministry-table"></div>
      <v-pagination
        slot="footer"
        v-model="page"
        :length="pageCount"
      ></v-pagination>
    </basic-table-layout>
  </section>
</template>

<script>
// import { QUERY_USERS } from '@/constants/gql/users'
export default {
  // apollo: {
  //   $loadingKey: 'loading', // fix Apollo data only available after page refresh
  //   users: QUERY_USERS,
  // },
  data() {
    return {
      loading: 0,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
    }
  },
  computed: {
    testUsersData() {
      const test = this.users.map((data) => ({
        ...data,
        service: data.service.map((item) => item.title),
        ministry: data.service.map((item) => item.ministry.title),
      }))
      console.log(test)
      return test
    },
  },
}
</script>

<style lang="scss">
.ministry {
  .ministry-table {
    height: 100%;
    &-zone {
      display: block;
      height: 100%;
    }
  }
}
</style>
