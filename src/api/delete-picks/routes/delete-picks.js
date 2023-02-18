module.exports = {
  routes: [
    {
      method: "POST",
      path: "/delete_picks",
      handler: "delete-picks.exampleAction",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
