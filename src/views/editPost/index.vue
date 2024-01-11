<template>
  <div>
    <div class="dashboard-container">
      <div class="dashboard-text">Edit a post</div>
    </div>
    <div class="app-container">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Post title">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="Post content">
          <el-input v-model="form.content" type="textarea" />
        </el-form-item>
        <el-form-item label="Post time">
          <el-col :span="11">
            <el-date-picker
              v-model="form.date"
              type="date"
              placeholder="Pick a date"
              style="width: 100%"
              readonly
            />
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit"
            >Save post {{ form.postId }}</el-button
          >
          <el-button @click="onCancel">Cancel</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="dashboard-container">
      <div class="dashboard-text">Comments</div>
    </div>
    <el-table
      :data="comments"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="Comment">
        <template slot-scope="scope">
          {{ scope.row.comment }}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="created_at"
        label="Comment time"
        width="200"
      >
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="delete_comment"
        label="Delete comment"
        width="200"
      >
        <template slot-scope="scope">
          <span><a :href="'/delete/' + scope.row.id">Delete comment</a></span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from "@/api/table";

export default {
  data() {
    const postId = this.$route.params.id;

    const post = {
      // PLACEHOLDER
      title: "",
      content: "",
      date: "",
    };

    return {
      form: {
        postId: postId,
        title: post.title,
        content: post.content,
        date: post.date,
      },
      comments: null,
    };
  },
  async mounted() {
    Axios.get("http://localhost:3000/page/getArticle/" + this.postId)
      .then((r) => {
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
  methods: {
    onSubmit() {
      this.$message("Saved post " + this.form.postId);
    },
    onCancel() {
      this.$message({
        message: "cancel!",
        type: "warning",
      });
    },
    fetchComments() {},
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
