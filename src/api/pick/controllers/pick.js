"use strict";

/**
 * pick controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::pick.pick");

module.exports = createCoreController("api::pick.pick", ({ strapi }) => ({
  async delete(ctx) {
    try {
      const recData = ctx.params.id;

      let tempArr = recData.split(",");
      let res = tempArr.map((v) => parseInt(v, 10));

      const data = await strapi.db.query("api::pick.pick").deleteMany({
        where: {
          id: res,
        },
      });
      ctx.body = data;
    } catch (err) {
      ctx.body = err;
    }
  },

  // async create(ctx) {
  //   try {
  //     const recData = ctx.request.body.data.picks;
  //     console.log(recData);

  //     // let tempArr = recData.split(",");
  //     // let res = tempArr.map((v) => parseInt(v, 10));

  //     const data = await strapi.db.query("api::pick.pick").createMany({
  //       data: recData,
  //     });
  //     ctx.body = data;
  //   } catch (err) {
  //     ctx.body = err;
  //   }
  // },
}));
