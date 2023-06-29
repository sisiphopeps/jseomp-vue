<template >
    <button @click="sortPrice">Sort by Price</button>
    <input type="text" v-model="search" placeholder="Search...">
    <select v-model="area">
        <option value="All">All</option>
        <option value="Durban">Women</option>
        <option value="Pretoria">Men</option>
    </select>
    <div v-if="properties" class="flex-container">
        <CardComp v-for="product of products" :key="product.id" :product="product" />
    </div>
    <div v-else>Loading..</div>
</template>
<script>
import CardComp from '../components/CardComp.vue';
export default {
    data() {
        return {
            search: "",
            category: "All"
        }
    },
    methods: {

        sortPrice() {
            this.$store.commit("sortPropertiesByPrice")
        }

    },
    computed: {
        properties() {
            return this.$store.state.product?.filter((product) => {
                let isMatch = true;
                if (this.category !== "All" && this.category !== product.category) {
                    isMatch = false
                }
                return isMatch
            })
        }

    },
    mounted() {
        this.$store.dispatch("getProducts")
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