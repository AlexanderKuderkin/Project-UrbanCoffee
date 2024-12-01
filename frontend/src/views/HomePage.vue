<template>
    <div>
      <HeroSection />
      <OfferSection />
      <DescriptionSection />
      <AdvertisingSection />
      <AboutSection />
      <ReviewsSection /> 
    </div>
  </template>
  
  <script>
  import HeroSection from '@/components/HeroSection.vue';
  import OfferSection from '@/components/OfferSection.vue';
  import DescriptionSection from '@/components/DescriptionSection.vue';
  import AdvertisingSection from '@/components/AdvertisingSection.vue';
  import AboutSection from '@/components/AboutSection.vue';
  import ReviewsSection from '@/components/ReviewsSection.vue'; 
  
  export default {
    name: 'HomePage',
    components: {
      HeroSection,
      OfferSection,
      DescriptionSection,
      AdvertisingSection,
      AboutSection,
      ReviewsSection, 
    },
  };
  </script>
  