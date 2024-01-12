<script>
import "@/jquery.sticky.js";
import "@/bootstrap.bundle.min.js";
import "@/click-scroll.js";
import "@/custom.js";
import "@/jquery.min.js";

import Navigation from "@/components/Navigation.vue";
import HeroSection from "@/components/HeroSection.vue";
import Article from "@/components/Article.vue";
import ContactSection from "@/components/ContactSection.vue";

import "@/assets/google.css";
import "@/assets/bootstrap.min.css";
import "@/assets/bootstrap-icons.css";
import "@/assets/templatemo-ebook-landing.css";

export default {
  components: {
    Navigation,
    HeroSection,
    Article,
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
      <Article></Article>
      <ContactSection></ContactSection>
    </main>
  </body>
</template>
