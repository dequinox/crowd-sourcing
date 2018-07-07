import Vuex from 'vuex'
import Vue from 'vue'
import citizens from '@/api/requests'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        requests: [],
        status: "all",
        type: "idea",
        selectedRequest: null,
        center: { lat: 55.793633, lng: 49.116411 },
    },

    getters: {

        markedRequests(state) {
            return state.requests.filter(request => request.location)
        },

        requestSatisfied(state) {
            return (request) => {
                return (request.type == state.type) && (state.status == "all" || state.status == request.status)
            }
        },

        totalMarked(state) {
            return state.requests.filter(request => request.location).length
        }
    },

    actions: {
        fetchRequests(context) {
            return new Promise((resolve, reject) => {
                citizens.getRequests(requests => {
                    context.commit('setRequests', requests)
                    resolve()
                    // Since this is prototype we can be sure that it resolves always
                })
            })
        },

        select(context, selectedRequest) {
            context.commit('setSelectedRequest', selectedRequest)
            context.commit('setType', selectedRequest.type)

            if (selectedRequest.location){
                context.commit('setCenter', selectedRequest.location)
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
