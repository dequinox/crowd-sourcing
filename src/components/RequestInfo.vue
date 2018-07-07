<template>
    <div v-if="request">
        <div class="top"><b>На карте отображено {{ totalMarked }} из 10 заявок</b></div>
        <div class="info border text-left">
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
                <label for="exampleFormControlTextarea1"><b>Ответ на заявку:</b></label>
                <textarea class="form-control" v-model="comment" rows="3"></textarea>
            </div>
             <br/>
             <div class="row justify-content-between">
                 <div class="input-group col-9">
                   <div class="input-group-prepend">
                     <label class="input-group-text" for="inputGroupSelect01">Статус заявки :</label>
                   </div>
                   <select v-model="status" class="custom-select">
                     <option value="completed">В работе</option>
                     <option value="pending">На обсуждении</option>
                     <option value="deleted">Не просмотрено</option>
                   </select>
                 </div>
                <button type="button" class="btn col-auto"
                v-on:click="addComment({'text': comment, 'status': status})">Завершить</button>
            </div>
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
    .top {
        height: 6%;
    }
    .info {
        border-radius: 5px;
        background-color: #f6f8f9;
        padding: 20px;
        height: 94%;
        font-size: 12px;
    }

    button {
        background-color: #38B09D;
        color: white;
        margin-right: 20px;
    }
</style>
