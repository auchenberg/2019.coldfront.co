import Header from '../components/header'
import Splash from '../components/splash'
import Section from '../components/section'
import WideSection from '../components/wideSection'
import NewsletterForm from '../components/newsletterForm'
import Organizers from '../components/organizers'

export default () => (
  <div className='home'>

    <Header />

    <Section>
        <div className="col-md-6 offset-md-2">
            <h2>Tickets</h2>

            <tito-widget event="coldfront/coldfront-2018"></tito-widget>

        </div>

    </Section>



  </div>
)
