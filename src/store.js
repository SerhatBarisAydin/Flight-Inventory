import { createStore } from "vuex";

const store = createStore({
  state: {
    person: [
      {
        name: "Baris Aydin",
        id: 21217862380,
        password: 123456,
        surname:1234546
      },
    ],
  },
  /* statte bulunan verileri yollar bilgileri değişken halinde almamızı sağlar $store.getters.degisken olarak çağırırız*/

  mutations: {
    newPerson(state, newUser) {
      state.person.push(newUser);
    },
  },
});

export default store;
