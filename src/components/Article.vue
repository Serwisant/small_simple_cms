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
              <h2>{{ this.post.title }}</h2>

              <p>{{ this.post.text }}</p>
              <p>Posted in: {{ this.post.date }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row" v-if="this.isUserLoggedIn">
        <div class="col-lg-12 col-12">
          <div class="app-container">
            <el-form ref="comment" :model="comment" label-width="120px">
              <el-form-item label="Author" width="250px">
                <el-input v-model="comment.username" readonly />
              </el-form-item>
              <el-form-item label="Comment">
                <el-input v-model="comment.text" type="textarea" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="sendComment"
                  >Comment</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>

      <el-table
        :data="comments"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
      >
        <el-table-column label="Author" width="250" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.username }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Comment">
          <template slot-scope="scope">
            {{ scope.row.text }}
          </template>
        </el-table-column>
      </el-table>
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

    var post = {
      title: "",
      text: "",
      date: "",
    };

    var comments = [];

    var comment = {
      articleId: postId,
      username: getUsername(),
      text: "",
    };

    return {
      postId,
      post,
      comments,
      comment,
      isUserLoggedIn: isUserLoggedIn(),
    };
  },
  mounted() {
    this.getArticle();
  },
  methods: {
    sendComment() {
      Axios.post('http://localhost:3000/page/uploadComment', this.comment)
        .then((r) => {
          this.$message({
            message: r.data.message,
          });
          this.getArticle();
          this.comment = {
            articleId: this.postId,
            username: "",
            text: "",
          };
        })
        .catch((e) => {
          this.$message({
            message: e,
            type: "warning",
          });
        });
    },
    getArticle() {
      Axios.get('http://localhost:3000/page/getArticleById/' + this.postId)
        .then((r) => {
          const json = JSON.parse(r.request.response);

          this.post.title = json["title"];
          this.post.text = json["text"];
          this.post.date = json["date"];

          console.log(json["comments"]);
          this.comments = json["comments"].reverse();
        })
        .catch((e) => {
          this.$message({
            message: e,
            type: "warning",
          });
        });
    },
  },
};
</script>
