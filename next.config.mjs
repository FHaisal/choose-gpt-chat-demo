import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "service-workers/index.js",
  swDest: "public/sw.js",
});

export default withSerwist({});