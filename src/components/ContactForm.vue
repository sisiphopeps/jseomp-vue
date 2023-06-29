<template>
    <div class="form">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name">{{name}} <br/>
        <label for="surname">Surname</label>
        <input type="text" id="surname" v-model="surname">{{surname}}<br/>
        <label for="message">Message</label>
        <input type="text" v-model="message" class="message"><br>
        <button type="submit">Submit</button>
    </div>
</template> 
<script>
export default {
    data() {
        return {
            name: '',surname: '',message:'',
        }
    }
}
</script>
<style >
   .form {
  max-width: 400px;
  margin: 0 auto;
}

.label {
  font-weight: bold;
}

.input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #45A049;
}
</style>