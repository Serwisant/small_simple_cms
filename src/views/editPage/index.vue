<template>
    <div>
      <div class="dashboard-container">
        <div class="dashboard-text">Edit a page</div>
      </div>
      <div class="app-container">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="Page name">
            <el-input v-model="form.pageName" />
          </el-form-item>
          <el-form-item label="Page header">
            <el-input v-model="form.header" type="textarea" />
          </el-form-item>
          <el-form-item label="Page description">
            <el-input v-model="form.description" type="textarea" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Update</el-button>
            <el-button @click="onCancel">Cancel</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </template>
  
  <script>
  import { getList } from "@/api/table";
  import Axios from "axios";
  
  export default {
    data() {
      const pageId = this.$route.params.id;
  
      const page = {
        // PLACEHOLDER
        pageName: "",
        header: "",
        description: "",
      };
  
      return {
        pageId,
        form: {
          pageName: page.pageName,
          header: page.header,
          description: page.description
        },

      };
    },
    async mounted() {
      this.refreshPostAndComments();
    },
    methods: {
      onSubmit() {
        const page = {
          
        };
  
        Axios.post(
          'http://localhost:3000/page/updatePage/' + this.pageId,
          this.form
        )
          .then((r) => {
            this.$message("Submitted!");
            this.$router.push({
              path: this.redirect || "/dashboard/showAllPages/showAllPages",
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
          path: this.redirect || "/showAllPosts/showAllPosts",
        });
      },
      refreshPostAndComments() {
        console.log('http://localhost:3000/page/getPage/' + this.pageId)
        Axios.get('http://localhost:3000/page/getPage/' + this.pageId)
          .then((r) => {
            const json = JSON.parse(r.request.response);

            this.form.pageName = json["page"]["pageName"]
            this.form.header = json["page"]["header"]
            this.form.description = json["page"]["description"]
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
  