<template>
<div>
    <h1>{{title}}</h1>
    <ProductSelection :key="option.name" v-for="option in options" :cost="option.cost" :selected="selected && selected.name===option.name" @click.native="selection(option)">{{option.name}}</ProductSelection>
    
</div>
</template>

<script>

export default {
    props: {
        category: String,
        options: Array,
        title: String,
        selected: Array


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
