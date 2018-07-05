<template>
    <div v-if="request">
        <b>We have {{ totalMarked }} requests marked on map</b>
        <div class="info border mt-4 text-left">
            <div class="row justify-content-between">
                <strong class="text-left col-sm-9">{{ request.title }}</strong>
                <span class="glyphicon glyphicon-remove col-auto" v-on:click="select(null)"></span>
            </div>
            <div class="row">
                <span class="text-left col-sm-9">Статус: {{ request.status }}</span>
            </div>
            <hr>
            <b>Заявитель</b><br/>
            {{ request.sender }} <br/> <br/>
            <b>Описание</b> <br/>
            {{ request.description }} <br/> <br/>
            <div class="form-group">
                <label for="exampleFormControlTextarea1"><b>Обработка заявки:</b></label>
                <textarea class="form-control" v-model="comment" rows="3"></textarea>
            </div>
             <br/>
            Статус заявки:
            <select v-model="status">
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="deleted">Deleted</option>
            </select>
            <button type="button" class="btn"
            v-on:click="addComment({'text': comment, 'status': status})">Завершить</button>
        </div>
    </div>
</template>

<script>

    import {mapState, mapGetters, mapActions} from 'vuex'
    export default {
        data() {
            return {
                status: 'pending',
                comment: ''
            }
        },

        computed: {

            ...mapState({
                request: state => state.selectedRequest
            }),

            ...mapGetters({
                totalMarked: 'totalMarked'
            })
        },

        methods: {
            ...mapActions({
                select: 'select',
                addComment: 'addComment'
            }),
        }
    }

</script>

<style scope>
    .info {
        border-radius: 5px;
        background-color: #f6f8f9;
        padding: 20px;
    }

    button {
        background-color: #38B09D;
        color: white;
    }
</style>
