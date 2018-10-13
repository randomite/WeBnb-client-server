import React from "react";
import { withRouter } from "react-router-dom";
import Footer from "../ui/Footer";
import Header from "../ui/Header";

class Terms extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="terms">
          <body>
            <div className="body">
              <div className="title">
                <h1>Terms of Service</h1>
              </div>
              <p>Last Updated: March 17,2018</p>
              <p>Thank you for using Webnb</p>
              <p>
                Please read these Terms of Service carefully as they contain
                important information about your legal rights, remedies and
                obligations. By accessing or using the Webnb Platform, you agree
                to comply with and be bound by these Terms of Service.
              </p>
              <p>
                Please note: Section 19 of these Terms of Service contains an
                arbitration clause and class action waiver that applies to all
                Webnb Members. If your Country of Residence (as defined below)
                is the United States, this provision applies to all disputes
                with Webnb. If your Country of Residence is outside of the
                United States, this provision applies to any action you bring
                against Webnb in the United States. It affects how disputes with
                Webnb are resolved. By accepting these Terms of Service, you
                agree to be bound by this arbitration clause and class action
                waiver. Please read it carefully.
              </p>

              <p>
                These Terms of Service ("Terms") constitute a legally binding
                agreement ("Agreement") between you and Webnb (as defined below)
                governing your access to and use of the Webnb website, including
                any subdomains thereof, and any other websites through which
                Webnb makes its services available (collectively, "Site"), our
                mobile, tablet and other smart device applications, and
                application program interfaces (collectively, "Application") and
                all associated services (collectively, "Webnb Services"). The
                Site, Application and Webnb Services together are hereinafter
                collectively referred to as the “Webnb Platform”. Our Host
                Guarantee Terms, Guest Refund Policy, Nondiscrimination Policy
                and other Policies applicable to your use of the Webnb Platform
                are incorporated by reference into this Agreement.
              </p>

              <p>
                When these Terms mention “Webnb,” “we,” “us,” or “our,” it
                refers to the Webnb company you are contracting with. Your
                contracting entity will generally be determined based on your
                Country of Residence. Your “Country of Residence” is the
                jurisdiction associated with your Webnb Account as determined by
                either your express selection or by Webnb’s assessment of your
                residence using various data attributes associated with your
                Webnb Account.
              </p>
              <ul>
                <li>
                  If your Country of Residence is the United States, you are
                  contracting with Webnb, Inc., 888 Brannan Street, 4th Floor,
                  San Francisco, CA 94103, United States.
                </li>
                <li>
                  If your Country of Residence is outside of the United States,
                  the People’s Republic of China (which for purposes of these
                  Terms does not include Hong Kong, Macau and Taiwan)
                  (hereinafter “China”) and Japan, you are contracting with
                  Webnb Ireland UC (“Webnb Ireland”), The Watermarque Building,
                  South Lotts Road, Ringsend, Dublin 4, Ireland.
                </li>
                <li>
                  If your Country of Residence is China, you are contracting
                  with Webnb Internet (Beijing) Co., Ltd. (“Webnb China”) except
                  where you book a Host Service (as defined below) or when you
                  create a Listing located outside of China, in which case you
                  are contracting with Webnb Ireland for that transaction.
                </li>
                <li>
                  If your Country of Residence is Japan, you are contracting
                  with Webnb Global Services Limited ("Webnb GSL"), 25-28 North
                  Wall Quay, Dublin 1, D01 H104, Ireland, except where you book
                  a Host Service (as defined below) or when you create a Listing
                  located outside of Japan, in which case you are contracting
                  with Webnb Ireland for that transaction. Additionally, if your
                  contracting entity is Webnb GSL, you will nevertheless
                  contract with Webnb Ireland for all bookings confirmed prior
                  to June 13, 2018 at 3:00 pm UTC.
                </li>
              </ul>
              <p>
                If you change your Country of Residence, the Webnb company you
                contract with will be determined by your new Country of
                Residence as specified above, from the date on which your
                Country of Residence changes.
              </p>
              <p>
                Our collection and use of personal information in connection
                with your access to and use of the Webnb Platform is described
                in our Privacy Policy.
              </p>
              <p>
                Any and all payment processing services through or in connection
                with your use of the Webnb Platform ("Payment Services") are
                provided to you by one or more Webnb Payments entities
                (individually and collectively, as appropriate, "Webnb
                Payments") as set out in the Payments Terms of Service
                ("Payments Terms").
              </p>
              <p>
                Hosts alone are responsible for identifying, understanding, and
                complying with all laws, rules and regulations that apply to
                their Listings and Host Services. For example, some cities have
                laws that restrict their ability to host paying guests for short
                periods or provide certain Host Services. In many cities, Hosts
                may have to register, get a permit or obtain a license before
                providing certain Host Services (such as preparing food, serving
                alcohol for sale, guiding tours or operating a vehicle). Host
                are alone responsible for identifying and obtaining any required
                licenses, permits, or registrations for any Host Services they
                offer. Certain types of Host Services may be prohibited
                altogether. Penalties may include fines or other enforcement. We
                provide some information in our Help Center to help you identify
                some of the obligations that apply to you. If you have questions
                about how local laws apply to your Listing(s) and Host
                Service(s) on Webnb, you should always seek legal guidance.
              </p>
            </div>
          </body>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Terms);
