module.exports = {
  routes: [
    {
      method: "DELETE",
      path: "/picks",
      handler: "pick.delete",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    // {
    //   method: "POST",
    //   path: "/picks",
    //   handler: "pick.create",
    //   config: {
    //     auth: false,
    //     policies: [],
    //     middlewares: [],
    //   },
    // },
  ],
};
