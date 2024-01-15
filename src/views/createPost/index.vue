<template>
  <div>
    <div class="dashboard-container">
      <div class="dashboard-text">Create a new post</div>
    </div>
    <div class="app-container">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Post title">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="Post content">
          <el-input v-model="form.content" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button @click="onCancel">Cancel</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import { getUsername } from "@/api/user";

export default {
  data() {
    return {
      form: {
        title: "Default title",
        content: "",
        date: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      const article = {
        author: getUsername(),
        title: this.form.title,
        header: this.form.title,
        text: this.form.content,
        backgroundImage: "",
        allowComments: true,
        commentsVisibility: true,
      };

      Axios.post('http://localhost:3000/page/uploadArticle/', article)
        .then((r) => {
          console.log(r);
          this.$message("Submitted!");
          this.$router.push({
            path: this.redirect || "/dashboard/showAllPosts/showAllPosts",
          });
        })
        .catch((e) => {
          this.$message({
            message: e,
            type: "warning",
          });
        });
    },
    onCancel() {
      this.$router.push({
        path: this.redirect || "/dashboard/showAllPosts/showAllPosts",
      });
    },
  },
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
