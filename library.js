/* ======================================================================== */
/* Copyright (c) 2020 Jungebluth Consulting                                 */
/* ------------------------------------------------------------------------ */
/* Historie : xx.xx.xxxx (Erstellung)                                       */
/*                                                                          */
/* Azure DevOps                                                             */
/* ------------                                                             */
/* ======================================================================== */

// PayPal
// https://developer.paypal.com/docs/checkout/integrate/#1-set-up-your-development-environment
// https://github.com/paypal/paypal-checkout-components/blob/master/demo/card.htm <---
// https://github.com/aspnet/SignalR/issues/1268 <---
// https://docs.mollie.com/reference/v2/payments-api/create-payment
// https://forum.shopware.com/discussion/64967/paypal-fehler-invalid-currency-amount-format

// App display name: BoubahnThaiMassage
// Sandbox account: sb-g14ou2186203@personal.example.com
// Client ID: AeYZ1HubHOWchLzchOwbKg0m35ru14C98f0S3CMAlPLZGQKLzWYrTqXHNr4pM-G5afrzGIoaWC87Xm1c
// Passwort: wie bekannt ;-)

// PayPal account: bourin.haeuser@gmx.de
// Client ID: AWmUKhxiPl8bVqHCUc-HKy-o0zLFiKMoIURzosnZgKNlaA8xDlxHKvYPjBqzSRRhDFcUqJfBOG_3bcHF
// Passwort: wie bekannt ;-)

function BestellenViaPayPal(str_name, str_description, str_quantity, str_price, str_info) {
    //
    // paypal.Button
    //
    try
    {
        // alert("Gesamtkosten=" + str_info[0] + " SummeWarenkorb=" + str_info[2] + " Versandkosten=" + str_info[1]);

        paypal.Button.render({
            // https://developer.paypal.com/docs/checkout/reference/customize-sdk/#
            // Customize the PayPal JavaScript SDK Script

            // https://developer.paypal.com/docs/checkout/integration-features/standalone-buttons/#
            // Standalone Buttons

            // https://developer.paypal.com/docs/integration/direct/express-checkout/integration-jsv4/customize-button/#button-styles
            // Customize the PayPal button

            env: 'production', // 'production' or 'sandbox'

            //
            // client-id - Required.
            //             Your PayPal REST client ID.This identifies your PayPal account,
            //             and determines where any transactions are paid to.While you're
            //             testing in sandbox, you can use client- id=sb as a shortcut.
            //

            client: {
                sandbox: 'AeYZ1HubHOWchLzchOwbKg0m35ru14C98f0S3CMAlPLZGQKLzWYrTqXHNr4pM-G5afrzGIoaWC87Xm1c',
                production: 'AWmUKhxiPl8bVqHCUc-HKy-o0zLFiKMoIURzosnZgKNlaA8xDlxHKvYPjBqzSRRhDFcUqJfBOG_3bcHF'
            },

            //
            // merchant-id - The merchant for whom you are facilitating a transaction.
            //

            //
            // currency - The currency of the transaction or subscription plan.
            //

            currency: 'EUR',

            //
            // intent - The intent of the PayPal order. Determines whether the funds
            //          are captured after the buyer checks out, or if the buyer
            //          authorizes the funds to be captured later.Not applicable
            //          for subscriptions.
            //

            intent: 'capture',

            //
            // commit - Set to true if the transaction is Pay Now, or false if the
            //          amount captured changes after the buyer returns to your
            //          site.Not applicable for subscriptions.
            //

            commit: true,

            //
            // vault - Set to true if the transaction sets up a billing agreement
            //         or subscription.
            //

            vault: false,

            //
            // components - A comma-separated list of components to enable.
            //              Defaults to allow Smart Payment Buttons. Other
            //              components are optional.
            // buttons -    Load the Smart Payment Buttons component in the script
            //              to use with the main integration.
            // marks -      Load the Marks component in the script to use with the
            //              Radio Buttons integration.
            //

            components: 'buttons',

            //
            // disable-funding - Funding sources to disallow from showing in the
            //                   Smart Payment Buttons.
            //

            //
            // disable-card - Cards to disable from showing in the Smart
            //                Payment Buttons.
            //

            //
            // integration-date - The date of integration. Used to ensure
            //                    backwards compatibility.
            //

            //
            // debug - Enable debug mode for ease of debugging. Do not enable
            //         for production traffic.
            //

            //
            // buyer-country - The buyer country. For testing purposes only.
            //

            //
            // locale - The locale used to localize any components. PayPal
            //          recommends not setting this parameter, as the buyer's
            //          locale is automatically set by PayPal.
            //

            locale: 'de_DE',

            style: {
                branding: true, // optional

                //
                // Funding methods - When multiple funding sources are available
                //                   to the buyer, PayPal automatically
                //                   determines which additional buttons are
                //                   appropriate to display.However, you can
                //                   choose to opt-in or out- of displaying
                //                   specific funding sources in either the
                //                   horizontal or vertical layout. Set the
                //                   funding parameter to one of these values:
                //
                //                   allowed - Displays the specified funding
                //                   methods, if the buyer is eligible.
                //
                //                   disallowed - Hides the specified funding
                //                   methods.
                //

                funding: 'disallowed',

                //
                // layout - The style.layout parameter determines if the
                //          buttons are stacked horizontally or vertically.
                //

                layout: 'vertical',

                //
                // Size - Set the style.size parameter to one of these values:
                //        small - 150 pixels by 25 pixels Recommended
                //        Default is small.
                //
                //        medium 250 pixels by 35 pixels Use to match the size
                //        of other medium buttons on the page.
                //
                //        large	350 pixels by 40 pixels	Use to match the size
                //        of other large buttons on the page.
                //
                //        responsive Dynamic Matches the width of the container
                //        element, height is decided dynamically based on width.
                //        Minimum width is 150px, maximum width is 500px.
                //

                size: 'large',

                //
                // Shape - Set the style.shape parameter to one of these values:
                //         pill Recommended - Whenever possible, use the pill-
                //         shaped button. Its unique and powerful shape signifies
                //         PayPal in people’s minds.
                //
                //         rect - Use the rectangular button as an alternative
                //         for media such as mobile where pill- shaped buttons
                //         might pose design challenges.
                //

                shape: 'pill',

                //
                // color - Description
                //         gold	Recommended - People around the world know us
                //         for the color gold and research confirms it.Extensive
                //         testing determined just the right shade and shape that
                //         help increase conversion.Use it on your website to
                //         leverage PayPal’s recognition and preference.
                //
                //         blue	First alternate - If gold is not an option for
                //         your site, try the PayPal blue button.Research shows
                //         that people know it is our brand color, which provides
                //         a halo of trust and security to your experience.
                //
                //         silver Second alternate - If gold or blue do not work
                //         for your site design or aesthetic, try the silver
                //         button.Because this color is a bit recessive and less
                //         capable of drawing people’s attention, we recommend
                //         this button color as a second alternative.
                //
                //         black Third alternate - If your website demands a
                //         monochromatic button experience, try the black
                //         button. Because black is a common website color and
                //         less capable of drawing people's attention, we
                //         recommend this button as a third alternative.
                //

                color: 'gold',

                //
                // Label - Set the style.label parameter to one of these values:
                //         checkout	- The PayPal Checkout button. The default button.
                //
                //         credit - The PayPal Credit button.Initializes the credit
                //         flow.Cannot be used with any custom color option.
                //         (UK merchants) Credit is a regulated activity in the UK.
                //         Before integrating a PayPal Credit button, you must be
                //         authorized to act as a credit broker and have a credit
                //         agreement with PayPal.For more information, contact
                //         business customer support through paypal.com or by
                //         calling 0800 358 7929.
                //
                //         pay - The Pay With PayPal button. Initializes the
                //         checkout flow.
                //
                //         buynow - The Buy Now button.Initializes the checkout
                //         flow.The default Buy Now button is unbranded. To
                //         include PayPal branding, set branding: true.
                //
                //         paypal - The generic PayPal button. Initializes the
                //         checkout flow.This button contains only the PayPal
                //         brand logo.
                //

                label: 'checkout'
            },

            payment: function (data, actions) {

                var env = this.props.env;
                var client = this.props.client;

                return actions.payment.create({
                    transactions: [
                        {
                            amount: { total: str_info[0], currency: 'EUR' },
                            "item_list": {
                                "items": [
                                    {
                                        "name": str_info[3],
                                        "description": "",
                                        "quantity": "1",
                                        "price": str_info[2],
                                        "sku": "1",
                                        "currency": "EUR"
                                    },

                                    {
                                        "name": "Versandkosten",
                                        "description": "",
                                        "quantity": "1",
                                        "price": str_info[1],
                                        "sku": "1",
                                        "currency": "EUR"
                                    }
                                ],
                                /*,
                                "shipping_address": {
                                    recipient_name: "Brian Robinson",
                                    state: "CA",
                                    line1: "2702394 Calista Court",
                                    city: "San Jose",
                                    postal_code: "95111",
                                    country_code: "US"
                                }*/
                            }
                        },
                    ],
                    /*
                    payer: {
                        payer_info: {
                            email: 'khang.hoang12123123123213@pp.com',
                            first_name: "khang",
                            last_name: "hoang",
                            billing_address: {
                                state: "CA",
                                line1: "2702394 Calista Court",
                                city: "San Jose",
                                postal_code: "95111",
                                country_code: "US"
                            }
                        }
                    },
                    */
                });
            },

            onAuthorize: function (data, actions) {

                console.log(data, actions);
                actions.payment.execute().then(function (data) {
                    window.location = "BestellungErfolgreich";
                });
            },

            onError: function (err) {
                alert(err);
                window.location = "BestellungNichtErfolgreich";
            }
        }, '#paypal-button-container');
    }
    catch (err)
    {
        alert(err);
        window.location = "BestellungNichtErfolgreich";
    }

    return 0;
}

/* ------------------------------------------------------------------------ */
/* Ende der Datei                                                           */
/* ------------------------------------------------------------------------ */