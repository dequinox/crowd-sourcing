 <template>
    <div>
        <img v-if="loading"
        width="150px"
        height="150px"
        src="https://s.yimg.com/ny/api/res/1.2/81EFT_aygExFdnRjnpnC.A--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/the_zoe_report_fashion_166/00f649c6b13a6a1bb6ad971428d79d0a"/>

        <div v-else class="list">
        <label class="col-auto">
            <input type="radio" name="radio" value="idea" v-model="type"> <span class="label-text">Idea</span>
        </label>
        <label class="col-auto">
            <input type="radio" name="radio" value="problem" v-model="type"> <span class="label-text">Problem</span>
        </label>
            <!--<input type="radio" id="idea" value="idea" v-model="type">
            <label for="one">Idea</label>
            <input type="radio" id="problem" value="problem" v-model="type">
            <label for="two">Problem</label>
            <br>-->

            <select v-model="status" class="form-control mt-4">
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="deleted">Deleted</option>
              <option value="completed">Completed</option>
            </select>
                <ul class="mt-4 list-group">
                    <li v-for="request in requests"
                    v-if="requestSatisfied(request)"
                    v-on:click="select(request)"
                    class="list-group-item "
                    v-bind:class="request.status">
                    <div class="row h-50">
                        <strong class="text-left col col-sm-9">{{ request.title }}</strong><br/>
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
    .status {
        height: 10px;
        width: 10px;
        border-radius: 100%;
    }

    .completed {
        border-left: 3px solid #38B09D;
    }

    .pending {
        border-left: 3px solid orange;
    }

    .deleted {
        border-left: 3px solid red;
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

.selected {
    background-color: red;
}

ul {
    max-height: 80%;
    overflow-y: scroll;
    overflow-x: hidden;
}

</style>
