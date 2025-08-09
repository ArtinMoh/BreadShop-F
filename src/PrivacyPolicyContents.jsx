import {
  Heading1,
  Heading2,
  ParagraphHeading,
  ParagraphFooter,
  ParagraphFooterL,
  Button,
} from "./Components/theTags.js";

const PrivacyPolicyContents = () => {
  return (
    <section id="privacyPolicyContentContainer">
      <div id="privacyPolicyContent">
        <ParagraphFooter>
          At BreadShop, your privacy matters. This Privacy Policy describes how
          we collect, use, and protect the information you provide when using
          our website or services.
        </ParagraphFooter>

        <div className="privacyPolicyDivider" />

        <ParagraphFooterL>Information We Collect</ParagraphFooterL>
        <ParagraphFooter>
          When you interact with BreadShop, we may collect: Personal
          Information: Such as your name, email address, phone number, and
          shipping details. Browsing Data: Pages visited, device type, browser
          information, and IP address. Cookies and Tracking Technologies: To
          improve your experience and analyze site traffic.
        </ParagraphFooter>

        <div className="privacyPolicyDivider" />

        <ParagraphFooterL>How We Use Your Information</ParagraphFooterL>
        <ParagraphFooter>
          We use the information we collect to: Process orders and deliver
          products Respond to customer inquiries Improve our website
          functionality and user experience Send promotional emails (only with
          your consent)
        </ParagraphFooter>

        <div className="privacyPolicyDivider" />

        <ParagraphFooterL>How We Protect Your Data</ParagraphFooterL>
        <ParagraphFooter>
          Your data is securely stored and handled with care. We use encryption,
          secure server technologies, and access controls to prevent
          unauthorized access.
        </ParagraphFooter>

        <div className="privacyPolicyDivider" />

        <ParagraphFooterL>Cookies</ParagraphFooterL>
        <ParagraphFooter>
          BreadShop uses cookies to: Maintain your shopping cart Track usage
          patterns Improve personalized recommendations You can control cookie
          settings in your browser at any time.
        </ParagraphFooter>

        <div className="privacyPolicyDivider" />

        <ParagraphFooterL>Third-Party Services</ParagraphFooterL>
        <ParagraphFooter>
          We may share necessary information with: Payment processors Shipping
          partners Analytics tools (like Google Analytics) These providers are
          obligated to keep your data safe and use it only for the intended
          purpose.
        </ParagraphFooter>

        <div className="privacyPolicyDivider" />

        <ParagraphFooterL>Your Choices</ParagraphFooterL>
        <ParagraphFooter>
          You can opt out of marketing emails via the unsubscribe link. You may
          request deletion or correction of your personal data by contacting us
          at ContactUs@BreadShop.co.
        </ParagraphFooter>

        <div className="privacyPolicyDivider" />

        <ParagraphFooterL>Updates to This Policy</ParagraphFooterL>
        <ParagraphFooter>
          This policy may be updated to reflect changes in our services or
          applicable laws. We’ll notify you by posting the updated version here.
        </ParagraphFooter>

        <div className="privacyPolicyDivider" />

        <ParagraphFooterL>Contact Us</ParagraphFooterL>
        <ParagraphFooter>
          Questions or concerns? Reach out at ContactUs@BreadShop.co — we’re
          happy to help.
        </ParagraphFooter>
      </div>
    </section>
  );
};
export default PrivacyPolicyContents;
