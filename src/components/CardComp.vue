<template>
 <router-link :to="{ name: 'product', params: { id: product.id } }">
    <img :src="product.image" :alt="image.name">
<h3>
    {{product.name}}
</h3>
<p>Descrition:{{product.desc}}</p>
<p>Price: R {{product.price}}</p>
<p>Category: {{product.category}}</p>

</router-link>
</template>

<script>
export default {
    props: ["products"]
}
</script>

<style>
    
</style>
    
 