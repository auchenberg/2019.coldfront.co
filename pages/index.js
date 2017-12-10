import Header from '../components/header'
import Splash from '../components/splash'
import Section from '../components/section'
import WideSection from '../components/wideSection'
import NewsletterForm from '../components/newsletterForm'
import Organizers from '../components/organizers'
import Footer from '../components/footer'

export default () => (
  <div className='home'>

    <Header />
    <Splash />

    <Section>
        <div className="col-md-8 offset-md-1">
          <h3>A two-day international conference for front-end and interface developers in <strong className="location">Copenhagen 🇩🇰</strong></h3>
          <h2 className="date">Nov 13-14 2018</h2>
        </div>
    </Section>

    <Section>
        <div className="col-md-4 offset-md-1">
          <a name="theme"></a>
          <h2>The future of front-end and interfaces</h2>
          <p>ColdFront is a international conference who gathers for two days of front-end talks and lots of fun in Copenhagen. It’s a two day conference with 12 talks by internationally renowned speakers, 2 panel debates, amazing food and networking with your front-end colleagues. Our focus is on the web and where front-end is headed. So sit tight and get ready to be inspired.</p>
        </div>

        <div className="col-md-3 pt-5">
          <img src="/static/images/img-audience.jpg" width="100%" />
        </div>
    </Section>

    <WideSection>
        <div className="col-md-4 offset-md-4">
          <h2>Don't miss out on any news – join our mailinglist!</h2>
          <p>We are planning another ColdFront storm to arrive in late 2018, so sign up to stay tuned and become a early bird ColdFronter!</p>
        
          <NewsletterForm />
        </div>
    </WideSection>

    <Organizers />

    <style jsx>{`
        .location {
          color: #b00202;
        }
        .date {
          color: #8f23f5;
        }
          `}
    </style>
    

  </div>
)
