import Header from '../components/header'
import Splash from '../components/splash'
import Section from '../components/section'
import WideSection from '../components/wideSection'
import NewsletterForm from '../components/newsletterForm'
import Organizers from '../components/organizers'
import Footer from '../components/footer'

export default () => (
  <div className="home">

    <Header />
    <Splash />

    <Section>
        <div className="col-md-8 offset-md-1">
          <h2 className="date">Nov 13-14 2018</h2>
          <h3>A two-day international conference for front-end and interface developers in Copenhagen, <strong className="location">Denmark 🇩🇰</strong></h3>
        </div>
    </Section>

    <Section>
        <a name="theme"></a>
        <div className="col-md-4 offset-md-1">
          <h2>The future of front-end and interfaces</h2>
          <p>ColdFront is a two-day international conference for front-end and interface developers in Copenhagen on November 13-14th 2018.</p>
          
          <p>The front-end role has envolved, and building modern interfaces requires you to be present on many platforms regardless of the technology.</p>
          <p>How do you deliver a modern interface that works on any platform?</p>
            
          <p>At Coldfront 2018, we will take a look at the entire stack by throwing a <strong>two day</strong> conference for everyone who are passionate about building front-ends and interfaces.</p>
          <p>So whether you are a mobile, web, frontender or something in between, ColdFront is the place to be.</p>
          <p>Join us, in the heart of <strong>Copenhagen, Denmark</strong> with 16 talks by renowned speakers, delicious nordic food and boatloads of social fun and networking.</p>

        </div>

        <div className="col-md-4">
          <div className="imgWrapper">
            <img className="pt-5" src="/static/images/img-audience.jpg" width="100%" />
            <a className="play" href="https://www.youtube.com/watch?v=zXJuEp8d6gw" target="_blank" />
          </div>
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

      .imgWrapper {
        position: relative;
      }

      .play {
        background: url('/static/images/btn-play.svg') no-repeat;
        background-size: contain;
        height: 100px;
        width: 100px;

        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -50px;
        margin-top: -30px;
      }


    `}</style>



  </div>
)
