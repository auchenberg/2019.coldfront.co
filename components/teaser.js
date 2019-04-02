import Section from "./section";

export default ({ children }) => (
  <Section dark>
    <div className="narrow teaser">
      <h2>
        A holistic conference about the future outlook for front-end and
        interfaces in Copenhagen, Denmark.
      </h2>
      <a href="https://coldfront.co/why-coldfront" className="btn btn-primary">
        Why are we making ColdFront?
      </a>
    </div>

    <style jsx>
      {`
        .teaser {
          max-width: 900px;

          h2 {
            font-weight: normal;
            font-size: 38px;
            margin-bottom: 40px;
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
