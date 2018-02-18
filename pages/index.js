import Splash from '../components/splash'
import Section from '../components/section'
import WideSection from '../components/wideSection'
import NewsletterForm from '../components/newsletterForm'
import Organizers from '../components/organizers'
import Collaborators from '../components/collaborators'
import Host from '../components/host'
import Footer from '../components/footer'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <div className="home">

    <Splash />

    <Section>
        <div className="col-md-8 offset-md-2 splash-text">
          <h1 className="text-center">A TWO-DAY INTERNATIONAL CONFERENCE FOR FRONT-END, MOBILE AND INTERFACE DEVELOPERS IN COPENHAGEN DENMARK</h1>
        </div>
    </Section>

    <div className="container-fluid image-overlay crowd">
      <div className="overlay-shadow"></div>
      <a className="play" href="https://www.youtube.com/watch?v=zXJuEp8d6gw" target="_blank" />
    </div>

    <WideSection>
        <div className="col-md-10 offset-md-1 conference">
        <h2>November 13-14th 2018 in Copenhagen!</h2>
        <p>ColdFront is a two-day international conference for front-end, mobile and interface developers in Copenhagen on November 13-14th 2018.</p>

        <p>The front-end role has evolved, and building modern interfaces requires you to be present on many platforms regardless of the technology.</p>
        <p>How do you deliver a modern interface that works on any platform?</p>

        <p>At Coldfront 2018, we will take a look at the entire stack by throwing a <strong>two day</strong> conference for everyone who are passionate about building front-ends and interfaces.</p>
        <p>So whether you are a iOS, Android, mobile, web, frontender or something in between, ColdFront is the place to be.</p>
        <p>Join us, in the heart of <strong>Copenhagen, Denmark</strong> with 16 talks by renowned speakers, delicious nordic food and boatloads of social fun and networking.</p>

        <a className="btn btn-primary ticket" href="https://2018.coldfront.co/tickets">
            Get your ticket <i className="fas fa-arrow-right"></i>
        </a>

        </div>
    </WideSection>

    <Host />

    <WideSection>
        <div className="col-md-6 offset-md-1 newsletter-wrapper">
            <h2>Don't miss out! Get the latest</h2>
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
          margin-top: -100px;
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

      .conference {
        .ticket {
            position: absolute;
            right: 0;
            bottom: -120px;
        }
      }

      @media (max-width: 1000px) {

        .splash-text {
            h1 {
                font-size: 22px;
            }
        }

        .crowd {
            height: 300px;
            background-image: url(/static/images/video-small.jpg);

            .play {
                height: 50px;
                width:50px;

                margin-left: -25px;
                margin-top: -75px;
            }
        }

        .conference .ticket {
            position: static;
        }
      }
      `}</style>

      <script>


      </script>

    </div>
  </Layout>
)
