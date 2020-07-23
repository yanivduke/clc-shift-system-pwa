<template>
  <section v-if="!loading">
    <basic-table-layout title="Members">
      <div class="members-table">
        <basic-layout type="header">
          <common-text-field
            append-icon="mdi-magnify"
            label="Search"
            color="#f4cf4f"
            :single-line="false"
            :dark="true"
          />
        </basic-layout>
        <!-- <v-data-table
          :headers="headers"
          :items="membersData"
          :search="search"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          dark
          @page-count="pageCount = $event"
        /> -->
        <common-table
          :columns="columns"
          :data="membersData"
          :search="search"
          @page-count="test"
        />
      </div>
      <v-pagination slot="footer" v-model="page" :length="pageCount" />
    </basic-table-layout>
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
      columns: MEMBER_TABLE_COLUMNS.OVERVIEW,
    }
  },
  computed: {
    membersData() {
      const test = this.users.map((data) => ({
        ...data,
        service: data.service.map((item) => item.title),
        ministry: Object.keys(
          data.service
            .map((item) => item.ministry.title)
            .reduce((accumulate, current) => {
              // console.log(accumulate)
              // console.log(current)
              accumulate[current] = current
              return accumulate
            }, {}),
        ),
      }))
      console.log(test)
      return test
    },
  },
  methods: {
    test(event) {
      console.log(event)
    },
  },
}
</script>

<style lang="scss">
.members {
  .members-table {
    height: 100%;
    width: 100%;
    &-zone {
      display: block;
      height: 100%;
    }
  }
}
</style>
