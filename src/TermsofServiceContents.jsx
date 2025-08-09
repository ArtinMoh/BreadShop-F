import {
  Heading1,
  Heading2,
  ParagraphHeading,
  ParagraphFooter,
  ParagraphFooterL,
  Button,
} from "./Components/theTags.js";

const TermsofServiceContents = () => {
  return (
    <section id="termsOfServiceContainer">
      <div id="termsOfServiceContent">
        <ParagraphFooter>
          These Terms of Service govern your use of our website and services. By
          accessing or using BreadShop, you agree to comply with and be bound by
          these terms.
        </ParagraphFooter>

        <div className="termsOfServiceDivider" />

        <ParagraphFooterL>User Responsibilities</ParagraphFooterL>
        <ParagraphFooter>
          You agree to use BreadShop for lawful purposes only. You will not
          engage in activity that harms our systems, interferes with other
          users, or violates any applicable laws.
        </ParagraphFooter>

        <div className="termsOfServiceDivider" />

        <ParagraphFooterL>Account Security</ParagraphFooterL>
        <ParagraphFooter>
          If you create an account, you are responsible for maintaining its
          confidentiality and security. You agree to notify us promptly of
          unauthorized use or breach of your account.
        </ParagraphFooter>

        <div className="termsOfServiceDivider" />

        <ParagraphFooterL>Purchases and Payments</ParagraphFooterL>
        <ParagraphFooter>
          All transactions made through BreadShop are subject to our payment
          terms. Prices, availability, and product descriptions may change at
          any time without notice.
        </ParagraphFooter>

        <div className="termsOfServiceDivider" />

        <ParagraphFooterL>Intellectual Property</ParagraphFooterL>
        <ParagraphFooter>
          All content, trademarks, and assets on BreadShop are the property of
          BreadShop or its licensors. You may not copy, distribute, or reuse any
          content without permission.
        </ParagraphFooter>

        <div className="termsOfServiceDivider" />

        <ParagraphFooterL>Limitations of Liability</ParagraphFooterL>
        <ParagraphFooter>
          BreadShop is not liable for damages resulting from your use of the
          site, including data loss, service interruptions, or third-party
          activities. Use is at your own risk.
        </ParagraphFooter>

        <div className="termsOfServiceDivider" />

        <ParagraphFooterL>Modifications to Terms</ParagraphFooterL>
        <ParagraphFooter>
          We reserve the right to update these Terms of Service at any time. Any
          changes will be posted here, and your continued use of the site
          constitutes acceptance.
        </ParagraphFooter>

        <div className="termsOfServiceDivider" />

        <ParagraphFooterL>Termination</ParagraphFooterL>
        <ParagraphFooter>
          BreadShop may suspend or terminate your access at any time for
          violations of these terms, without notice or liability.
        </ParagraphFooter>

        <div className="termsOfServiceDivider" />

        <ParagraphFooterL>Governing Law</ParagraphFooterL>
        <ParagraphFooter>
          These terms are governed by the laws of the jurisdiction in which
          BreadShop operates. Disputes will be resolved in accordance with those
          laws.
        </ParagraphFooter>

        <div className="termsOfServiceDivider" />

        <ParagraphFooterL>Contact Us</ParagraphFooterL>
        <ParagraphFooter>
          For questions about these terms, reach out to us at
          ContactUs@BreadShop.co.
        </ParagraphFooter>
      </div>
    </section>
  );
};
export default TermsofServiceContents;
