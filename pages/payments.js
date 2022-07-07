import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import Image from "next/image";
// const fs = require("fs");

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const PaymentsPage = () => {
  const router = useRouter();
  const { success, canceled } = router.query;

  useEffect(() => {
    if (success !== undefined || canceled !== undefined) {
      if (success) {
        alert("Payment Succesful! You will receive an email confirmation.");
        // console.log("Order placed! You will receive an email confirmation.");
      }

      if (canceled) {
        console.log(
          "Order canceled -- continue to shop around and checkout when you’re ready."
        );
      }
    }
  }, [success, canceled]);

  return (
    <form action="/api/checkout_sessions" method="POST">
      <section>
        <div>
          <Image
            className="image"
            src="https://stripe-camo.global.ssl.fastly.net/a0acdb0df02b608df537d80ba6b94b0f788a07fe9e5efa6b2ae7e65f9c17b215/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a6446387854456332624735475556424862587079626a563066475a735833526c63335266656b4a72543370764d555645556a4e345531424d4d5456304d454e4d55316c4330304749536d3948356a"
            alt="Scenario 22"
            width={150}
            height={150}
          />
          <div className="description">
            <h3 className="heading">GGV VISA</h3>
            <h5 className="price">$1.99</h5>
          </div>
        </div>
        <button type="submit" role="link">
          Checkout
        </button>
      </section>
      <style jsx>
        {`
          .description {
            float: right;
            margin-left: 10px;
          }
          .image {
            float: left;
          }
          .heading {
            font-size: 28px;
            font-weight: 200;
          }
          .price {
            font-size: 18px;
            font-weight: bold;
          }
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 450px;
            height: 112px;
            border-radius: 6px;
            justify-content: space-between;
          }
          button {
            height: 45px;
            padding: 10px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </form>
  );
};

export default PaymentsPage;
