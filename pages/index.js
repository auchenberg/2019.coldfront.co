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

export default () => (
  <Layout>
    <Splash />

    <Teaser />

    <Photos />

    <ProgramOverview />

    <SpeakerOverview />

    {/* <Host /> */}

    {/* <Collaborators /> */}

    <Partners />

    <style jsx>{`
      .newletter-wrapper {
        padding: 0 15px;
      }
    `}</style>
  </Layout>
);
