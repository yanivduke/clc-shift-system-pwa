<template>
  <section v-if="!loading" class="services">
    <common-table title="Service">
      <basic-layout type="body" class="services-table">
        <v-card class="services-table-zone">
          <v-card-title>
            GraphQL
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="testUsersData"
            :search="search"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            hide-default-footer
            @page-count="pageCount = $event"
          ></v-data-table>
        </v-card>
      </basic-layout>
      <v-pagination
        slot="footer"
        v-model="page"
        :length="pageCount"
      ></v-pagination>
    </common-table>
  </section>
</template>

<script>
import { QUERY_USERS } from '@/constants/gql/users'
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
      headers: [
        { text: 'ID', value: 'id' },
        {
          text: 'Name',
          align: 'start',
          // sortable: false,
          value: 'name',
        },
        {
          text: 'Email',
          align: 'start',
          // sortable: false,
          value: 'email',
        },
        {
          text: 'joinDate',
          align: 'start',
          value: 'joinDate',
        },
        {
          text: 'service',
          align: 'start',
          value: 'service',
        },
        {
          text: 'ministry',
          // align: 'start',
          value: 'ministry',
        },
      ],
      characterID: '',
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
.services {
  padding: 17px 21px;
  @include size(100%, 100vh);
  .services-table {
    height: calc(100% - 64px);
    &-zone {
      display: block;
      height: 100%;
    }
  }
}
</style>
