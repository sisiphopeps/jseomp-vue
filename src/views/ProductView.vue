<template>
    <div v-if="product" class="product-details">
        <img :src="product.image" :alt="product.name" />
        <div>
            <h2>{{ product.name }}</h2>
           <p>Description:{{product.desc}}</p>
           <p>Price: R {{product.price}}</p>
           <p>Category: {{product.category}}</p>
        </div>
    </div>
</template>
  
<script>
export default {
    props: ["id"],
    computed: {
        product() {
            return this.$store.state.product;
        },
    },
    mounted() {
        this.$store.dispatch("getProduct", this.id);
    },
};
</script>
  
<style>
.product-details {
    display: flex;
}
</style>
   