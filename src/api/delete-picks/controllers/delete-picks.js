"use strict";

/**
 * A set of functions called "actions" for `delete-picks`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      const queryObj = ctx.query;
      console.log(queryObj);
      console.log(ctx.request.query);
      console.log(ctx.params);
      ctx.body = await strapi.db.query("api::pick.pick").count({
        where: {
          id: {
            $in: queryObj,
          },
        },
      });
    } catch (err) {
      ctx.body = err;
    }
  },
};
