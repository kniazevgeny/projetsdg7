<template lang="pug">
  nav
    v-app-bar(flat app, color="transparent", height="52px")
      // Title
      v-toolbar-title.text-uppercase.grey--text
      v-spacer
      // Language picker
      v-menu(offset-y)
        template(v-slot:activator='{ on }')
          v-btn(outlined small dark v-on='on') {{currentLocale.icon}}
        v-list
          v-list-item(v-for='locale in locales' @click='changeLanguage(locale.code)' :key="locale.code")
            v-list-item-title {{locale.icon}}
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import * as store from "../plugins/store";
import { i18n } from "../plugins/i18n";

@Component
export default class Navbar extends Vue {
  get locales() {
    return [{ icon: "🇺🇸", code: "en" }, { icon: "🇷🇺", code: "ru" }, { icon: "🇫🇷", code: "fr" }];
  }
  get currentLocale() {
    for (const locale of this.locales) {
      if (locale.code === i18n.locale) {
        return locale;
      }
    }
  }

  toggleMode() {
    store.setDark(!store.dark());
    (this.$vuetify.theme as any).dark = store.dark();
  }
  changeLanguage(locale: string) {
    i18n.locale = locale;
    store.setLanguage(locale);
    document.title = i18n.t("Renouvelables") as string;
  }
}
</script>

<style>
nav a:link {
  text-decoration: none;
}

nav a:visited {
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

nav a:active {
  text-decoration: underline;
}
</style>

