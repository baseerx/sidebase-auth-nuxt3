import { defineStore } from "pinia";
export const setNameStore = defineStore({
  id: "setNameStore",
  state: () => ({
    name: "",
  }),
  actions: {
    setName(name: any) {
      this.name = name;
    },
  },
  getters: {
    getName(state): string {
      return state.name;
    },
  },
});
