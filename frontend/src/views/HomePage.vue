<template>
    <div>
      <HeroSection />
      <OfferSection />
      <DescriptionSection />
      <AdvertisingLine />
      <AdvertisingSection />
      <AboutUs/>
      <AboutSection />
      <PopularReviews/>
      <ReviewsSection /> 
    </div>
  </template>
  
  <script>
  import HeroSection from '@/components/HeroSection.vue';
  import OfferSection from '@/components/OfferSection.vue';
  import DescriptionSection from '@/components/DescriptionSection.vue';
  import AdvertisingLine from '@/components/AdvertisingLine.vue';
  import AdvertisingSection from '@/components/AdvertisingSection.vue';
  import AboutUs from '@/components/AboutUs.vue';
  import AboutSection from '@/components/AboutSection.vue';
  import PopularReviews from '@/components/PopularReviews.vue';
  import ReviewsSection from '@/components/ReviewsSection.vue'; 
  
  export default {
    name: 'HomePage',
    components: {
      HeroSection,
      OfferSection,
      DescriptionSection,
      AdvertisingLine,
      AdvertisingSection,
      AboutUs,
      AboutSection,
      PopularReviews,
      ReviewsSection, 
    },
  };
  </script>
  