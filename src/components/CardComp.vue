<template>
 <router-link :to="{name: 'product', params: {id: product.id}}">
    <img :src="product.image" :alt="product.name">
<h3>
    {{product.name}}
</h3>
<p>Description:{{product.desc}}</p>
<p>Price: R {{product.price}}</p>
<p>Category: {{product.category}}</p>
<button @click="addtocart" class="btn">Add to Cart</button>

</router-link>
</template>

<script>
export default {
    props: ["product"]
}
</script>

<style>
    .btn{
        background-color: blueviolet;
        border-radius: 5px;
        font-weight: bold;
    }
</style>
    
 