// stores/counter.ts

// import { defineStore } from 'pinia'
export const useCounter = defineStore('counter', {
  state: () => ({
    n: 2,
  }),

  getters: {
    double: (state) => state.n * 2,
  },

  actions: {
    increment(amount = 1) {
      this.n += amount
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta.hot))
}
