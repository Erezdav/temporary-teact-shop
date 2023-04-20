require("dotenv").config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET);

exports.handler = async function (event, contex) {
  if (event.body) {
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body);
    const calaculateOrderAmount = () => {
      return shipping_fee + total_amount;
    };

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calaculateOrderAmount(),
        currency: "usd",
        payment_method_types: ["card"],
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      console.log(error.response);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  }
};
