<script>
import "../assets/bootstrap-icons.css";
export default {
  name: "Featured",
  data() {
    return {};
  },
};
</script>

<template>
  <section class="featured-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-12">
          <div class="avatar-group d-flex flex-wrap align-items-center">
            <img
              src="../assets/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg"
              class="img-fluid avatar-image"
              alt=""
            />

            <img
              src="../assets/avatar/portrait-young-redhead-bearded-male.jpg"
              class="img-fluid avatar-image avatar-image-left"
              alt=""
            />

            <img
              src="../assets/avatar/pretty-blonde-woman.jpg"
              class="img-fluid avatar-image avatar-image-left"
              alt=""
            />

            <img
              src="../assets/avatar/studio-portrait-emotional-happy-funny-smiling-boyfriend.jpg"
              class="img-fluid avatar-image avatar-image-left"
              alt=""
            />

            <div class="reviews-group mt-3 mt-lg-0">
              <strong>4.5</strong>

              <i class="bi-star-fill"></i>
              <i class="bi-star-fill"></i>
              <i class="bi-star-fill"></i>
              <i class="bi-star-fill"></i>
              <i class="bi-star"></i>

              <small class="ms-3">2,564 reviews</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
