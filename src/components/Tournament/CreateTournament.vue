<template>
<div>
    <h2>Create New Post</h2>
    <div class="row">
        <div class="col-md-8">
            <form v-on:submit.prevent="saveTournament" v-if="tournament">
                <div class="form-group row">
                    <label for="title" class="col-md-3 col-form-label">Title</label>
                    <div class="col-md-9">
                        <input type="text" id="title" v-model="tournament.name" class="form-control" placeholder="Tournament title" />
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
const axios = require('axios').default;

export default {
    data() {
        return {
            //todo: configure this according to environment 
            apiUrl: 'https://localhost:44315/api/tournaments',
            tournament: {
                name: null
            }
        }
    },
    methods: {
        saveTournament() {
            console.log('save post');

            var config = {
                method: 'post',
                url: this.apiUrl,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: this.tournament
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
