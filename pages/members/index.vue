<template>
  <section v-if="!loading">
    <common-table title="Members">
      <div class="members-table">
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          />
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="testUsersData"
          :search="search"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          dark
          @page-count="pageCount = $event"
        />
      </div>
      <v-pagination slot="footer" v-model="page" :length="pageCount" />
    </common-table>
  </section>
</template>

<script>
import { QUERY_USERS } from '@/constants/gql/users'
import { MEMBER_TABLE_COLUMNS } from '@/constants/members'
export default {
  apollo: {
    $loadingKey: 'loading', // fix Apollo data only available after page refresh
    users: QUERY_USERS,
  },
  data() {
    return {
      loading: 0,
      search: '',
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: MEMBER_TABLE_COLUMNS.OVERVIEW,
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
.members {
  .members-table {
    height: 100%;
    &-zone {
      display: block;
      height: 100%;
    }
  }
}
</style>
