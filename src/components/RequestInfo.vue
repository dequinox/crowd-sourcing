<template>
    <div v-if="request">
        <div class="info border text-left">
            <div class="row justify-content-between">
                <strong class="text-left col-10">{{ request.title }}</strong>
                <span class="cancel col" v-on:click="select(null)"><img class="float-right" src="https://www.modo.com/wp-content/themes/modo/assets/img/thin-close-icon.png" width="25px" height="25px"/></span>
            </div>
            <div class="row">
                <span class="text-left col-sm-9 status mt-1" v-bind:class="request.status">Статус: {{ request.status }}</span>
            </div>
            <hr>
            <b>Заявитель</b><br/>
            {{ request.sender }} <br/> <br/>
            <b>Описание</b> <br/>
            {{ request.description }} <br/> <br/>
            <div class="form-group">
                <label><b>Ответ на заявку:</b></label>
                <textarea class="form-control" v-model="comment" rows="5" placeholder="Напишите ответ заявителю..."></textarea>
            </div>
             <br/>
             <div class="row">
                      <label class="col-auto stat">
                         <b>Статус заявки :</b>
                     </label>
                     <div class="col">
                       <select v-model="status" class="custom-select">
                         <option value="completed">В работе</option>
                         <option value="pending">На обсуждении</option>
                         <option value="deleted">Не просмотрено</option>
                       </select>
                    </div>
            </div>
            <div class="row justify-content-end">
            <button type="button" class="col-5 mt-5"
            v-on:click="addComment({'text': comment, 'status': status})">Сохранить</button>
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
        padding: 30px;
        height: 100%;
    }
    .status::before {
        content: "";
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-right: 5px;
        vertical-align: middle;
        border-radius: 100%;
    }
    .completed::before {
        background-color: #22a55a;
    }

    .pending::before {
        background-color: #f2c94c;
    }

    .deleted::before {
        background-color: #511a85;
    }

    .custom-select {
        height: 30px;
    }

    .stat {
        margin: auto 0;
    }

    button {
        padding: 7px;
        border: none;
        border-radius: 20px;
        background: #38B09D;
        color: white;
        margin-right: 20px;
    }
    .row {
    }
</style>
