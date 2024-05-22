import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

global.ResizeObserver = require("resize-observer-polyfill");

test("displays foo", () => {
  const wrapper = mount(
    {
      template: "<v-app>foo</v-app>",
    },
    {
      global: {
        plugins: [vuetify],
      },
    }
  );

  expect(wrapper.text()).toContain("foo");
});

test("displays foo with a v-main", () => {
  const wrapper = mount(
    {
      template: "<v-app>foo<v-main></v-main></v-app>",
    },
    {
      global: {
        plugins: [vuetify],
      },
    }
  );

  expect(wrapper.text()).toContain("foo");
});
