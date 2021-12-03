import { createSpaConfig } from "@open-wc/building-rollup";
import merge from "deepmerge";

const baseConfig = createSpaConfig({
  developmentMode: process.env.ROLLUP_WATCH === "true",
  injectServiceWorker: false,
});

export default merge(baseConfig, {
  // any <script type="module"> inside will be bundled by rollup
  input: "./index.html",
});
