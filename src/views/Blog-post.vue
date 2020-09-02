<template>
  <div class="blog-post" v-if="!isLoading">
    <h1>{{ $route.params.postId }}: {{ postTitle }}</h1>

    <p class="red">
      {{ postContent }}
    </p>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

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
    const url = `https://jsonplaceholder.typicode.com/posts/${this.$route.params.postId}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.postTitle = data.title;
        this.postContent = data.body;
        this.isLoading = false;
      });
  }
};
</script>
