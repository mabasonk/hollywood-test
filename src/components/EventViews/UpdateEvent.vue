<template>
<div>
    <div class="row">
        <div class="col-md-8">
            <form v-on:submit.prevent="saveEvent" v-if="event">
                <div class="form-group row">
                    <label for="name" class="col-md-3 col-form-label">Name</label>
                    <div class="col-md-9">
                        <input type="text" id="name" v-model="event.name" class="form-control" placeholder="Event Name" />
                    </div>
                </div>
                <div>
                    <div class="form-group row">
                        <label for="name" class="col-md-3 col-form-label">Torunament</label>
                        <div class="col-md-9">
                            <select class="form-control">
                                <option v-for="tournament in tournaments" v-bind:key="tournament.id">
                                    {{tournament.name}}
                                </option>
                            </select>
                        </div>
                    </div>

                </div>

                <div class="form-group row">
                    <label for="eventNo" class="col-md-3 col-form-label">Event Number</label>
                    <div class="col-md-9">
                        <input type="text" id="name" v-model="event.eventNo" class="form-control" placeholder="Event Number" />
                    </div>
                </div>

                <div class="form-group row">
                    <label for="event-date" class="col-md-3 col-form-label">Event Date</label>
                    <div class="col-md-9">
                        <datepicker id="eventDate" v-model="event.eventDate" input-class="form-control" format="MM/dd/yyyy"></datepicker>
                    </div>
                </div>

                <div class="form-group row">
                    <label for="eventEnd-date" class="col-md-3 col-form-label">Event End Date</label>
                    <div class="col-md-9">
                        <datepicker id="eventEndDate" v-model="event.eventEndDate" input-class="form-control" format="MM/dd/yyyy"></datepicker>
                    </div>
                </div>

                <div class="form-group row">
                    <label for="autoClose" class="col-md-3 col-form-label">Auto Close</label>
                    <div class="col-sm-3">
                        <input type="checkbox" id="autoClose" v-model="event.autoClose" placeholder="Auto close" />
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-md-12">
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
const axios = require('axios').default;
export default {
    components: {
        Datepicker
    },
    data() {
        return {
            apiUrl: 'https://localhost:44315/api/',
            event: {

            }
        }
    },
    created() {

    },
    methods: {
        getEvent() {
            var eventId = this.$route.params.id;

            var config = {
                method: 'get',
                url: this.apiUrl + '/events/' + eventId,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: this.event
            };

            axios(config)
                .then(() => {
                        console.log('updated');
                    },
                    error => {
                        console.log(error);
                    });

        },
        saveEvent() {
            var config = {
                method: 'put',
                url: this.apiUrl + 'events/' + this.event.id,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: this.event
            };

            axios(config)
                .then(() => {
                        console.log('Saved');
                    },
                    error => {
                        console.log(error);
                    });
        }
    }
}
</script>
