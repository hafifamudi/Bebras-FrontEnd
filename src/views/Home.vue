<template>
    <card-section />
    <feauture-section />
    <campaign-section/>
    <footer-section />
</template>

<script>
import CampaignSection from '../components/CampaignSection.vue'
import CardSection from '../components/CardSection.vue'
import FeautureSection from '../components/FeautureSection.vue'
import FooterSection from '../components/FooterSection.vue'
export default {
    components:{
        CardSection,
        FeautureSection,
        CampaignSection,
        FooterSection,
    }
}
</script>