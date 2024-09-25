<template>
    <!-- <p>{{ $route.params.id }}</p> -->
    <h1>{{ course.title }}</h1>
    <p>{{ course.shortDescription }}</p>
    <p>{{ course.price }}</p>
</template>
<script>
// import CourseCard from '@/components/card/CourseCard.vue';
import axios from 'axios';
export default {
    data(){
        return {
            course:"",
        }
    },
   async created(){
        try {
            const url = "/v1/courses/" + this.$route.params.id;
            const response = await axios.get(url);
            this.course = response.data;
        } catch (error) {
            console.log("error course")
        }
    }
}
</script>