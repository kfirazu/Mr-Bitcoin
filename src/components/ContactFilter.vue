<template>
    <section class="contact-filter">
        <input @input="onFilter" v-model="filterBy.name" placeholder="Search contacts" type="text">
    </section>
</template>

<script>
export default {
    data() {
        return {
            filterBy: { name: '' }
        }
    },
    methods: {
        onFilter() {
            this.$emit('filter', this.filterBy)
        }
    }

}
</script>

<style lang="scss">
.contact-filter {
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #53a8b6;


    input {
        // margin: 10px auto;
        padding: 8px;
        border-radius: 4px;
        width: 40%;
    }
}
</style>