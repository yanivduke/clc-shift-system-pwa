<template>
  <section v-if="!loading">
    <basic-table-layout>
      <div class="members-young-table">
        <basic-layout type="header">
          <div class="members-young-table__header-left"></div>
          <div class="members-young-table__header-right">
            <div class="members-young-table__search">
              <common-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                color="#f4cf4f"
                :single-line="false"
                :dark="true"
              />
            </div>
            <basic-button
              id="addShipment-button"
              size="lg"
              style="margin-left: 16px;"
              @click="addMember"
            >
              Add Member
            </basic-button>
          </div>
        </basic-layout>
        <common-table
          :headers="columns"
          :data="membersData"
          :search="search"
          :page="page"
          :items-per-page="itemsPerPage"
          @click:row="rowClick"
        >
          <template v-slot:status="{ item }">
            <div class="status-zone">
              <span v-if="item.status !== 1" class="status-tag">
                <span
                  class="status-light"
                  :style="{
                    background: background(item.status),
                  }"
                ></span>
                {{ statusTag(item.status) }}
              </span>
              <template v-if="item.note">
                <span
                  v-if="item.status === 2 || item.status === 3"
                  class="status-tag__indicator"
                  :style="{
                    backgroundImage:
                      'url(' +
                      require('@/assets/images/icons/noteIndicator.svg') +
                      ')',
                  }"
                  @mouseover="
                    (e) => {
                      indicatorOpenHandler(e, item.id)
                    }
                  "
                  @mouseleave="indicatorCloseHandler"
                >
                  <span
                    v-if="indicatorOpen && indicatorIndex === item.id"
                    class="status-tag__indicator-hover"
                    :style="{ left: `${clientX}px`, top: `${clientY}px` }"
                  >
                    {{ item.note }}
                  </span>
                </span>
              </template>
            </div>
            <!-- <div class="status-tag">
              <v-chip :color="getColor(item.status)" class="status-tag__inner">
                {{ item.status.toString() }}
              </v-chip>
            </div> -->
          </template>
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
              v-for="(name, index) in item.availableTime"
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
    <member-detail-dialog
      :visible="isDialogShow"
      :config="dialogData"
      @close="(value) => setDialogShow(value)"
      @after-leave="
        {
          setDialogComponent('')
        }
      "
    />
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { QUERY_USERS_YOUNG } from '@/constants/gql/users'
import { MEMBER_TABLE_COLUMNS } from '@/constants/members'
import MemberDetailDialog from '@/components/projects/members/MemberDetailDialog'
export default {
  apollo: {
    $loadingKey: 'loading', // fix Apollo data only available after page refresh
    users: QUERY_USERS_YOUNG,
  },
  components: {
    MemberDetailDialog,
  },
  data() {
    return {
      loading: 0,
      search: '',
      page: 1,
      columns: MEMBER_TABLE_COLUMNS.YOUNG,
      indicatorOpen: false,
      clientX: 0,
      clientY: 0,
      indicatorIndex: -1,
      dialogData: {
        id: 0,
        name: '',
        status: 0,
        note: '',
        services: [],
        ministries: [],
        availableTime: '',
      },
    }
  },
  computed: {
    ...mapGetters({
      isDialogShow: 'dialog/isDialogShow',
      dialogComponent: 'dialog/dialogComponent',
    }),
    membersData() {
      const data = this.users.map((data) => ({
        // ...data,
        id: data.id,
        name: data.name,
        status: data.status,
        note: data.note,
        services: data.services.map((item) => item.title),
        ministries: data.ministries.map((item) => item.title),
        availableTime: data.availableTime.split(','),
      }))
      return data
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
    ...mapActions({
      setDialogShow: 'dialog/setDialogShow',
      setDialogComponent: 'dialog/setDialogComponent',
      setDialogData: 'dialog/setDialogData',
      setDialogHeader: 'dialog/setDialogHeader',
    }),
    addMember() {
      console.log('add Member')
    },
    rowClick($event) {
      console.log($event)
      this.setDialogShow(true)
      this.setDialogComponent('MemberDetailDialog')
      this.dialogData = $event
    },
    indicatorOpenHandler(e, id) {
      this.indicatorIndex = id
      // 抓取 target的座標，定位提示組件的位置
      this.indicatorOpen = true
      const test = e.target.getClientRects()
      this.clientX = Number(test[0].x - 90)
      this.clientY = Number(test[0].y - 145)
    },
    indicatorCloseHandler() {
      this.indicatorOpen = false
      this.indicatorIndex = -1
    },
    statusTag(status) {
      switch (status) {
        case 1:
          return ''
        case 2:
          return '備註'
        case 3:
          return '暫停中'
        default:
          throw new Error(`unknown key name ${status}`)
      }
    },
    background(status) {
      switch (status) {
        case 1:
          return ''
        case 2:
          return 'var(--accent)'
        case 3:
          return 'var(--alert-red1)'
        default:
          throw new Error(`unknown key name ${status}`)
      }
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
  .members-young-table {
    height: 100%;
    width: 100%;
    &-zone {
      display: block;
      height: 100%;
    }
    &__header-left {
      width: 50%;
      border: 1px solid red;
    }
    &__header-right {
      width: 50%;
      display: flex;
      justify-content: flex-end;
    }
    &__search {
      width: 40%;
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
.status-zone {
  width: 100%;
  max-width: 326px;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: rem(14px);
  line-height: rem(14px);
}
.status-tag {
  display: inline-block;
  padding: 6px 16px;
  border-radius: 9999px;
  // width: 121px;
  background-color: var(--deep-dark);
}
.status-light {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 10px;
}
.status-tag__indicator {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  // margin: 3px 0;
  margin-left: 8px;
}
.status-tag__indicator-hover {
  display: inline-block;
  position: fixed;
  width: 200px;
  height: 125px;
  padding: 20px;
  background-color: var(--white);
  opacity: 0.8;
  color: var(--primary-dark);
  border-radius: 8px;
  font-size: 14px;
  line-height: 14px;
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: -20%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-style: solid;
    border-width: 20px 20px 0 20px;
    border-color: var(--white) transparent transparent transparent;
    opacity: 1;
  }
}
</style>
