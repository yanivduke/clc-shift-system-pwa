<template>
  <section v-if="!loading">
    <basic-table-layout>
      <div class="members-society-table">
        <basic-layout type="header">
          <common-text-field
            v-model="search"
            label="Search"
            color="#f4cf4f"
            :single-line="false"
            :is-dark="true"
            :is-solo="true"
            icon="mdi-magnify"
          />
        </basic-layout>
        <common-table
          :headers="columns"
          :data="membersData"
          :search="search"
          :page="page"
          :items-per-page="itemsPerPage"
          @page-count="test"
        >
          <template v-slot:ministries="{ item }">
            <div
              v-for="(name, index) in item.ministries"
              :key="index"
              class="ministries-tag"
            >
              <v-chip
                :key="index"
                :color="getColor(name)"
                class="ministries-tag__inner"
              >
                {{ name.toString() }}
              </v-chip>
            </div>
          </template>
          <template v-slot:services="{ item }">
            <div
              v-for="(name, index) in item.services"
              :key="index"
              class="services-tag"
            >
              <v-chip
                :key="index"
                :color="getColor(name)"
                class="services-tag__inner"
              >
                {{ name.toString() }}
              </v-chip>
            </div>
          </template>
          <template v-slot:availableTime="{ item }">
            <div
              v-for="(name, index) in item.availableTime.split(',')"
              :key="index"
              class="availableTime-tag"
            >
              <v-chip
                v-if="name"
                :key="index"
                :color="getColor(name)"
                class="availableTime-tag__inner"
              >
                {{ name.toString() }}
              </v-chip>
            </div>
          </template>
        </common-table>
      </div>
      <v-pagination
        v-show="search === ''"
        slot="footer"
        v-model="page"
        :length="pageCount"
        color="#008088"
        dark
      />
    </basic-table-layout>
  </section>
</template>

<script>
import { MEMBER_TABLE_COLUMNS } from '@/constants/members'
export default {
  apollo: {
    $loadingKey: 'loading',
  },
  data() {
    return {
      loading: 0,
      search: '',
      page: 1,
      columns: MEMBER_TABLE_COLUMNS.YOUNG,
    }
  },
  computed: {
    membersData() {
      // const data = this.users.map((data) => ({
      //   ...data,
      //   services: data.services.map((item) => item.title),
      //   ministries: data.ministries.map((item) => item.title),
      // }))
      return []
    },
    pageCount() {
      return this.membersData.length / 10
    },
    itemsPerPage() {
      if (this.search === '') return 10
      else return 100
    },
  },
  methods: {
    test(event) {
      console.log(event)
    },
    getColor(name) {
      switch (name) {
        case 'Media':
          return '#6DB15A'
        case 'Worship':
          return '#8357D7'
        default:
          return '#6B6F76'
      }
    },
  },
}
</script>

<style lang="scss">
.members {
  .members-society-table {
    height: 100%;
    width: 100%;
    &-zone {
      display: block;
      height: 100%;
    }
  }
  .availableTime-tag,
  .ministries-tag,
  .services-tag {
    display: inline-block;
    height: 22px;
    // margin: 8px 0;
    margin-right: 10px;
    &__inner {
      width: 100%;
      height: 100%;
      text-align: center;
    }
  }
}
</style>
