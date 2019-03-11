import Section from "./section";
import NewsletterForm from "../components/newsletterForm";

export default ({ children }) => (
  <Section>
    <div className="narrow teaser">
      <h2>
        A holistic conference about the future outlook for front-end and
        interfaces in Copenhagen, Denmark.
      </h2>
      <a href="https://coldfront.co/why-coldfront">
        Why are we making ColdFront?
      </a>
    </div>

    <div className="newsletter-wrapper narrow">
      <h3>Don't miss out!</h3>
      <p>
        We have a huge ColdFront storm planned to arrive in November, so sign up
        to stay in the loop and get the announcements before everyone else!
      </p>
      <NewsletterForm />
    </div>

    <style jsx>
      {`
        .teaser {
          padding-top: 100px;
          padding-bottom: 100px;

          h2 {
            font-weight: normal;
            font-size: 38px;
          }

          @media (max-width: 1000px) {
            padding: 0;
            h2 {
              font-size: 30px;
            }
          }
        }
      `}
    </style>
  </Section>
);
