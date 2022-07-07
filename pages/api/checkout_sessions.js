const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const sgMail = require("@sendgrid/mail");
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const message = {
        to: "zcaptain65@gmail.com",
        from: "zcaptain2002@gmail.com",
        // subject: "Scenario 44",
        // text: "Lift and coast where possible",
        templateId: "d-f408be01db99489cbd757d4607cf23f2",
        dynamicTemplateData: {
          subject: "GGV Test Email",
        },
        // html: "<h1>Success</h1> <p>We received your purchase request;<br/> we'll be in touch shortly!</p>",
      };

      sgMail
        .send(message)
        .then((response) => console.log("Email Sent"))
        .catch((error) => console.log(error.message));
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: "price_1LG6qaFQPGmzrn5tDKjmnos3",
            quantity: 1,
          },
        ],
        mode: "payment",

        success_url: `${req.headers.origin}/payments/?success=true`,
        cancel_url: `${req.headers.origin}/payments/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
