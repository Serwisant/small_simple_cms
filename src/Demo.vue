<script setup>
import Navigation from './components/Navigation.vue'
import HeroSection from './components/HeroSection.vue'
import Featured from './components/Featured.vue'
import BookSection from './components/BookSection.vue'
import MainSection from './components/MainSection.vue'
import AuthorSection from './components/AuthorSection.vue'
import ReviewsSection from './components/ReviewSection.vue'
import ContactSection from './components/ContactSection.vue'

import * as jquerymin from "./jquery.min.js"
import * as bootstrapbundle from "./bootstrap.bundle.min.js"
import * as jquerysticky from "./jquery.sticky.js"
import * as clickscroll from "./click-scroll.js"
import * as custom from "./custom.js"

import './assets/google.css'
import './assets/bootstrap.min.css';
import './assets/bootstrap-icons.css';
import './assets/templatemo-ebook-landing.css'
</script>

<template>
    <body>
        <main>
            <Navigation/>
            <HeroSection/>
            <Featured/>

            <section class="py-lg-5"></section>

            <BookSection/>
            <MainSection/>
            <AuthorSection/>
            <ReviewsSection/>
            <ContactSection/>
        </main>


    </body>
</template>
