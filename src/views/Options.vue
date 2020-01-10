<template>
<div>
    <h1>{{title}}</h1>
    <ProductSelection :key="option.name" v-for="option in options" :cost="option.cost" :selected="selected[option]" @click.native="selection(option)">{{option.name}}</ProductSelection>
    //selected needs to equal the object in the array where it is equal to the option.name
</div>
</template>

<script>

export default {
    props: {
        category: String,
        options: Array,
        title: String,
        selected: Object


    },
    methods: {
        selection(option) {
            console.log("selection")
            this.$store.commit('TOGGLE', {
                category: this.category,
                option: option
            })
        }
    }
}

</script>
