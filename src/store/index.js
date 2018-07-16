import Vuex from 'vuex'
import Vue from 'vue'
import citizens from '@/api/requests'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        requests: [],
        status: "all",
        type: "problem",
        selectedRequest: null,
        center: { lat: 55.750261, lng: 48.742984 },
        data: null
    },

    getters: {

        markedRequests(state) {
            return state.requests.filter(request => request.location.coordinates.length > 0 && request.request_type === state.type && (state.status === "all" || state.status === request.request_status))
        },

        requestSatisfied(state) {
            return (request) => {
                return (request.request_type == state.type) && (state.status == "all" || state.status == request.request_status)
            }
        },

        totalMarked(state) {
            return state.requests.filter(request => request.location.coordinates.length > 0).length
        },

        total(state) {
            return state.requests.length
        }
    },

    actions: {
        fetchRequests(context) {
            return new Promise((resolve, reject) => {
                Vue.http.get('http://127.0.0.1:8000/api/v1/requests/', []).then((response) => {
                    context.commit('setRequests', response.data); resolve() },
                    () => { console.log("Could not load data")});

                /*citizens.getRequests(requests => {
                    context.commit('setRequests', requests)
                    resolve()
                    // Since this is prototype we can be sure that it resolves always
                })*/
            })
        },

        select(context, selectedRequest) {
            context.commit('setSelectedRequest', selectedRequest)
            context.commit('setType', selectedRequest.request_type)

            if (selectedRequest.location.coordinates.length > 0){
                context.commit('setCenter', selectedRequest.location.coordinates)
            }
        },

        addComment(context, comment) {
            return new Promise((resolve, reject) => {
                console.log(comment.text, comment.status)
                resolve()
            })
        }
    },

    mutations: {
        setRequests(state, requests) {
            state.requests = requests
        },

        setStatus(state, status) {
            state.status = status
        },

        setType(state, type) {
            state.type = type
        },

        setSelectedRequest(state, selectedRequest) {
            state.selectedRequest = selectedRequest
        },

        setCenter(state, center) {
            state.center = center
        },
    }
})
