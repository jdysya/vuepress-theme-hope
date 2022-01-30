import { useLocaleConfig } from "@mr-hope/vuepress-shared/lib/client";
import { defineComponent, h } from "vue";
import { articleInfoLocales } from "../define";

import type { VNode } from "vue";

export default defineComponent({
  name: "OriginalMark",

  props: {
    original: { type: Boolean, default: false },
  },

  setup(props) {
    const pageInfoLocale = useLocaleConfig(articleInfoLocales);

    return (): VNode | null =>
      props.original
        ? h("span", { class: "origin" }, pageInfoLocale.value.origin)
        : null;
  },
});
