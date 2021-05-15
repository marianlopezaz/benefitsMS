import { IBenefit } from "../interfaces/benefit";

var amqp = require("amqplib/callback_api");

const createMessage = (benefit: IBenefit): Buffer => {
  let msg = benefit
    ? {
        message: {
          valid: true,
          status: benefit.status,
          discountAmount: benefit.discountAmount,
          limit: benefit.limit,
          code: benefit.code,
          orderId: benefit.orderId,
        },
        type: "benefit-data",
      }
    : {
        message: { valid: false, benefit: null },
        type: "benefit-data",
      };

  return Buffer.from(JSON.stringify(msg));
};
export const sendToQueueController = (benefit) => {
  amqp.connect("amqp://localhost", function (error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }

      let exchange = "order";
      let queue = "order";

      let msg = createMessage(benefit);

      channel.assertExchange(exchange, "direct", {
        durable: false,
      });

      channel.publish(exchange, queue, Buffer.from(msg));
      console.log(" [x] Sent %s", msg);
    });
  });
};
