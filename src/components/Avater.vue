<template>
  <div>
    <ul class="ui-avatar">
      <li v-for="name in names" :key="name">
        <img :src="generateAvatarURL(name)" alt="Avatar" class="img-avatar" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: ["1", "2", "3"]
    };
  },
  methods: {
    generateAvatarURL(name) {
      return `https://www.hdwallpaper.nu/wp-content/uploads/2015/06/1843513.jpg`;
    }
  }
};
</script>

<style>
.img-avatar {
  width: 50px; 
  height: 50px; 
  border-radius: 50%;
  border: 3px solid #fff;
}



.ui-avatar {
  display: flex !important;
}

li {
  margin-right: -1.5em;
  /* z-index: 1; */
  list-style-type: none;
}
</style>
