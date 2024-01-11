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
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="Header (click to go to post)" width="250">
        <template slot-scope="scope">
          <a :href="'/editPost/' + scope.row.id + '/editPost/'">{{
            scope.row.header
          }}</a>
        </template>
      </el-table-column>
      <el-table-column label="Content" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.content }}</span>
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

export default {
  name: "ShowAllPosts",
  data() {
    const articles = [];

    return {
      articles,
    };
  },
  async mounted() {
    this.articles = [
      {
        header: "Introducing ebook",
        content: `
            <p>This ebook landing page is good to use for any purpose. This layout is based on Bootstrap 5 CSS framework.</p>

            <p><strong>What is Content Marketing?</strong> If you are wondering what content marketing is all about, this is the place to start.</p>

            <blockquote class="blockquote">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito</blockquote>

            <p>When you need free HTML CSS templates, please visit Templatemo website which provides a variety of templates.</p>
    `,
        id: 0,
      },
      {
        header: "Win back your time",
        content: `
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <p>Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus elementum, tempor risus vel, condimentum orci.</p>

            <p>You are not allowed to redistribute this template ZIP file on any other template collection website. Please contact TemplateMo for more information.</p>

            <div class="row">
                <div class="col-lg-6 col-12 mb-3">
                    <img src="@/assets/portrait-mature-smiling-authoress-sitting-desk.jpg" class="scrollspy-example-item-image img-fluid" alt="">
                </div>

                <div class="col-lg-6 col-12 mb-3">
                    <img src="@/assets/businessman-sitting-by-table-cafe.jpg" class="scrollspy-example-item-image img-fluid" alt="">
                </div>
            </div>

            <p>If you need some specific CSS templates, you can Google with keywords such as templatemo gallery, templatemo digital marketing, etc.</p>
            `,
        id: 1,
      },
      {
        header: "Work less, do more",
        content: `
            <p>Credit goes to <a rel="nofollow" href="https://freepik.com" target="_blank">FreePik</a> for images used in this ebook landing page template. You may browse FreePik to download more free images for your website.</p>
            <p>This is a second paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

            <p>Lorem ipsum dolor sit amet, consive adipisicing elit, sed do eiusmod. tempor incididunt ut labore.</p>

            <div class="row align-items-center">
                <div class="col-lg-6 col-12">
                    <img src="@/assets/tablet-screen-contents.jpg" class="img-fluid" alt="">
                </div>

                <div class="col-lg-6 col-12">
                    <p>Modern ebook ever</p>

                    <p><strong>Lorem ipsum dolor sit amet, consive adipisicing elit, sed do eiusmod. tempor incididunt.</strong></p>
                </div>
            </div>
            `,
        id: 2,
      },
      {
        header: "Delegate",
        content: `
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <p>Lorem ipsum dolor sit amet, consive adipisicing elit, sed do eiusmod. tempor incididunt ut labore.</p>

            <p>You are not allowed to redistribute this template ZIP file on any other template collection website. Please contact TemplateMo for more information.</p>

            <img src="@/assets/portrait-mature-smiling-authoress-sitting-desk.jpg" class="scrollspy-example-item-image img-fluid mb-3" alt="">

            <p>You may want to contact us for more information about this template.</p>
            `,
        id: 12345,
      },
      {
        header: "Habits",
        content: `
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <p>You are not allowed to redistribute this template ZIP file on any other template collection website. Please contact TemplateMo for more information.</p>

            <p><strong>What is Free CSS Templates?</strong> Free CSS Templates are a variety of ready-made web pages designed for different kinds of websites.</p>

            <blockquote class="blockquote">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito</blockquote>

            <p>You may browse TemplateMo website for more CSS templates. Thank you for visiting our website.</p>`,
        id: 3,
      },
    ];
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
