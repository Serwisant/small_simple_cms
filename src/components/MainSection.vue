<script>
import Axios from "axios";

export default {
  data() {
    var posts = [];

    return {
      posts,
    };
  },
  mounted() {
    Axios.get('http://localhost:3000/page/getArticles')
      .then((r) => {
        const json = JSON.parse(r.request.response);
        this.posts = json["articles"];
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>
<template>
  <section>
    <div class="container" v-if="posts.length > 0">
      <div class="row">
        <div class="col-lg-12 col-12 text-center">
          <h6>What's inside?</h6>

          <h2 class="mb-5">Preview at glance</h2>
        </div>

        <div class="col-lg-12 col-12">
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example3"
            data-bs-smooth-scroll="true"
            class="scrollspy-example-2"
            tabindex="0"
          >
            <div class="scrollspy-example-item" v-for="post in posts">
              <a :href="'/article/' + post._id"
                ><h5>{{ post.title }}</h5></a
              >

              <p v-html="post.text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
