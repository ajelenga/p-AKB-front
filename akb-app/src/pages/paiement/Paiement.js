import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { BsFillLockFill } from "react-icons/bs";

const initialOptions = {
    "client-id": "Ae_o9BeKYOvj8nYh44pPN9doA28QLwbqw0H31daNfjKSgqVKf9doV4Mh5SXg_JxhWZIGvADgnxQwjtRE",
    currency: "EUR",
    intent: "capture",
    
};
function Paiement() {

  return (

    <section className="home">

      <div className="homepage">
        <div className="search_hero">
          <div className="container search_hero__content">
            <div className="search_hero__content__wrapper">
              <div className="search_hero__title">
                <div className="search_hero__title1">Paiement</div>
              </div>
              <p className="search_hero__subtitle">Paiement sécurisé </p>
              <div className="">
                <PayPalScriptProvider options={initialOptions}>
                  <PayPalButtons
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: "1.99",

                            },
                          },
                        ],
                      });
                    }}
                    onApprove={(data, actions) => {
                      return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                      });
                    }}
                  />
                </PayPalScriptProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
export default Paiement;