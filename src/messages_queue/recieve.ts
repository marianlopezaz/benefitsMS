#!/usr/bin/env node

import { getBenefitByCode } from "../controllers/benefit_controller";

var amqp = require("amqplib/callback_api");

export const initListenner = () => {
  
amqp.connect("amqp://localhost", function (error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }
      let exchange = "sell_flow";
      let topic = "order_placed";
  
      channel.assertExchange(exchange, "topic", {
        durable: false,
      });
  
      channel.assertQueue(
        "",
        {
          exclusive: true,
        },
        function (error2, q) {
          if (error2) {
            throw error2;
          }
          console.log(`[*] Waiting for logs on port ${process.env.PORT}. To exit press CTRL+C`);
  
          channel.bindQueue("", exchange, topic);
  
          channel.consume(
            "",
            function (msg) {
              console.log(JSON.stringify(msg))
              const data = JSON.parse(msg.content.toString());
              console.log(data);
               if (!!data.message.discountCode) {
                getBenefitByCode(data.message);
              }
            }, 
            {
              noAck: true,
            }
          );
        }
      );
    });
  }); 
  
};

