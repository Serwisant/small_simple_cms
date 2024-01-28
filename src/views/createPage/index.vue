<template>
    <div>
      <div class="dashboard-container">
        <div class="dashboard-text">Edit page</div>
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
          pageName: "",
          header: "",
          description: ""
        },
      };
    },
    methods: {
      onSubmit() {
        const page = {
          pageName: this.form.pageName,
          header: this.form.header,
          description: this.form.description
        };
  
        Axios.post('http://localhost:3000/page/uploadPage/', page)
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
          path: this.redirect || "/dashboard/showAllPages/showAllPages",
        });
      },
      loadPage() {
        console.log("TODO: load page id " + this.postId)

        this.form.pageName = "pageName1 " + this.postId
        this.form.header = "header1"
        this.form.description = "description1"
      }
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
  