<template>
   <nav class="navbar">
   <router-link to="/" class="nav">Home</router-link>
   <router-link to="/about" class="nav">About</router-link>
   <router-link to="/products" class="nav">Products</router-link>
   <router-link to="/" class="nav">Contact</router-link>

</nav>
</template>
<script>
export default {
    
}
</script>
<style scoped>

.navbar{
background-color: burlywood;
overflow: hidden;
}

.nav {
float: left;
text-align: center;
padding: 12px 10px;
text-decoration: none;
font-size: 17px;
color: brown;   
}

.nav:hover{
   background-color: antiquewhite;
   border-radius: 10px;
}
</style>