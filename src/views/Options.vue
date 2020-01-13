<template>
    <div>
        <h1>{{ title }}</h1>
        <ProductSelection
            :key="option.name"
            v-for="option in options"
            :cost="option.cost"
            :selected="checkSelected(selected, option)"
            @click.native="selection(option)"
        >
            {{ option.name }}
        </ProductSelection>
    </div>
</template>

<script>
export default {
    props: {
        category: String,
        options: Array,
        title: String,
        selected: Array,
    },
    methods: {
        selection(option) {
            this.$store.commit('TOGGLE', {
                category: this.category,
                option: option,
            })
        },
        checkSelected(selected, option) {
            var selection = selected.filter(obj => {
                return obj.name === option.name
            })
            if (selection.length != 0) {
                return true
            } else {
                return false
            }
        },
    },
}
</script>
