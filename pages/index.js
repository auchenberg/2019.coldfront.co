import Splash from "../components/splash";
import Section from "../components/section";
import WideSection from "../components/wideSection";

import Organizers from "../components/organizers";
import Collaborators from "../components/collaborators";
import Partners from "../components/partners";
import Host from "../components/host";
import ProgramOverview from "../components/programOverview";
import Teaser from "../components/teaser";
import Photos from "../components/photos";
import SpeakerOverview from "../components/speakerOverview";
import Footer from "../components/footer";
import Layout from "../components/layout";
import NewsletterForm from "../components/newsletterForm";

export default () => (
  <Layout>
    <Splash />

    <Teaser />

    <Section bright>
      <div className="newsletter-wrapper narrow">
        <div className="intro">
          <h1>Newsletter</h1>
          <p>
            We have a huge ColdFront storm planned to arrive in November, so sign up to stay in the loop.
          </p>
        </div>
        <NewsletterForm />
      </div>    
    </Section>

    <Photos />

    <ProgramOverview />

    <Host />

    <SpeakerOverview />

    {/* <Collaborators /> */}

    <Partners />

    <style jsx>{`
      .newletter-wrapper {
        padding: 0 15px;
      }
    `}</style>
  </Layout>
);
