
import WideSection from '../components/wideSection'
import Layout from '../components/layout'
import Intro from '../components/intro'

export default () => (
    <Layout>

        <Intro title="Why ColdFront?" img="/static/images/splash-social.jpg" />

        <WideSection>
            <div className="page-social">
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
        <style jsx>{`
            .image-social {
                background-image:url('/static/images/splash-social.jpg');
                height: 500px;
                margin-bottom: -200px;
            }
        `}</style>
    </Layout>
)
