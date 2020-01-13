<template>
    <button class="button" :class="{ selected: selected }">
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        selected: Boolean,
    },
}
</script>

<style scoped>
.button {
    background-color: white;
    border-radius: 6px;
    border: rgb(219, 172, 123) solid 3px;
    padding: 10px;
    margin: 10px;
    color: black;
    outline: none;
}

.selected {
    border: rgb(154, 104, 65) solid 3px;
    color: rgb(154, 104, 65);
    background-color: rgb(219, 172, 123);
}
</style>
