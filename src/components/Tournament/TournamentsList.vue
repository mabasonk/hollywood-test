<template>
<div>
    <p>Tournament List</p>

    <div class="mb-4">
        <router-link :to="{ name: 'new-post' }" class="btn btn-success">New Post</router-link>
    </div>

    <table class="table table-sm table-striped">
        <tr>
            <th>Title</th>
            <th>Date</th>
            <th></th>
        </tr>
        <tr v-for="post in tournaments" v-bind:key="post.id">
            <td>{{ post.title }}</td>
            <!-- <td>{{ post.postDate | moment("MM/DD/YYYY") }}</td> -->
            <td>
                <router-link :to="{ name: 'edit-post', params: { id: post.id } }">Edit</router-link>
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

            //   axios.get(this.apiUrl)
            //         .then(function (response) {

            //             this.tournaments = response.data;
            //         })
            //         .catch(function (error) {
            //             console.log(error);
            //         });

        }
    }
}
</script>
