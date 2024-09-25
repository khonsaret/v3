<template>
          <!-- team section -->
  <section class="team_section layout_padding">
    <div class="container-fluid">
      <div class="heading_container heading_center">
        <h2 class="">
          Our <span> Course</span>
        </h2>
      </div>

      <div class="team_container">
        <div class="row">
            <CourseCard v-for="(course,index) in courses" :key="index" :title="course.title" :price="course.price" :short-description="course.shortDescription" :url="course.titleURL"></CourseCard>
        </div>
      </div>
    </div>
  </section>
  <!-- end team section -->
   
</template>
<script>
import CourseCard from '@/components/card/CourseCard.vue';
import axios from 'axios';
export default {
    components:{
        CourseCard,
    },
    data(){
        return {
            courses:[],
        }
    },
   async created(){
        try {
          const response = await axios.get('/v1/courses/');
          // const response = await axios.get('/data-connection-count');
          const courses=response.data;
          // console.log(courses);
          this.courses = courses;
        } catch (error) {
          console.log("error coure api")
        }
    }
}
</script>