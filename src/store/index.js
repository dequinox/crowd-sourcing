import Vuex from 'vuex'
import Vue from 'vue'
import citizens from '@/api/requests'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

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
                Vue.http.get('http://209.97.137.55:8000/api/v1/requests/', []).then((response) => {
                    context.commit('setRequests', response.data); resolve() },
                    () => { console.log("Could not load data")});
            })
        },

        select(context, selectedRequest) {
            context.commit('setSelectedRequest', selectedRequest)
            context.commit('setType', selectedRequest.request_type)

            if (selectedRequest && selectedRequest.location.coordinates.length > 0){
                context.commit('setCenter', selectedRequest.location.coordinates);
            }

        },

        addComment(context, comment) {
            return new Promise((resolve, reject) => {
                console.log(comment.text, comment.status)
                var link = 'http://209.97.137.55:8000/api/v1/requests/' + comment.request._id + '/'
                comment.request_status = comment.status
                var newdata = {
            		"_id": comment.request._id,
            		"author": {
            			"messenger_id": comment.request.author.messenger_id,
            			"full_name": comment.request.author.full_name
            		},
            		"request_type": comment.request.request_type,
            		"request_status": comment.status,
            		"title": comment.request.title,
            		"description": comment.request.description,
            		"location": {
            			"type": comment.request.location.type,
            			"coordinates": comment.request.location.coordinates
            		},
            		"images": comment.request.images,
            		"created_at": comment.request.created_at,
            		"updated_at": comment.request.updated_at,
            		"replies": comment.request.replies
            	};
                Vue.http.put(link, newdata, []).then((response) => {
                     resolve() },
                    (err) => { console.log(newdata); console.log(err)});
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
