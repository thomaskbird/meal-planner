<template>
  <div>
    <h1>Blog posts:</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <div class="post" v-for="(post, index) in posts" v-bind:key="post.id">
        <h3>{{ index }}: {{ post.title }}</h3>
        <p>{{ post.body }}</p>
        <router-link :to="{ name: 'blogPost', params: { postId: post.id }}">More...</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.post {
  margin: 0;
  padding: 40px 20px;
  text-align: left;
  border-bottom: 1px solid #eee;

  h3 {
    margin: 0;
    color: #333;
    font-weight: 900;
    text-transform: uppercase;
  }

  p {
    margin: 0;
  }
}
</style>

<script>
module.exports = {
  data: () => {
    return {
      isLoading: true,
      posts: []
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        this.posts = json;
        this.isLoading = false;
      });
  }
};
</script>
