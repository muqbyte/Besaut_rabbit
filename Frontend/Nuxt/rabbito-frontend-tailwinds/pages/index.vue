<template>
    <div>      
      <v-row dense>
        <v-col cols="4">
          <ChartsSimple/>
        </v-col>
        <v-col cols="3">
          <RealtimeGaugeMqtt/>
          <AppAlert>
            This is an auto-imported component.
          </AppAlert>
        </v-col>
        <v-col cols="3">
          <RealtimeThermalSensor/>
        </v-col>
      </v-row>

    </div>
</template>

<style>
@import '~/assets/main.css';

body {
    background-color: #fff;
    color: rgba(0,0,0,0.8);
  }
  .dark-mode body {
    background-color: #091a28;
    color: #ebf4f1;
  }
  .sepia-mode body {
    background-color: #f1e7d0;
    color: #433422;
  }
  
p {
  padding: 20px 0;
  margin: 0;
}
.container {
  text-align: center;
  padding: 50px;
}
.note {
  transition: all 0.3s;
  display: inline-block;
  padding: 15px 15px;
  border-radius: 5px;
  background-color: var(--bg-secondary);
  color: var(--color-secondary);
}
</style>
  