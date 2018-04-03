<template>
  <div class="main-content" v-editable="blok">
    <div class="post-thumbnail" :style = "{backgroundImage: 'url('+ image +')'}"></div>
    <h1>{{ title }}</h1>
    <p> {{ content }}</p>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
    .get("cdn/stories/blog/" + context.params.postId, {
      version: process.env.NODE_ENV == "production" ? "published" : "draft"
    })
    .then(res => {
      console.log(res.data);
        return {
        blok: res.data.story.content,
        image: res.data.story.content.thumbnail,
        title: res.data.story.content.title,
        content: res.data.story.content.content
      };
    });
  },
  mounted() {
    this.$storyblok.init()
    this.$storyblok.on('change', () => {
      location.reload(true);
    });
  }
};
</script>

