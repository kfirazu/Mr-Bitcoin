<template>
    <div v-if="contact" class="contact-details">
        <div class="img-container">
            <img :src="`https://joeschmoe.io/api/v1/${this.contact.name}@ashallendesign.co.uk`" />
        </div>
        <div class="contact content">
            <h2 class="info">{{ contact.name }}</h2>
            <h3 class="info">{{ contact.email }}</h3>
            <h3 class="info">{{ contact.phone }}</h3>
            <button class="btn btn-back" @click="onGoBack">Go back</button>
        </div>
        
    </div>
    <div v-else>Loading...</div>


</template>

<script>
import { contactService } from '../services/contactService';

export default {
    data() {
        return {
            contact: null
        }
    },
    methods: {
        onGoBack(){
            this.$router.back()
        }
    },
    async created() {
        const _id = this.$route.params._id
        this.contact = await contactService.getContactById(_id)
    }

}
</script>

<style lang="scss">

</style>