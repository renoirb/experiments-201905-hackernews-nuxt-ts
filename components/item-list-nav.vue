<template>
  <div class="news-list-nav">
    <nuxt-link v-if="page > 1" :to="`/${feed}/${page - 1}`">&lt; prev</nuxt-link>
    <a v-else class="disabled">&lt; prev</a>
    <span>{{ page }}/{{ maxPage }}</span>
    <nuxt-link v-if="hasMore" :to="`/${feed}/${page + 1}`">more &gt;</nuxt-link>
    <a v-else class="disabled">more &gt;</a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

@Component
export default class ItemListNav extends Vue {
  @Prop({ type: String, required: true })
  feed!: string

  @Prop({ type: Number, required: true })
  page!: number

  @Prop({ type: Number, required: true })
  maxPage!: number

  get hasMore() {
    return this.page < this.maxPage
  }
}
</script>

<style lang="stylus">
.news-list-nav, .news-list {
  background-color: #fff;
  border-radius: 2px;
}

.news-list-nav {
  padding: 15px 30px;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  a {
    margin: 0 1em;
  }

  .disabled {
    opacity: 0.8;
  }
}
</style>
