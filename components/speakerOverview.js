import Section from "./section";
import SpeakerList from "../components/speakerList";

export default ({ children }) => (
  <Section>
    <div className="narrow">
      <a id="speakers" />
      <h2>Themes, Speakers, Talks, and Workshops</h2>
      <p>Our lineup for 2019 is yet to be announced.</p>
    </div>

    <div className="speaker-overview">
      {/* <SpeakerList compact="true" /> */}
    </div>

    {/* <div className="narrow">
            <p><a href="/speakers">Read more all the details about our speakers here</a></p>
        </div> */}

    <style jsx>{`
      .speaker-overview {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 60px;
        padding: 100px 0;
      }

      @media (max-width: 600px) {
        .speaker-overview {
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 20px;
        }
      }
    `}</style>
  </Section>
);
