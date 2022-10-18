<template>
    <section class="main-layout">
        <!-- <h1 v-if="user" class="user-name">{{ user.name }}</h1>
        <div v-else>Loading...</div> -->

        <h1>Hello from home page</h1>

    </section>

</template>

<script>
export default {
    data() {
        return {
            user: null
        }
    },
    methods: {
    },
    created() {
        // this.user = userService.getUser()
    }

}
</script>

<style>

</style>