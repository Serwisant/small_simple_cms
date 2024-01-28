<script>
import { isUserLoggedIn, isUserAdmin, logout } from "@/api/user";
import Axios from "axios";

export default {
  name: "Navigation",
  data() {
    var logged = isUserLoggedIn();
    var adminDashboardEnabled = isUserAdmin();
    var pages = [];
    return {
      pages,
      logged,
      adminDashboardEnabled,
    };
  },
  mounted() {
    Axios.get('http://localhost:3000/page/getPages/')
    .then((r) => {
      const json = JSON.parse(r.request.response);

      this.pages = json
    })
    .catch((e) => {
      this.$message({
        message: e,
        type: "warning",
      });
    });
  },
  methods: {
    logoutUser() {
      logout();
      this.$router.go();
    },
    register() {
      this.$router.push({
        path: this.redirect || "/register",
      });
    },
  },
  };
</script>
<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="/">
        <i class="navbar-brand-icon bi-book me-2"></i>
        <span>ebook</span>
      </a>

      <div class="d-lg-none ms-auto me-3">
        <a
          href="#"
          class="btn custom-btn custom-border-btn btn-naira btn-inverted"
        >
          <i class="btn-icon bi-cloud-download"></i>
          <span>Download</span
          ><!-- duplicated another one below for mobile -->
        </a>
      </div>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-lg-auto me-lg-4">
          <li class="nav-item" v-for="page in pages">
            <a class="nav-link click-scroll" :href="'/page/' + page.pageName"> {{ page.pageName }}</a>
          </li>

          <li class="nav-item" v-if="adminDashboardEnabled === true">
            <a class="nav-link click-scroll" href="/dashboard"
              >Admin dashboard</a
            >
          </li>
          <li class="nav-item" v-if="logged === false">
            <a class="nav-link click-scroll" href="/register">Register</a>
          </li>
        </ul>

        <div class="d-none d-lg-block" v-if="logged">
          <a
            href="#"
            class="btn custom-btn custom-border-btn btn-naira btn-inverted"
            @click="logoutUser"
          >
            <i class="btn-icon bi-cloud-download"></i>
            <span>Log off</span>
          </a>
        </div>

        <div class="d-none d-lg-block" v-if="logged === false">
          <a
            href="/login"
            class="btn custom-btn custom-border-btn btn-naira btn-inverted"
          >
            <i class="btn-icon bi-cloud-download"></i>
            <span>Log in</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style></style>
