<template>
  <!-- header section strats -->
  <header class="header_section">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <a class="navbar-brand" href="index.html">
          <span> {{ $t("tlogo") }} </span>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class=""> </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <!-- 9.delete active,  default active router.path-->
            <li class="nav-item" :class="{ active: $route.path == '/' }">
              <!-- 8.change from a href to router-link -->
              <router-link to="/" class="nav-link"
                >{{ $t("home") }}
                <span class="sr-only">(current)</span></router-link
              >
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/courses' }">
              <!-- 7.change from a href to router-link -->
              <router-link to="/courses" class="nav-link"> {{ $t("courses") }}</router-link>
            </li>
            <li
              class="nav-item"
              :class="{ active: $route.path == '/register' }"
            >
              <!-- 7.change from a href to router-link -->
              <router-link to="/register" class="nav-link">
                {{ $t("rigister") }}</router-link
              >
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/about' }">
              <!-- 7.change from a href to router-link -->
              <router-link to="/about" class="nav-link"> {{ $t("about") }}</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/service' }">
              <router-link to="/service" class="nav-link">{{ $t("service") }}</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/why' }">
              <router-link to="/why" class="nav-link">{{ $t("why") }}</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/team' }">
              <router-link to="/team" class="nav-link">{{ $t("team") }}</router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/repos"
                :class="{ active: $route.path == '/repos' }"
                >{{ $t("repos") }}</router-link
              >
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-user" aria-hidden="true"></i> {{ $t("login") }}</a
              >
            </li>
            
            <li>
              <button @click="changeLng" class="bg-danger"><i class="fa fa-flag" aria-hidden="true"></i> {{ $t("lang") }}</button>
            </li>


            <form class="form-inline">
              <button class="btn my-2 my-sm-0 nav_search-btn" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  <!-- end header section -->
</template>


<script>
export default {
  name: "App",
  methods: {
    changeLng() {
      console.log(this.$i18n.locale);
      if (this.$i18n.locale == "en") {
        this.$i18n.locale = "khm";
      } else {
        this.$i18n.locale = "en";
      }
    },
  },
};
</script>