<template>
<div>
    <span v-on:click="selection = product1.cost">{{product1.name}} - {{product1.cost}}</span>
    <span v-on:click="selection = product2.cost">{{product2.name}} - {{product2.cost}}</span>
    <span v-on:click="selection = product3.cost">{{product3.name}} - {{product3.cost}}</span>
    <span>{{selection}}</span>

</div>
</template>

<script>
export default {
    data() {
        return {
            product1: {
                name: 'product 1',
                cost: 0.20
            },
            product2: {
                name: 'product 2',
                cost: 0.50
            },
            product3: {
                name: 'product 3',
                cost: 0.75
            },
            selection: 0
        }
    }
}
</script>

<style scoped>
span {
    background-color: white;
    border-radius: 6px;
    border: rgb(219,172,123) solid 3px;
    padding: 10px;
    margin: 10px;
}
</style>