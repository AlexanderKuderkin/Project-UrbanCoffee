<template>
    <div>
      <Header />
      <HeroSection />
      <OfferSection />
      <DescriptionSection />
      <AdvertisingSection />
      <AboutSection />
      <ReviewsSection /> 
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import HeroSection from '@/components/HeroSection.vue';
  import OfferSection from '@/components/OfferSection.vue';
  import DescriptionSection from '@/components/DescriptionSection.vue';
  import AdvertisingSection from '@/components/AdvertisingSection.vue';
  import AboutSection from '@/components/AboutSection.vue';
  import ReviewsSection from '@/components/ReviewsSection.vue'; 
  import Footer from '@/components/Footer.vue';
  
  export default {
    name: 'HomePage',
    components: {
      Header,
      HeroSection,
      OfferSection,
      DescriptionSection,
      AdvertisingSection,
      AboutSection,
      ReviewsSection, 
    },
  };
  </script>
  