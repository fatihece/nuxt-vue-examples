<template>
  <v-container fluid>
    <v-row class="black">
      <v-col cols="12" class="mt-12 mb-n5">
        <h3 class="white--text text-center title">Peach Success Stories</h3>
      </v-col>
      <v-col
        v-for="(story, i) in successStories"
        :key="i"
        cols="12"
        md="6"
        lg="4"
        class="mt-8"
      >
        <div class="success-stories__item">
          <img :src="story.image" alt="story.name" />
          <h5 class="white--text">{{ story.name }}</h5>
          <h6 class="white--text">{{ story.collection }}</h6>
          <p class="white--text">
            {{ story.story }}
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    successStories: [
      {
        name: 'John D.',
        collection: 'A Team',
        story:
          'What a great experience and beautiful finished product. The process was seamless from start to finish. The designer who came to my house was great. She sat down with me and showed me a diagram of what I would get with pricing within my budget including all the options available. A very professional company all around. I love my new closets! Would highly recommend your company....thank you!"',
        image: 'images/testimonials/story1.jpg',
      },
      {
        name: 'Emily S.',
        collection: 'B Team',
        story:
          "The vision I had in mind of my dream closet became a reality because of Peach's incredible design skill and creativity. Every member of the your company team was attentive, professional, and polite. My wardrobe has never been organized so glamorously before!",
        image: 'images/testimonials/story2.jpg',
      },
      {
        name: 'Chris M.',
        collection: 'C Team',
        story:
          '"We were super impressed by your company. Neil is professional, knowledgeable, creative and did an excellent job listening to, and understanding, our needs and desires. The time has come to give our wardrobe the "home" that they deserve!"xs',
        image: 'images/testimonials/story3.jpg',
      },
    ],
  }),
}
</script>

<style scoped>
.success-stories__item {
  width: 100%;
  max-width: 400px;
  margin: 0 auto 40px;
}
.success-stories__item img {
  display: block;
  border-radius: 100%;
  margin: 0 auto;
  width: 215px;
  height: 215px;
  object-fit: cover;
}
.success-stories__item h5 {
  font-family: 'Playfair Display', serif;
  font-size: 32px;
}
.success-stories__item h6 {
  font-family: 'Great Vibes', serif;
  font-size: 1.75rem;
}

.title {
  font-family: 'Great Vibes', serif !important;
  font-size: 56px !important;
}
</style>
