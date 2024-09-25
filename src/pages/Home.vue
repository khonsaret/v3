<template>
    <Hero></Hero>
    <Service></Service>
    <About></About>
    <Why></Why>
    <Team></Team>
    <Info></Info>
  </template>
  
  <script>
  import Hero from "@/components/Hero.vue";
  import Service from "@/components/Service.vue";
  import About from "@/components/About.vue";
  import Why from "@/components/Why.vue";
  import Team from "@/components/Team.vue";
  import Info from "@/components/Info.vue";
    export default{
      components:{
        Hero,
        Service,
        About,
        Why,
        Team,
        Info,
      }
    }
  </script>