<template>
    <div id='register'>
        <h1>Register</h1>
        <div class='form-inputs'>
            <label for='name'>Name</label>
            <input type='text' id='name' name='name' v-model='input.name' placeholder='Name' />
        </div>
        <div class='form-inputs'>
            <button type='button' v-on:click='register()'>Add User</button>
        </div>        
        <div v-if='loading'>
            <img src='../assets/loader.gif' />
            Loading.....
        </div>
    </div>
</template>

<script>
    import { API } from '../Api/axios';

    export default {
        name: 'Register',
        data() {
            return {
                input: {
                    name: '',
                },
                loading: false
            }
        },
        methods: {
            async register() {
                if (this.input.name != '') {
                    this.loading = true;
                    const payload = {
                        name: this.input.name
                    };
                    const result = await API.post('/create-user', payload);
                    if (result) {
                        this.loading = false;
                    }
                } else {
                    console.log('Name must be present');
                }
            }
        }
    }
</script>

<style>
#register .form-inputs {
    padding-bottom: 10px;
}

#register .form-inputs label {
    padding-right: 10px;
}
</style>