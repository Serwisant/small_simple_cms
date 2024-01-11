<script>
export default {
  methods: {
    mockUpResponse() {
      const res = [
        {
          header: "Introducing ebook",
          content: `
            <p>This ebook landing page is good to use for any purpose. This layout is based on Bootstrap 5 CSS framework.</p>

            <p><strong>What is Content Marketing?</strong> If you are wondering what content marketing is all about, this is the place to start.</p>

            <blockquote class="blockquote">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito</blockquote>

            <p>When you need free HTML CSS templates, please visit Templatemo website which provides a variety of templates.</p>
    `,
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
        },
        {
          header: "Habits",
          content: `
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <p>You are not allowed to redistribute this template ZIP file on any other template collection website. Please contact TemplateMo for more information.</p>

            <p><strong>What is Free CSS Templates?</strong> Free CSS Templates are a variety of ready-made web pages designed for different kinds of websites.</p>

            <blockquote class="blockquote">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito</blockquote>

            <p>You may browse TemplateMo website for more CSS templates. Thank you for visiting our website.</p>`,
        },
      ];

      // simulation of delay of DB
      //await new Promise((r) => setTimeout(r, 2000));

      return res;
    },
  },
  data() {
    var posts = this.mockUpResponse();

    return {
      posts,
    };
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
              <h5>{{ post.header }}</h5>

              <p v-html="post.content"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
