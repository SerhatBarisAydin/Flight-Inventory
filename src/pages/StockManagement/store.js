import { createStore } from 'vuex';
import FlightInventoryData from "./FlightInventoryData.json"


const store = createStore({
    state:{
        flightData: FlightInventoryData,
    },

    mutations:{

        SET_FLIGHTS(state, flights){
            state.flightData = flights;
        },

        EDIT_FLIGHT(state, {index, updatedFlight}){
            state.flightData.splice(index, 1, updatedFlight);
        },

        DELETE_FLIGHT(state, index){
            state.flightData.splice(index,1);
        },

    },

    actions:{
        loadFlights({commit}){
            commit("SET_FLIGHTS", FlightInventoryData);
        },

        editFlight({commit}, {index, updatedFlight}){
            commit("EDIT_FLIGHT", index)
        },

        deleteFlight({commit}, index){
            commit("DELETE_FLIGHT", index);
        },

    },

    getters: {
        filteredFlights: (state) => (searchTerm) => {
          // Arama terimine göre flight verilerini filtreliyoruz
          return state.flightData.filter((flight) =>
            Object.values(flight).some((value) =>
              value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
          );
        },
      },
    });
    
    export default store;