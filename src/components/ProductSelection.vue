<template>
<Button :selected="selected">
    <slot /><span class="cost" v-if="typeof cost === 'number'"> ${{cost}}</span>
</Button>
</template>


<script>
export default {
    props: {
        cost: Number,
        selected: Boolean
    }
}
</script>
