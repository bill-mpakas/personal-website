<template>
  <div class="main-content">
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
      version: "draft"
    })
    .then(res => {
        return {
        image: res.data.story.content.thumbnail,
        title: res.data.story.content.title,
        content: res.data.story.content.content
      };
    });
  }
};
</script>

