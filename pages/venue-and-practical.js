import Layout from "../components/layout";
import Section from "../components/section";
import Intro from "../components/intro";
import Link from "next/link";

export default () => (
  <Layout title="Venue and Practicalities">
    <Section>
      <Intro
        title="Venue and Practicalities"
        text="ColdFront 2019 will play out at the Bremen Teater, one of oldest theaters in Copenhagen, with comfy seating and atmosphere."
      />

      <div className="narrow">
        <p>
          <a href="http://brementeater.dk">Bremen</a> is located Vesterbro,
          which is the sweet spot of central Copenhagen. It is also in walking
          distance to the hip Meat Packing District.
        </p>
        <p>
          The venue address is:{" "}
          <a href="https://goo.gl/maps/gfVqCTmLQCy">
            Nyropsgade 39-41, 1602 København, Denmark
          </a>
        </p>
      </div>

      <div className="images">
        <img src="http://brementeater.dk/content/uploads/2016/04/Bremen-Teater-sal-2.jpg" />
        <img src="/static/images/venue/bremen1.jpg" />
        <img src="/static/images/venue/bremen2.jpg" />
      </div>
    </Section>

    {/*<Section bright>
       <div className="narrow">
        <h2>Experience the best of Copenhagen</h2>

        <p>
          We are inviting you to participate in the “ColdFront Copenhagen
          experience,” as we want you to experience the best parts of Copenhagen
          while you are visiting.
        </p>

        <h3>Where to stay and how to get around?</h3>

        <p>
          <Link href="/where-to-stay-and-how-to-get-around">
            <a>Learn more about hotels and transportation in Copenhagen</a>
          </Link>
        </p>

        <h3>Lunch, food, dinner, party and social dinners</h3>

        <p>
          As a part of ColdFront, we are providing breakfast and lunch during
          the conference days. Dinner will be provided at our mighty ColdFront
          Party™ which will take place on{" "}
          <Link href="/program/day1">Day 1</Link>.
        </p>
        <p>
          For the remaning days, food is in your own expense and to socialize,
          we are organzing <strong>Social Dinners</strong> where you can dine
          with fellow ColdFronters at cool restaurants around Copenhagen.
        </p>

        <p>
          <Link href="/social">
            <a>
              Learn more about our ColdFront Party™, social dinners, and social
              side events
            </a>
          </Link>
        </p>

        <h3>Copenhagen City Guide</h3>
        <p>
          Copenhagen is an amazing city! To get you an insider's perspective on
          the city, we have teamed up with{" "}
          <a href="https://readgradient.com/">Gradient City Guides</a>, who will
          be providing their Copenhagen City Guide to us as soon as it's ready.
        </p>
      </div> 
    </Section> */}
    <style jsx>
      {`
        h2,
        p {
          margin-bottom: 34px;
        }
        h3 {
          margin-bottom: 10px;
        }

        .images {
          margin-top: 60px;
          display: flex;
          justify-content: spnpmace-between;
          align-items: center;

          img:nth-child(1) {
            max-width: 28%;
          }

          img:nth-child(2) {
            max-width: 38%;
          }

          img:nth-child(3) {
            max-width: 24%;
          }
        }
      `}
    </style>
  </Layout>
);
