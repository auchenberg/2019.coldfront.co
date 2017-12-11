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
          <h2 className="date">Nov 13-14 2018</h2>
          <h3>A two-day international conference for front-end and interface developers in Copenhagen, <strong className="location">Denmark 🇩🇰</strong></h3>
        </div>
    </Section>

    <Section>
        <div className="col-md-4 offset-md-1">
          <a name="theme"></a>
          <h2>The future of front-end and interfaces</h2>
          <p>ColdFront is a unique front-end conference that spans across the stacks of technologies and focuses on the craft and challenges of delivering modern interfaces and front-ends that works on any platform. </p>
          <p>Building a great interfaces requires a modern front-end that's present on many different platforms using vastly different technologies, and yet our front-end communities are typically isolated by stacks and not challanges.</p>
          
          <p>With ColdFront we are changing that, by throwing a <strong>two day</strong> conference in <strong>Copenhagen</strong> with 16 talks by renowned speakers, delicious nordic food and boatloads of social fun and networking.</p>

        </div>

        <div className="col-md-3 pt-5">
          <img className="pt-5" src="/static/images/img-audience.jpg" width="100%" />
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
