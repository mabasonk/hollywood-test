<template>
<div>
    <p>Tournament List</p>

    <div class="mb-4">
        <router-link to="/createTournament" class="nav-link">New Tournament</router-link>
    </div>

    <table class="table table-sm table-striped">
        <tr>
            <th>Title</th>
            <th></th>
        </tr>
        <tr v-for="tournament in tournaments" v-bind:key="tournament.id">
            <td>{{ tournament.title }}</td>
            <td>
            </td>
        </tr>
    </table>
</div>
</template>

<script>
const axios = require('axios').default;

export default {
    data() {
        return {
            apiUrl: 'https://localhost:44315/api/tournaments',
            tournaments: [ ]
        }
    },
    mounted() {
        this.refreshTournaments();
    },
    methods: {
        refreshTournaments() {

            axios.get(this.apiUrl)
                .then((result) => {
                        console.log('Saved');
                        this.tournaments.push(result.data);
                        this.tournaments = result.data;
                        console.log(result.data);
                    },
                    error => {
                        console.log(error);
                    });
        }
    }
}
</script>
