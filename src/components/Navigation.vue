<script setup>
import { ref } from 'vue';

const logged = ref(true)   // 'Placeholder'
const adminDashboardEnabled = ref(true)   // 'Placeholder'

</script>
<template>
<nav class="navbar navbar-expand-lg">
    <div class="container">
        <a class="navbar-brand" href="index.html">
            <i class="navbar-brand-icon bi-book me-2"></i>
            <span>ebook</span>
        </a>

        <div class="d-lg-none ms-auto me-3">
            <a href="#" class="btn custom-btn custom-border-btn btn-naira btn-inverted">
                <i class="btn-icon bi-cloud-download"></i>
                <span>Download</span><!-- duplicated another one below for mobile -->
            </a>
        </div>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-lg-auto me-lg-4">
                <li class="nav-item">
                    <a class="nav-link click-scroll" href="#section_1">Home</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link click-scroll" href="#section_2">The Book</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link click-scroll" href="#section_3">Author</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link click-scroll" href="#section_4">Reviews</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link click-scroll" href="#section_5">Contact</a>
                </li>
                <li class="nav-item" v-if="adminDashboardEnabled">
                    <a class="nav-link click-scroll" href="/admin">Admin dashbord</a>
                </li>
                <li class="nav-item" v-if="logged === false">
                    <a class="nav-link click-scroll" href="">Log in</a>
                </li>
            </ul>

            <div class="d-none d-lg-block">
                <a href="#" class="btn custom-btn custom-border-btn btn-naira btn-inverted">
                    <i class="btn-icon bi-cloud-download"></i>
                    <span v-if="logged">Log off</span><!-- duplicated above one for mobile -->
                    <span v-else>Register</span>
                </a>
            </div>
        </div>
    </div>
</nav>
</template>

<style>
</style>
            