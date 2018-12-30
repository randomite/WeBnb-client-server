import store from './redux/store';

const app = require("express")();
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

app.use(require("body-parser").text());

const amount = store.getState().booking.room.price;

app.post("/charge?amount=${amount}", async (req, res) => {
    try {
      let {status} = await stripe.charges.create({
        amount: amount,
        currency: "usd",
        description: "An example charge",
        source: req.body
      });
  
      res.json({status});
    } catch (err) {
      res.status(500).end();
    }
  });
