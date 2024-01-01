<template>
    <div>
      <h2>Mountains</h2>
      <ul>
        <li v-for="mountain in mountains" :key="mountain.slug">
          {{ mountain.title }}
        </li>
      </ul>
  
      <div v-if="pending">Loading...</div>
      <v-btn @click="load">Load more</v-btn>
    </div>
  </template>
  
  
<script setup>

const { data: mountains, pending, error, refresh } = useAsyncData(
  'mountains',
  () => $fetch('https://api.nuxtjs.dev/mountains')
);

const load = async () => {
  pending.value = true;
  await refresh();
};
</script>
  <!-- <script setup>
  const page = ref(1);
  const lastPage = ref(1);
  const companies = ref([]);
  const pending = ref(false);
  
  onMounted(() => {
    loadCompanies();
  })
  
  const loadMore = () => {
    if( page.value + 1 <= lastPage.value ){
      page.value = page.value + 1;
      
      loadCompanies();
    }
  }
  
  const loadCompanies = () => {
    pending.value = true;
  
    $fetch(`/api/v1/companies`, {
      method: 'GET',
      baseURL: 'https://api.roastandbrew.coffee',
      params: {
        page: page.value
      }
    }).then( function( companies ){
      appendCompanies( companies.data );
      pending.value = false;
      lastPage.value = companies.last_page;
    });
  }
  
  const appendCompanies = ( newCompanies ) => {
    newCompanies.forEach( ( company ) => {
      companies.value.push( company );
    });
  }
  </script> -->