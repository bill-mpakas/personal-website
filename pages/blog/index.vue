<template>
    <div class="main-content">
    <!-- <Post-preview
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :excerpt="post.previewText"
      :thumbnailImage="post.thumbnailUrl"
      :id="post.id" /> -->
      <h1>Writing Blogs Loading..</h1>
    </div>
</template>

<style lang="scss" scoped>
  $page_color: #625B7E;

  .main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    
    // grid-template-rows: repeat(minmax(200px,300px));

    @media screen and (max-width: 800px) {
       display: block;
      }
  }

  
</style>


<script>
import PostPreview from "@/components/Blog/PostPreview";
  export default {
    components: {
      PostPreview
    },
    asyncData(context) {
      return context.app.$storyapi
      .get("cdn/stories/", {
        version: context.isDev ?  "draft" : "published",
        starts_with: "blog/"
      })
      .then(res => {
        return {
          posts: res.data.stories.map(bp => {
          return {
            id: bp.slug,
            title: bp.content.title,
            previewText: bp.content.summary,
            thumbnailUrl: bp.content.thumbnail
          };
        })
        };
      });
    }
  };
</script>