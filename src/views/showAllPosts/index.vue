<template>
  <div>
    <div class="dashboard-container">
      <div class="dashboard-text">Articles</div>
    </div>
    <el-table
      :data="articles"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.row._id }}
        </template>
      </el-table-column>
      <el-table-column label="Title (click to go to post)" width="250">
        <template slot-scope="scope">
          <a :href="'/editPost/' + scope.row.id + '/editPost/'">{{
            scope.row.title
          }}</a>
        </template>
      </el-table-column>
      <el-table-column label="Content" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.text }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="created_at"
        label="Post time"
        width="200"
      >
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="delete_post"
        label="Delete post"
        width="200"
      >
        <template slot-scope="scope">
          <span><a :href="'/delete/' + scope.row.id">Delete post</a></span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getArticles } from "@/api/articles";
import Axios from "axios";

export default {
  name: "ShowAllPosts",
  data() {
    const articles = [];

    return {
      articles,
    };
  },
  async mounted() {
    Axios.get("http://localhost:3000/page/getArticles")
      .then((r) => {
        console.log(JSON.parse(r.request.response));

        const json = JSON.parse(r.request.response);
        this.articles = json["articles"];
      })
      .catch((e) => {
        this.$message({
          message: e,
          type: "warning",
        });
      });
  },
};
</script>

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
