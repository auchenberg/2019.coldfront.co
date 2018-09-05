import Section from '../components/section'
import Layout from '../components/layout'
import Intro from '../components/intro'

export default () => (
    <Layout title="Welcome fellow ColdFronter!">

        <Section>
            <Intro
                title="Welcome fellow ColdFronter!"
                text="We are SUPER exicited to have you around for this years ColdFront!"
                img="/static/images/splash-community.jpg"
            />
        </Section>
        <Section bright>

            <div className="narrow">
                <p>We are SUPER exicited to have you around for this years ColdFront! and we hope you are too! If you haven't checked-out the program yet, then head to <a href="/program/">Program</a> to get more details on what's going to happen!</p>

                <h3>Free workshops for you!</h3>
                <p>This year we are also giving you FREE workshops, so head over to <a href="https://2018.coldfront.co/community-workshop-day/">our Community and workshop  day</a> to get an overview and register!</p>
                <p></p>

                <h3>Traveling to Copenhagen? Looking for hotels?!</h3>
                <p>We have secured ColdFronters discounts at some awesome hotels in Copenhagen, so head to <a href="https://2018.coldfront.co/where-to-stay-and-how-to-get-around">Where To Stay and How to Get Around</a> to read the details.
                <p></p>

                <h3>Share the love</h3>

                <p>You exicited to go to ColdFront? Share the love with the global community! </p>

                    <br />
                    <a href="http://twitter.com/share?text=I'm going to @coldfrontconf in November for 3 days of front-end inspiration in Copenhagen. Join us! &url=https://2018.coldfront.co&hashtags=coldfront18" className="btn btn-primary">Tweet: I'm going to @coldfrontconf in November for 3 days of front-end inspiration in Copenhagen</a>
                    <br />
                    <br />
                </p>




            <style jsx>{`
                .page-welcome {

                }
            `}</style>
            </div>
        </Section>
    </Layout>
)
