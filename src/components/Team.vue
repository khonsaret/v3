<template>
      <!-- team section -->
  <section class="team_section layout_padding">
    <div class="container-fluid">
      <div class="heading_container heading_center">
        <h2 class="">
          Our <span> Team</span>
        </h2>
      </div>

      <div class="team_container">
        <div class="row">
          <TeamCard v-for="(item,index) in members" :key="index" :name="item.name" :positon="item.positon" :image="item.image" :url="item.nameurl
          "></TeamCard>
        </div>
      </div>
    </div>
  </section>
  <!-- end team section -->
</template>
<script>
import TeamCard from '@/components/card/TeamCard.vue';
export default {
  components:{TeamCard},
  data(){
    return{
      members:[
        {name:"Joseph Brown", nameurl:"Joseph-Brown", Position:" Marketing Head", image:"images/team-2.jpg"},
        {name:"Set Dara", nameurl:"Set-Dara", Position:" Marketing Head", image:"images/team-2.jpg"},
        {name:"Brown Dok", nameurl:"Brown-Dok", Position:" Marketing Head", image:"images/team-2.jpg"},
        {name:"Nar Dory", nameurl:"Nar-Dory", Position:" Marketing Head", image:"images/team-2.jpg"},
      ]
    }
  }
}
</script>