<template>
<div>
    <h1>{{title}}</h1>
    <ProductSelection :key="option.name" v-for="option in options" :cost="option.cost" :selected="selected && selected.name===option.name">{{option.name}}</ProductSelection>
    
</div>
</template>

<script>

export default {
    props: {
        options: Array,
        title: String,
        selected: Object
    }
}

</script>
