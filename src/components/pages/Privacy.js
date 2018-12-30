import React from "react";
import { withRouter } from "react-router-dom";
import Footer from "../ui/Footer";
import Header from "../ui/Header";

class Privacy extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="privacy">
          <body>
            <div className="body">
              <div className="title">
                <h1>WeBnb Privacy Policy</h1>
              </div>

              <p>Last Updated: October 1, 2018!</p>
              <p>Thank you for using WeBnb!</p>
              <p>
                This Privacy Policy describes how we collect, use, process, and
                disclose your information, including personal information, in
                conjunction with your access to and use of the WeBnb Platform
                and the Payment Services.
              </p>

              <p>
                If you see an undefined term in this Privacy Policy (such as
                “Listing” or “WeBnb Platform”), it has the same definition as in
                our Terms of Service.
              </p>

              <p>
                When this policy mentions “WeBnb,” “we,” “us,” or “our,” it
                refers to the WeBnb company that is responsible for your
                information under this Privacy Policy (the “Data Controller”).
              </p>
              <ul>
                <li>
                  If your Country of Residence is the United States, the Data
                  Controller is WeBnb, Inc.
                </li>
                <li>
                  If your Country of Residence is outside of the United States,
                  the People’s Republic of China which for purposes of this
                  Privacy Policy does not include Hong Kong, Macau and Taiwan
                  (“China”) and Japan, the Data Controller is WeBnb Ireland UC
                  (“WeBnb Ireland”).
                </li>
                <li>
                  If your Country of Residence is Japan, the Data Controller is
                  WeBnb Global Services Limited (“WeBnb GSL”), except where you
                  book a Host Service located outside of Japan or create a
                  Listing located outside of Japan, in which case the Data
                  Controller is WeBnb Ireland for that transaction.
                  Additionally, if you reside in Japan, WeBnb Ireland will be
                  the Data Controller for all bookings confirmed prior to June
                  13, 2018 at 3PM UTC.
                </li>
              </ul>
              <p>
                This Privacy Policy also applies to the Payment Services
                provided to you by WeBnb Payments pursuant to the Payments Terms
                of Service (“Payments Terms”). When using the Payment Services,
                you will be also providing your information, including personal
                information, to one or more WeBnb Payments entities, which will
                also be the Data Controller (the "Payments Data Controller") of
                your information related to the Payment Services, generally
                depending on your Country of Residence.
              </p>
              <ul>
                <li>
                  If your Country of Residence is the United States, the
                  Payments Data Controller is WeBnb Payments, Inc. (a subsidiary
                  of WeBnb, Inc.).
                </li>
                <li>
                  If your Country of Residence is China the Payments Data
                  Controller is Webnb China, except where you book a Host
                  Service located outside of China or create a Listing located
                  outside of China, or book a Host Service in China with a Host
                  who is not a resident of China, in which case the Payments
                  Data Controller is Webnb Payments UK.
                </li>
                <li>
                  If your Country of Residence is India, the Payments Data
                  Controller is Webnb Payments India Pvt. Ltd., except where you
                  book a Host Service outside of India or accept a booking from
                  a Guest outside of India, in which case the Payments Data
                  Controller is Webnb Payments UK Ltd.
                </li>
                <li>
                  If your Country of Residence is outside of the United States,
                  China, and India, the Payments Data Controller is Webnb
                  Payments UK Ltd.
                </li>
              </ul>
              <p>
                If you change your Country of Residence, the Data Controller
                and/or Payments Data Controller will be determined by your new
                Country of Residence as specified above, from the date on which
                your Country of Residence changes. To this end the Data
                Controller and/or Payment Data Controller that originally
                collected your personal information will need to transfer such
                personal information to the new applicable Data Controller
                and/or Payments Data Controller due to the fact that such
                transfer is necessary for the performance of the contractual
                relationship with you.
              </p>
            </div>
          </body>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Privacy);
