<template>
    <div id="platform">
        <div class="row">
            <RequestList class="sidebar col-md-4"/>
            <RequestInfo class="col-md-4"/>
            <GoogleMap class="col"/>
        </div>
    </div>
</template>

<script>

    import RequestList from './RequestList.vue'
    import RequestInfo from './RequestInfo.vue'
    import GoogleMap from './GoogleMap.vue'

    export default {
        name: 'platform',
        components: {
            RequestList,
            RequestInfo,
            GoogleMap
        }
    }
</script>

<style scoped>
    #platform {
        background-color: white;
        margin: 0 2px;
        padding: 30px;
        height: 100%;
    }

    .row, .sidebar {
        height: 100%;
    }

</style>
