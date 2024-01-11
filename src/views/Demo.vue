<script>
import "@/jquery.sticky.js";
import "@/bootstrap.bundle.min.js";
import "@/click-scroll.js";
import "@/custom.js";
import "@/jquery.min.js";

import Navigation from "@/components/Navigation.vue";
import HeroSection from "@/components/HeroSection.vue";
import BookSection from "@/components/BookSection.vue";
import Featured from "@/components/Featured.vue";
import MainSection from "@/components/MainSection.vue";
import AuthorSection from "@/components/AuthorSection.vue";
import ReviewSection from "@/components/ReviewSection.vue";
import ContactSection from "@/components/ContactSection.vue";

import "@/assets/google.css";
import "@/assets/bootstrap.min.css";
import "@/assets/bootstrap-icons.css";
import "@/assets/templatemo-ebook-landing.css";

export default {
  name: "Demo",
  components: {
    Navigation,
    HeroSection,
    BookSection,
    Featured,
    MainSection,
    AuthorSection,
    ReviewSection,
    ContactSection,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <body>
    <main>
      <Navigation />
      <HeroSection />
      <Featured></Featured>
      <BookSection />
      <MainSection></MainSection>
      <AuthorSection></AuthorSection>
      <ReviewSection></ReviewSection>
      <ContactSection></ContactSection>
    </main>
  </body>
</template>
