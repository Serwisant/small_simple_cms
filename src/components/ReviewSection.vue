<script setup>
import { onMounted, ref } from 'vue';
import '../assets/bootstrap-icons.css';

const reviews = ref();

async function mockUpResponse() {
    var obj = [ 
        {
            name: "Loren",
            surname: "Ipsum",
            review: "Dolor sit amet"
        },
        {
            name: "Mario",
            surname: "Mario",
            review: "Not enough lasagna"
        },
        {
            name: "Richter",
            surname: "Belmont",
            review: "Monstrous!"
        },
        {
            name: "Jon",
            surname: "Doe",
            review: "Doe it or don't, there is no try!"
        },
        {
            name: "Dat",
            surname: "Boi",
            review: "Here I come!"
        },
        {
            name: "Grzegorz",
            surname: "Brzęczyszczykiewicz",
            review: "To wcale nie takie trudne!"
        },
    ];

    // simulation of delay of getting from DB
    await new Promise(r => setTimeout(r, 1000));

    return obj;
}

onMounted(async () => {
    const reviewsResponse = await mockUpResponse();
    
    reviews.value = reviewsResponse;
});


</script>

<template>
    <section class="reviews-section section-padding" id="section_4">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12 col-12 text-center mb-5">
                            <h6>Reviews</h6>

                            <h2>What people saying...</h2>
                        </div>

                        <div class="col-lg-4 col-12" v-for="review in reviews">
                            <div class="custom-block d-flex flex-wrap">
                                <div class="custom-block-image-wrap d-flex flex-column">
                                    <img src="../assets/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg" class="img-fluid avatar-image" alt="">

                                    <div class="text-center mt-3">
                                        <span class="text-white">{{review.name}}</span>

                                        <strong class="d-block text-white">{{review.surname}}</strong>
                                    </div>
                                </div>

                                <div class="custom-block-info">
                                    <div class="reviews-group mb-3">
                                        <strong>4.5</strong>

                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star"></i>
                                    </div>

                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>                   
                    </div>
                </div>
            </section>
</template>