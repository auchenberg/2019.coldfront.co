import Splash from '../components/splash'
import Section from '../components/section'
import WideSection from '../components/wideSection'
import NewsletterForm from '../components/newsletterForm'
import Organizers from '../components/organizers'
import Collaborators from '../components/collaborators'
import Host from '../components/host'
import Program from '../components/program'
import Teaser from '../components/teaser'
import SpeakerSection from '../components/speakerSection'
import Footer from '../components/footer'
import Layout from '../components/layout'

export default () => (
  <Layout>
        <Splash />

        <Teaser />

        <SpeakerSection />

        <Host />

        <Program />

        <Section>
            <div className="newsletter-wrapper narrow">
                <h3>Don't miss out! Get the latest</h3>
                <p>We have a huge ColdFront storm planned to arrive in November, so sign up to stay in the loop and get the announcements before everyone else!</p>
                <NewsletterForm />
            </div>
        </Section>

        <Collaborators />

    <style jsx>{`

      .newletter-wrapper {
          padding: 0 15px;
      }


      `}</style>
  </Layout>
)
