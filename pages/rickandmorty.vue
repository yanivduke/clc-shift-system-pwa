<template>
  <div v-if="!loading">
    <v-card>
      <v-card-title>
        Rick & Morty
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
        :items="characters.results"
        :search="search"
      ></v-data-table>
    </v-card>
    <v-card>
      <v-text-field
        v-model="characterID"
        label="search ID"
        name="search ID"
        prepend-icon="mdi-account"
        type="text"
      ></v-text-field>
      <v-card-actions>
        <v-spacer></v-spacer>
        <BasicText tag="h6" color="white">
          {{ `id: ${character.id} name: ${character.name}` }}
        </BasicText>
      </v-card-actions>
    </v-card>
    <v-container class="grey">
      <v-row no-gutters>
        <v-col :cols="4" class="mr-5">
          <v-card class="pa-2">
            <v-list-item-group color="primary">
              <v-list-item
                v-for="character in characters.results"
                :key="character.id"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    {{ character.name }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-2">
            222222
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { GET_CHARACTERS, GET_CHARACTER } from '@/constants/gql'
export default {
  apollo: {
    $loadingKey: 'loading', // fix Apollo data only available after page refresh
    characters: GET_CHARACTERS,
    character: GET_CHARACTER,
  },
  data() {
    return {
      loading: 0,
      search: '',
      headers: [
        { text: 'ID', value: 'id' },
        {
          text: 'Name',
          align: 'start',
          // sortable: false,
          value: 'name',
        },
      ],
      characterID: '',
    }
  },
  computed: {
    // tableData() {
    //   return this.$apolloData.data.characters?.results || []
    // },
    // characterObj() {
    //   return this.$apolloData.data.character
    // },
  },
}
</script>
