<template>
    <div v-if="contact" class="contact-details">
        <div class="img-container">
            <img :src="`https://robohash.org/${contact.name}?set=set3`" />
        </div>
        <div class="contact content">
            <h2 class="name">{{ contact.name }}</h2>
            <h3 class="email">{{ contact.email }}</h3>
            <h3 class="phone">{{ contact.phone }}</h3>
            <button @click="onGoBack">Go back</button>
        </div>
        
    </div>


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
.contact-details {
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-block-start: 20px;

    img {
        width: 100%;
        object-fit: cover;
    }

}
</style>