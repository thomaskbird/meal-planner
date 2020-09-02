<template>
  <div class="about" v-if="!isLoading">
    <h1>{{ postTitle }}</h1>

    <p class="red">
      {{ postContent }}
    </p>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<style lang="scss">
.red {
  color: red;
}
</style>

<script>
module.exports = {
  data: () => {
    return {
      postTitle: "",
      postContent: "",
      isLoading: true
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => {
        this.postTitle = data.title;
        this.postContent = data.body;
        this.isLoading = false;
      });
  }
};
</script>
