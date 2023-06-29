<template >
    <div v-if="products" class="flex-container">
        <CardComp v-for="product of products" :key="product.id" :product="product" />
    </div>
    <div v-else>Loading..</div>
</template>
<script>
import CardComp from '@/components/CardComp.vue';
export default {
    computed: {
        products(){
            return this.$store.state.products
        }
    },

    mounted() {
        return this.$store.dispatch("getProducts")
    },
    components: { CardComp }



}
</script>
<style >
.flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    background-color: antiquewhite;
}</style>