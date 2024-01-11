<template>
  <div>
  <div class="dashboard-container">
    <div class="dashboard-text">Create a new post</div>
  </div>
  <div class="app-container">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Post title">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Post content">
          <el-input v-model="form.content" type="textarea" />
        </el-form-item>
        <el-form-item label="Post time">
          <el-col :span="11">
            <el-date-picker v-model="form.date" type="date" placeholder="Posting date" style="width: 100%;" readonly />
          </el-col>
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
  export default {
    data() {
      const currentDate = new Date();

      return {
        form: {
          title: 'Default title',
          content: '',
          date: currentDate,
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$message('submit!')
      },
      onCancel() {
        this.$message({
          message: 'cancel!',
          type: 'warning'
        })
      }
    }
  }
  </script>
  
  <style scoped>
  .line{
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