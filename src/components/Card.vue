<!-- Card.vue -->
<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
  },
};
</script>

<style scoped>
.card {
  flex: 1;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-right: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.card p {
  font-size: 14px;
  color: #555;
}
</style>
