<template>
  <div id="app">
    <header class="header">
      <nav class="inner" role="navigation">
        <nuxt-link to="/" exact>
          <img class="logo" src="~assets/logo.png" alt="logo">
        </nuxt-link>
        <nuxt-link v-for="(list, key) in feeds" :key="key" :to="`/${key}`">{{ list.title }}</nuxt-link>
        <a
          class="github"
          href="https://github.com/nuxt-community/hackernews-nuxt-ts"
          target="_blank"
          rel="noopener banner"
        >Built with Nuxt.js using TypeScript</a>
      </nav>
    </header>
    <nuxt nuxt-child-key="none" role="main"/>
  </div>
</template>

<script  lang="ts">
import { Component, Vue } from "vue-property-decorator"

import { feeds } from "~/common/api"
import { NuxtPageHeadLink } from "~/lib/models"

@Component
export default class Layout extends Vue {
  head(): { link: NuxtPageHeadLink[] } {
    // hack `(process as any)` to wait till this is fixed in Nuxt
    const host = process.server
      ? this.$ssrContext.req.headers.host
      : window.location.host

    return {
      link: [
        // We use $route.path since we don't use query parameters
        { rel: "canonical", href: `https://${host}${this.$route.path}` }
      ]
    }
  }

  get feeds() {
    return feeds
  }
}
</script>

<style lang="stylus">
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  background-color: lighten(#eceef1, 30%);
  margin: 0;
  padding: 0;
  color: #34495e;
  overflow-y: scroll;
}

a {
  color: #34495e;
  text-decoration: none;
}

.header {
  background-color: #188269;
  z-index: 999;
  height: 55px;

  .inner {
    max-width: 800px;
    box-sizing: border-box;
    margin: 0px auto;
    padding: 15px 5px;
  }

  a {
    color: #fff;
    line-height: 24px;
    transition: color 0.15s ease;
    display: inline-block;
    vertical-align: middle;
    font-weight: 300;
    letter-spacing: 0.075em;
    margin-right: 1.8em;

    &:hover {
      color: #fff;
    }

    &.nuxt-link-active, &.nuxt-link-active {
      text-decoration: underline solid #fff;
      font-weight: 400;
    }

    &:nth-child(6) {
      margin-right: 0;
    }
  }

  .github {
    color: #fff;
    font-size: 0.9em;
    margin: 0;
    float: right;
  }
}

.logo {
  width: 24px;
  margin-right: 10px;
  display: inline-block;
  vertical-align: middle;
}

.view {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.appear-active {
  transition: opacity 0.4s ease;
}

.page-enter-active, .page-leave-active {
  transition: all 0.2s ease;
}

.appear, .page-enter, .page-leave-active {
  opacity: 0;
}

@media (max-width: 860px) {
  .header .inner {
    padding: 15px 30px;
  }
}

@media (max-width: 600px) {
  .header {
    .inner {
      padding: 15px;
    }

    a {
      margin-right: 1em;
    }

    .github {
      display: none;
    }
  }
}
</style>
