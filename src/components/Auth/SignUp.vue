<template>
     <form style="background-color: #fff; padding: 1.2em;">
            <v-text-field
            v-model="name"
            :counter="10"
            label="Name"
            required
           
            ></v-text-field>
            <v-text-field
            v-model="email"
            label="E-mail"
            required
            ></v-text-field>
            <v-select
            v-model="select"
            :items="items"
            label="Item"
            required
            ></v-select>
            <v-checkbox
            v-model="checkbox"
            label="Do you agree?"
            required
            ></v-checkbox>

    <v-btn class="mr-4">submit</v-btn>
    <v-btn>clear</v-btn>
  </form>
</template>

<script>
    export default {
        data(){
            return {
                name: '',
                email: '',
                select: null,
                items: [
                    'Item 1',
                    'Item 2',
                    'Item 3',
                    'Item 4',
                ],
                checkbox: false,
            }
        },
        methods: {
            validate () {
                this.$refs.form.validate()
            },
            reset () {
                this.$refs.form.reset()
            },
            resetValidation () {
                this.$refs.form.resetValidation()
            },
        }
    }
</script>

<style  scoped>

</style>