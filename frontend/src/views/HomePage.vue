<template>
    <div>
      <Header />
      <HeroSection />
      <OfferSection />
      <DescriptionSection />
      <AdvertisingSection />
      <AboutSection />
      <ReviewSection />
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import HeroSection from '@/components/HeroSection.vue';
  import OfferSection from '@/components/OfferSection.vue';
  import DescriptionSection from '@/components/DescriptionSection.vue';
  import AdvertisingSection from '@/components/SdvertisingSection.vue';
  import AboutSection from '@/components/AboutSection.vue';
  import ReviewSection from '@/components/ReviewSection.vue';
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
      ReviewSection,
      Footer,
    },
  };
  </script>
  

  