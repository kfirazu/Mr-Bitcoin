<template>
    <section class="contact-filter">
        <button class="btn btn-add-contact"><RouterLink to="contact/edit">Add a contact</RouterLink></button>
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

</style>