import Section from "./section";
import DaySelector from "../components/daySelector";

export default ({ children }) => (
  <Section bright>
    <div className="narrow">
      <div className="intro">
        <h1>The program</h1>
        <p>
          Two full conference days and a 3rd community day where we'll host{" "}
          <strong>free</strong> workshops and meetups in collaboration our
          friends and partners.
        </p>
      </div>
    </div>

    <DaySelector />

    {/* <div className="narrow">
                <p><a href="/program">Read more details about the program here</a>.</p>
            </div> */}

    <style jsx>{`
      .days {
        display: flex;
        justify-content: space-between;
        margin: 100px 0;

        @media (max-width: 768px) {
          flex-direction: column;

          .day {
            width: 100%;
          }
        }
      }

      .day {
        width: 25%;

        @media (min-width: 1200px) {
          width: 20%;
        }

        a {
          color: #fff;
        }

        h2 {
          font-size: 80px;
        }
      }

      .arrow {
        width: 40px;
      }
    `}</style>
  </Section>
);
