 <template>
    <div>
        <img v-if="loading"
        width="150px"
        height="150px"
        src="https://s.yimg.com/ny/api/res/1.2/81EFT_aygExFdnRjnpnC.A--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/the_zoe_report_fashion_166/00f649c6b13a6a1bb6ad971428d79d0a"/>
        <div v-else class="list">
            <div class="filter">
                <div class="row">
                    <label class="col-auto">
                        <input type="radio" name="radio" value="problem" v-model="type"> <span class="label-text">Проблема</span>
                    </label>
                    <label class="col-auto">
                        <input type="radio" name="radio" value="idea" v-model="type"> <span class="label-text">Идея</span>
                    </label>
                </div>

                <div class="row mt-4">
                    <div class="input-group col-9">
                      <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">Статус</label>
                      </div>
                      <select v-model="status" class="custom-select">
                        <option value="all" selected>Все</option>
                        <option value="completed">В работе</option>
                        <option value="pending">На обсуждении</option>
                        <option value="deleted">Не просмотрено</option>
                      </select>
                    </div>

                </div>
            </div>

                <ul class="list-group border rounded">
                    <li v-for="request in requests"
                    v-if="requestSatisfied(request)"
                    v-on:click="select(request)"
                    class="list-group-item "
                    v-bind:class="[selected && request.id === selected.id ? activeClass : '', request.status]">
                    <div class="row h-50">
                        <strong class="text-left col col-sm-9 text-truncate">{{ request.title }}</strong><br/>
                        <p class="text-right col align-self-end date">{{ request.date }}</p>
                    </div>
                    <div class="row h-50">
                        <p class="text-left col col-sm-9 satus">Статус: {{ request.status }}</p>
                        <p class="text-right col align-self-end date">{{ request.time }}</p>
                    </div>
                    </li>
                </ul>
        </div>
    </div>
</template>

<script>

    import {mapState, mapGetters, mapActions} from 'vuex'
    export default {

        data() {
            return {
                loading: false,
                activeClass: 'selected',
            }
        },

        computed: {
            ...mapState({
                selected: state => state.selectedRequest,
                requests: state => state.requests
            }),

            ...mapGetters({
                requestSatisfied: 'requestSatisfied'
            }),

            type: {
                get() {
                    return this.$store.state.type;
                },
                set(value) {
                    this.$store.commit("setType", value);
                }
            },
            status: {
                get() {
                    return this.$store.state.status;
                },
                set(value) {
                    this.$store.commit("setStatus", value);
                }
            },
        },

        methods: {
            ...mapActions({
                fetchRequests: 'fetchRequests',
                select: 'select'
            })
        },

        created() {
            this.loading = true
            this.fetchRequests()
                .then(() => this.loading = false)
        }
    }

</script>

<style scoped>
    .filter {
        height: 12%;
    }
    .selected {
        background-color: rgba(56, 176, 157, 0.2);
    }
    .status {
        height: 10px;
        width: 10px;
        border-radius: 100%;
    }

    .completed {
        border-left: 3px solid #38B09D;
    }

    .pending {
        border-left: 3px solid #edbb07;
    }

    .deleted {
        border-left: 3px solid #6c6865;
    }

    input[type="radio"]:checked {
        position: fixed;
        opacity: 0;
    }

    input[type="radio"] {
        position: fixed;
        opacity: 0;
    }


    input[type="radio"] + .label-text:before{
    	content: "\f10c";
        font-size: 18px;
    	speak: none;
    	font-style: normal;
    	font-weight: normal;
    	font-variant: normal;
    	text-transform: none;
    	line-height: 1;
    	-webkit-font-smoothing:antialiased;
    	width: 1em;
    	display: inline-block;
    	margin-right: 5px;
    }

    input[type="radio"]:checked + .label-text:before{
    	content: "\f192";
        font-size: 18px;
    	color: #38B09D;
    	animation: effect 250ms ease-in;
    }

    input[type="radio"]:disabled + .label-text{
    	color: #aaa;
        font-size: 18px;
    }

    input[type="radio"]:disabled + .label-text:before{
    	content: "\f111";
        font-size: 18px;
    	color: #ccc;
    }


.toggle input[type="radio"] + .label-text:before{
	content: "\f204";
    font-size: 18px;
	speak: none;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	-webkit-font-smoothing:antialiased;
	width: 1em;
	display: inline-block;
	margin-right: 10px;
}

.toggle input[type="radio"]:checked + .label-text:before{

    font-size: 18px;
    content: "\f205";
	color: #38B09D;
	animation: effect 250ms ease-in;
}

.toggle input[type="radio"]:disabled + .label-text{
	color: #aaa;
}

.toggle input[type="radio"]:disabled + .label-text:before{
	content: "\f204";
	color: #ccc;
    font-size: 18px;
}

.list {
    height: 100%;
}

ul {
    font-size: 12px;
    height: 88%;
    overflow-y: hidden;
    overflow-x: hidden;
}

</style>
