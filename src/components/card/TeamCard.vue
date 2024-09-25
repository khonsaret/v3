<template>
    <div class="col-lg-3 col-sm-6">
            <div class="box ">
              <div class="img-box">
                <img :src="image" class="img1" alt="">
              </div>
              <div class="detail-box">

                <router-link :to="`/team/${url}`">
                  {{name}}
                </router-link>
                <!-- use both -->
                <!-- <router-link :to="'team/' + url">
                  {{name}}
                </router-link> -->

                <p>
                  {{positon}}
                </p>
              </div>
              <div class="social_box">
                <a href="#">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
</template>
<script>
export default {
    props:["name","positon","image","url"]
}
</script>