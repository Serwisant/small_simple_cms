<template>
    <div>
      <div class="dashboard-container">
        <div class="dashboard-text">Pages</div>
      </div>
      <el-table
        :data="pages"
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
        <el-table-column align="center" label="Page name" width="250">
          <template slot-scope="scope">
            {{ scope.row.pageName }}
          </template>
        </el-table-column>
        <el-table-column label="Header (click to edit page)" width="250">
          <template slot-scope="scope">
            <a :href="'/dashboard/editPage/' + scope.row._id + '/editPage/'">{{
              scope.row.header
            }}</a>
          </template>
        </el-table-column>
        <el-table-column label="Description">
          <template slot-scope="scope">
            <span>{{ scope.row.description }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="delete_page"
          label="Delete page"
          width="200"
        >
          <template slot-scope="scope">
            <el-button @click="deletePage(scope.row._id)">Delete page</el-button>
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
    methods: {
      deletePage(id) {
        Axios.delete('http://localhost:3000/page/deletePage/' + id)
          .then((r) => {
            this.$message("Deleted!");
            this.refreshPages();
          })
          .catch((e) => {
            this.$message({
              message: e,
              type: "warning",
            });
          });

      },
      refreshPages() {
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
    parseDate(date) {
      return new Date(Date.parse(date)).toLocaleString();
    }},
    data() {
      const pages = [];
  
      return {
        pages,
      };
    },
    mounted() {
      this.refreshPages();
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
  