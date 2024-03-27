<template>
  <section>
    <v-card class="bg-gray-900 p-2 rounded-lg columnBorder" style="opacity: 0.8;">
        <v-card-title class="subtitle-text mb-1">List of registered users</v-card-title>
        <v-card class="elevation-12 card-border card-color">
      <v-data-table
        :single-select="singleSelect"
        :headers="headers"
        :items="dataTable"
        :items-per-page="5"
        
        item-key="id"
        show-select
        v-model="selected"
        :custom-filter="filter"
        @click:row="
          handleClick
        "
      color="red"

      style="padding:20px 30px"
      >
        <template v-slot:footer.prepend >
          <v-spacer></v-spacer>
          <v-btn v-if="selected.length>0" @click="box = true" class="error logout-btn mt-2 ml-5" style="width:70px; position: absolute; left: 20px"
            >Delete</v-btn
          >
        </template>
      </v-data-table>
    </v-card>
    <v-dialog v-model="box" persistent max-width="290">
      <v-card>
        <v-card-title> Action </v-card-title>
        <hr class="hr" />
        <v-card-subtitle
          >Are you sure you want to delete the user?</v-card-subtitle
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <div class="btn-div">
            <v-btn @click="deleteUser" class="error logout-btn">Delete</v-btn>
            <v-btn @click="cancel" class="success logout-btn">Cancel</v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="editBox" persistent max-width="290">
      <v-card v-if="editBox" id="logout">
        <v-card-title> Action </v-card-title>
        <hr class="hr" />

        <v-form
          @submit.prevent=""
          style="padding-left: 2vw; padding-right: 2vw"
        >
          <div class="field">
            <!-- <label class="label">Email</label> -->
            <div class="control">
              <v-text-field
                type="text"
                class="input"
                label="Role"
                v-model="roleEdit"
              >
              </v-text-field>
            </div>
          </div>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <div class="btn-div">
            <v-btn @click="updateRole(editId,roleEdit)" class="error logout-btn"
              >Edit</v-btn
            >
            <v-btn @click="cancel" class="success logout-btn">Cancel</v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-card>
  </section>
</template>

<script lang="ts" setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
// import { storeToRefs } from 'pinia';
// import { useAuthStore } from '~/store/auth';
// import { useAdmin } from '/stores/admin';
// console.log(useAdmin)

// const { getUsers } = useAdmin(); // use auth store

// // const { authenticated } = storeToRefs(useAdmin()); // make authenticated state reactive

// getUsers()
// import { mapState } from "vuex";
import { useAdmin } from '~/stores/admin';
import { ref } from 'vue';

let dataTable = ref([]);
// console.log(useAdmin)
// const { getUsers, updateRole } = useAdmin(); // use auth store
let endpointUser = `https://tx.eagleattech.com/api/data/admin/user` 
 const getUsers = async()=> {
  
      const { data, pending, error }: any = await useFetch(`${endpointUser}`, {
        // const { data, pending }: any = await useFetch('https://dummyjson.com/auth/login', {
          method: 'get',
          headers: { 'Content-Type': 'application/json' }
        });
        console.log('data here', data.value)
        return data.value
    }

    const  updateRole =  async (id,role ) =>{
      // loading.value = true;
      // console.log(id,role)
      const { data, pending, error }: any = await useFetch(`${endpointUser}`, {
          method: 'put',
          headers: { 'Content-Type': 'application/json' },
          body: {
            id,
            role
          },
        })
        editBox.value = false
        dataTable.value = await getUsers()
    }

    const  deleteUser =  async ( ) =>{
      // loading.value = true;
      console.log('delete', selected.value)
      const { data, pending, error }: any = await useFetch(`${endpointUser}`, {
          method: 'delete',
          headers: { 'Content-Type': 'application/json' },
          body: {
            id:selected.value
          },
        })
        box.value = false
        setTimeout( async () => {
          selected.value=[]
          dataTable.value = await getUsers()   
          // location.reload()
        }, 1000);
      }


let dataKeys = ref([]);
let box = ref(false);
let editBox = ref(false);
let search = ref("");
let singleSelect = ref(false);
let selected = ref([]);
let selected2 = ref([]);

let user_id = ref("");
let buildingId = ref("");
let roleEdit = ref("");

let editId = ref("")
let editRole = ref("")

let headers = ref([
{
  title: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        { title: "Username", value: "username" },
        { title: "Email", value: "email" },
        // { text: "Building_ID", value: "building_id_users" },
        { title: "Role", value: "role" },
]);
const loading = ref(false);






function handleClick (click,row){
      editBox.value = true;
      console.log('sini',row)
      editId.value = row.item.id 
      roleEdit.value= row.item.role
    }

const filter = (value, search, item) =>{
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value
          .toString()
          .toLocaleLowerCase()
          .indexOf(search.toLocaleLowerCase()) !== -1
      );
    }

   const cancel =()=> {
      box.value = false;
     editBox.value = false;
    }

  onMounted( async() => {
    dataTable.value = await getUsers()

    //  dataKeys.value = computed(() => {
    //     if (dataTable.value && dataTable.value.length > 0) {

    //       return Object.keys(dataTable.value[0]);
    //     } else {
    //       return [];
    //     }
    //   });

  });
  watch(selected, (val, oldVal) => { 

    setTimeout(() => {
      console.log("selected",selected.value.length )
      console.log(val, oldVal) 
      selected2.value = val
      
    }, 1000);
  })


</script>

<style>

.columnBorder {
    border: 1px solid #f59e0b;
    padding: 10px;
    border-radius: 10px;
}

.bg-dark {
    background-image: linear-gradient(0deg, rgba(20, 35, 43, 0.9) 0, rgb(243, 248, 250) 100%);
}

.bg-gray-900 {
    --tw-bg-opacity: 1;
    background-color: rgb(17 24 39 / 1);
    background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}
.v-data-table {

  --tw-bg-opacity: 1;
    background-color: rgb(17 24 39 / 1) !important;
    background-color: rgb(17 24 39 / var(--tw-bg-opacity)) !important;
}

/* tr {
  cursor: pointer;
} */

/* Table */
/* .v-data-table.table-font.theme--dark {
  background-color: transparent !important;
  border-radius: 10px;
  overflow: hidden;
} */
/* tr {

  background-color: rgba(0, 0, 0, 0.5) !important;
  padding: 0px !important;
  font-size: 0.9em;
  height: 5vh !important;
} */

/* tbody tr:nth-of-type(even) {
  background-color: rgba(0, 0, 0, 0.4) !important;

  padding: 0px !important;
  color: #eee;
  height: 5vh !important;
} */
/* .v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  font-size: 0.9em !important;
  height: 5.3vh !important;
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
  font-size: 0.9em !important;
  height: 5.3vh !important;
} */
/* tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.3) !important;
  padding: 0px !important;
  height: 5vh !important;
} */
/* .v-data-table__wrapper {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #000000;
} */

/* .v-table tbody tr td:nth-child(even) {
      background-color: red !important;
} */

/* tr:nth-child(odd){
  background-color: red !important;
} */

/* tr.v-data-table__tr.v-data-table__tr--clickable {
  background-color: red !important;
} */

/* tbody tr:nth-of-type(odd) {
 
    background-color: #E0F2F1;
} */

/* .v-table tbody tr td:nth-child(odd) {
      background-color: blue !important;
} */

.style-refunded { background-color: #FCE4EC !important; } 

.style-sold { background-color: #E8F5E9 !important; }

tr:nth-child(odd){
  background-color: red !important;
}

.v-data-table-footer__items-per-page {
    padding-inline-end: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
}

.v-data-table-footer__info {
    display: flex;
    padding-inline-end: 24px;
    color: white;
}

.v-data-table-footer__pagination {
    display: flex;
    align-items: center;
    color: white;
}
/* End of table */
</style>

<!-- "vuetify": "^3.3.21" -->

<!-- "vite-plugin-vuetify": "^1.0.2", -->