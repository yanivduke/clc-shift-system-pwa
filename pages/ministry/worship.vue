<template>
  <section v-if="!loading">
    <common-table title="Worship">
      <div class="worship-table"></div>
      <v-pagination
        slot="footer"
        v-model="page"
        :length="pageCount"
      ></v-pagination>
    </common-table>
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
  computed: {},
}
</script>

<style lang="scss">
.worship {
  .worship-table {
    height: 100%;
    &-zone {
      display: block;
      height: 100%;
    }
  }
}
</style>
