<template>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-12">
            <div
              data-bs-spy="scroll"
              data-bs-target="#navbar-example3"
              data-bs-smooth-scroll="true"
              class="scrollspy-example-2"
              tabindex="0"
            >
              <div class="scrollspy-example-item">
                <h2>{{ this.page.pageName }}</h2>
  
                <h3>{{ this.page.header }}</h3>
                <p>{{ this.page.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { isUserLoggedIn, getUsername } from "@/api/user";
  import Axios from "axios";
  
  export default {
    data() {
      const postId = this.$route.params.id;
      console.log(postId);
  
      var page = {
        pageName: "",
        header: "",
        desciption: ""
      };
    
      return {
        postId,
        page
      };
    },
    mounted() {
      this.getPage();
    },
    methods: {
      getPage() {
        Axios.get('http://localhost:3000/page/getPage/' + this.postId)
        .then((r) => {
          const json = JSON.parse(r.request.response);

          console.log(json)

          this.page.pageName = json["page"]["pageName"]
          this.page.header = json["page"]["header"]
          this.page.description = json["page"]["description"]
        })
        .catch((e) => {
          this.$message({
            message: e,
            type: "warning",
          });
        });

      },
    parseDate(date) {
      return new Date(Date.parse(date)).toLocaleString();
    },
    },
  };
  </script>
  