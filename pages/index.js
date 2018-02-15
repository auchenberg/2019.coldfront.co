import Splash from '../components/splash'
import Section from '../components/section'
import WideSection from '../components/wideSection'
import NewsletterForm from '../components/newsletterForm'
import Organizers from '../components/organizers'
import Collaborators from '../components/collaborators'
import Footer from '../components/footer'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <div className="home">

    <Splash />

    <Section>
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center">A TWO-DAY INTERNATIONAL CONFERENCE FOR FRONT-END, MOBILE AND INTERFACE DEVELOPERS IN COPENHAGEN DENMARK</h1>
        </div>
    </Section>

    <div className="container-fluid image-overlay crowd">
      <div className="overlay-shadow"></div>      
      <a className="play" href="https://www.youtube.com/watch?v=zXJuEp8d6gw" target="_blank" />
    </div>

    <WideSection>
        <div className="col-md-6 offset-md-2 newsletter-wrapper">
          <h2>2 days, 12 talks, 2 panel debates and lots of fun</h2>
          <p>ColdFront brings frontenders from all over together for two days of front-end talks and lots of fun in Copenhagen. It’s a two day conference with 12 talks by internationally renowned speakers, 2 panel debates, amazing food and networking with your front-end colleagues. Our focus is on the web and where front-end is headed. So sit tight and get ready to be inspired.</p>
        </div>
    </WideSection>

    <Section>
      <div className="host-desc col-md-3 offset-md-2 col-xs-12">
        <h2>YOUR HOST</h2>
        <p>This year ColdFront introduces a new concept by having Phil Hawksworth as your host for the conference. Phil spoke at the very first ColdFront, and has since hosted many of our favorite conferences such a Fronteers in Amsterdam.</p>
      </div>

      <div className="col-md-5 offset-md-1 col-xs-12 host image-overlay">
          <div className="overlay-shadow"></div>
          <div className="text">
            <div>
              <h3>PHIL HAWKSWORTH</h3>
              <p>Technology Director at R/GA</p>              
            </div>
            <i className="fas fa-arrow-right fa-2x"></i>
          </div>
      </div>
    </Section>

    <WideSection>
        <div className="col-md-6 offset-md-2 newsletter-wrapper">
          <h2>Don't miss out!</h2>
          <h2>Get the latest</h2>
          <p>We are planning another ColdFront storm to arrive in late 2018, so sign up to stay tuned and become a early bird ColdFronter!</p>

          <NewsletterForm />
        </div>
    </WideSection>

    <Collaborators />

    <style jsx>{`
      .crowd {
        background-image: url(/static/images/video-full.jpg);
        width: 95%;
        height: 500px;
        margin-bottom: -100px;
        background-position: bottom;

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
      }

      .host-desc {
        margin-top: 100px;
        p {
          font-size: 1.5em;
          line-height: 34px;
        }
      }

      .host {
        background-image: url(/static/images/phil.jpg);
        height: 500px;

        .overlay-shadow {
          box-shadow: inset 0 20px 60px 0px rgba(0,0,0,0.35);
        }

        .text {
          position: relative;
          top: 80%;
          z-index: 2;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;

          .fas {
            color: #8f23f5;
          }
        }
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

      .newsletter-wrapper {
        h2:first-child {
            margin-bottom: 0
        }
        p {
            font-size: 1.5em;
        }
      }

      @media (max-width: 1000px) {
        .crowd {
          background-image: url(/static/images/video-small.jpg);
        }
      }
      `}</style>

      <script>


      </script>

    </div>
  </Layout>
)
