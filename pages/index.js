import Splash from '../components/splash'
import Section from '../components/section'
import WideSection from '../components/wideSection'
import NewsletterForm from '../components/newsletterForm'
import Organizers from '../components/organizers'
import Collaborators from '../components/collaborators'
import Host from '../components/host'
import SpeakerSection from '../components/speakerSection'
import Footer from '../components/footer'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <div className="home">

    <Splash />

    <Section>
        <div className="col-md-8 offset-md-2 splash-text">
          <h1 className="text-center">A unique two-day conference for front-end and mobile developers about the future of our industry in Copenhagen, Denmark</h1>
        </div>
    </Section>

    <Section>
        <div className="image-overlay crowd">
        <div className="overlay-shadow"></div>
            <a className="play fade-glitch" href="https://www.youtube.com/watch?v=zXJuEp8d6gw" target="_blank" />
        </div>
    </Section>

    <WideSection>
        <div className="col-md-10 conference">
        <h2>The front-end role has evolved!</h2>
        <p>ColdFront is a unique two-day international conference for front-end and mobile developers in Copenhagen on November 13-14th 2018. The front-end role has evolved, and building modern interfaces requires you to be present on many platforms regardless of the technology.</p>

        <p>How do you deliver a modern interface that works on any platform?</p>
        <p>At Coldfront 2018, we will take a look at the entire stack by throwing a two day conference for everyone who are passionate about building front-ends and interfaces. So whether you are a iOS, Android, mobile, web, frontender or something in between, ColdFront is the place to be.</p>
        <p>Join us, in the heart of Copenhagen, Denmark with 16 talks by renowned speakers, delicious nordic food and boatloads of social fun and networking.</p>

        <a className="btn btn-primary btn-secondary-shadow ticket glitch" data-text="Get your ticket" href="https://2018.coldfront.co/tickets">
            Get your ticket <i className="fas fa-arrow-right"></i>
        </a>

        </div>
    </WideSection>

    <Section clean>
        <div className="splash">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <img className='img' src="/static/images/program.png" width="100%" />
                </div>
            </div>
        </div>
    </Section>

    <Section>
        <div className="row">

            <div className="community-image col-md-6 col-xs-12"></div>

            <div className="col-md-4 offset-md-1 col-xs-12 host-text">
                <h2>2 conference days + 1 community day!</h2>
                <p>We want to inspire you, so this year we are taking ColdFront to a new level by having two full conference days in VEGA and introducing a new 3rd optional community day in collaboration with leading educational organizations and communities in Copenhagen, where we'll host workshops and meetups.</p>

                <p><a id="location-link" href="/community">Read more about our Community Day here</a></p>
            </div>
        </div>
    </Section>

    <SpeakerSection />

    <Section>
        <div className="row">
            <div className="col-md-5 offset-md-1 col-xs-12 host-text">
                <h2>Come to Copenhagen!</h2>
                <p>Copenhagen is the meltingpot for front-end, design, architecture and food. Did you know PHP, C++, Ruby on Rails were invited in Denmark? Ever heard about Arne Jacobsen? Noma? New nordic food? or Bjarke Ingles?</p>
                <p>Yup, all Danish 🇩🇰</p>
                <p>Come to Copenhagen and experience an international city that's the melting point of software and design. ColdFront will be held in VEGA, one of the leading concert stages in Europe, that's showcasing original 50's design gives the building a unique atmosphere. VEGA's decor with dark wood paneling, mahogany floors, friezes, and the many original details including railings, balustrades and lamps in typical Scandinavian style are the hallmarks of VEGA.</p>
                <p><a id="location-link" href="https://www.google.ca/maps/place/Vega/@55.668023,12.5418672,17z/data=!3m1!4b1!4m5!3m4!1s0x4652539e80687c13:0xf5202e524e3eb86f!8m2!3d55.66802!4d12.5440612?hl=en">VEGA, ENGHAVEVEJ 40, 1674 COPENHAGEN</a></p>
            </div>


            <div className="venue-image col-md-6 col-xs-12"></div>

        </div>
    </Section>

    <Section>
        <div className="row">
            <div className="food-image col-md-6 col-xs-12"></div>

            <div className="col-md-4 offset-md-1 col-xs-12 host-text">
                <h2>Social events, dinners, great food and party!</h2>
                <p>ColdFront is more than typical conference. We want you to have a great social experience, and we believe socializing and netwokring is is big part of why we go to conferences.</p>
                <p>We are collaborating with a number of truly amazing people in Copenhagen, that will help you experience many sides of Copenhagen, as we are organzing a bunch of optionl social events that you can choose to participate in to meet new people. All of this in addition to the conference days. </p>
                <p>We believe conference food should be nutritious, coffee should be great, and parties should be focused about meeting people; not getting hammered.</p>

                <p><a id="location-link" href="/social">Read more about our Social Events here</a></p>
            </div>
        </div>
    </Section>

    <Host />

    <WideSection>
        <div className="newsletter-wrapper">
            <h2>Don't miss out! Get the latest</h2>
            <p>We are planning another ColdFront storm to arrive in late 2018, so sign up to stay tuned and become a early bird ColdFronter!</p>
            <NewsletterForm />
        </div>
    </WideSection>

    <Collaborators />

    <style jsx>{`

        .food-image {
            background-image: url(/static/images/food.jpg);
            background-size: cover;
            box-shadow: 40px 80px 80px 20px rgba(0, 0, 0, 0.5);

            height: 600px;

            position: relative;

            .overlay-shadow {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(to top,#1c1c2d 0%,transparent);
            }

            .text {
                position: absolute;
                bottom: 0%;
                left: 0%;
                right: 0%;

                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;

                padding: 20px 40px;
            }
        }

        .community-image {
            background-color: #1C1C1C;
            background-image: url(/static/images/community-partners.png);
            background-size: contain;
            background-repeat: no-repeat;
            box-shadow: 40px 80px 80px 20px rgba(0, 0, 0, 0.5);

        }
        .venue-image {
            background-image: url(/static/images/copenhagen.jpg);
            background-size: cover;
            box-shadow: 40px 80px 80px 20px rgba(0, 0, 0, 0.5);

            height: 800px;

            position: relative;

            .overlay-shadow {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(to top,#1c1c2d 0%,transparent);
            }

            .text {
                position: absolute;
                bottom: 0%;
                left: 0%;
                right: 0%;

                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;

                padding: 20px 40px;
            }
        }

        #location-link {
            font-weight: bolder;
            text-decoration: none;
        }





      .crowd {
        background-image: url(/static/images/video-full.jpg);
        height: 500px;
        margin-bottom: -300px;
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

      .newletter-wrapper {
          padding: 0 15px;
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
            margin-bottom: -150px;

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
