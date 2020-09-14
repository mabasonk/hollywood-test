<template>
<div>
    <div class="container">
        <table class="table table-striped">
            <tr>
                <th>Event Name</th>
                <th>Tournament Name</th>
                <th>Event Number</th>
                <th>Event Date</th>
                <th>Event End Date</th>
                <th>Auto Close</th>
                <th></th>
            </tr>
            <tr v-for="event in events" v-bind:key="event.id">
                <td>{{ event.name }}</td>
                <td>{{ 'Test events' }}</td>
                <td>{{ event.eventNumber  }}</td>
                <td>{{ event.eventDate | moment("MM/DD/YYYY") }}</td>
                <td>{{ event.eventEndDate | moment("MM/DD/YYYY") }}</td>
                <td>{{ event.autoClose }}</td>
                <td>
                    <router-link :to="{ component: 'update-event', params: { id: event.id } }">Edit</router-link>
                    <button v-on:click="deleteEvent(event.id)" class="btn btn-primary btn-sm">Delete</button>
                </td>
            </tr>
        </table>
    </div>
</div>
</template>

<script>
const axios = require('axios').default;

export default {
    data() {
        return {
            apiUrl: 'https://localhost:44315/api/events',
            events: []
        }
    },
    mounted() {
        this.getEvents();
    },
    methods: {
        getEvents() {
            axios.get(this.apiUrl)
                .then((result) => {
                        this.events = result.data;
                    },
                    error => {
                        console.log(error);
                    });
        },
        deleteEvent(id) {
            axios.delete(this.apiUrl + '/' + id)
                .then(() => {
                        console.log('deleted');
                    },
                    error => {
                        console.log(error);
                    });
        }
    }
}
</script>
