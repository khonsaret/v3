<template>
  <div class="sub_page">
        <div class="hero_area">
             <Header></Header>
         </div>
        <!-- <About></About>
        <Footer></Footer> -->

        <!-- //delete About & Footer -->
        <router-view></router-view>
    </div>
    <Footer></Footer>
    
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
  export default{
    components:{
      Header,
      Footer,
    }
  }
</script>

<!-- 6.when add router-view delete all below-->
<!-- <script>
import About from '@/pages/About.vue';
export default {
  components:{
    About,
  }
  
}
</script> -->