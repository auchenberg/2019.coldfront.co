import Section from '../components/section'
import Layout from '../components/layout'
import Intro from '../components/intro'

export default () => (
    <Layout title="Call for Recommendations">

        <Section>
            <Intro
                title="Call for Recommendations"
                text="We are inviting the front-end community to submit recommendations for the upcoming ColdFront 2018 in November 13-14-15th Copenhagen."
                img="/static/images/splash-cfr.jpg"
            />
        </Section>
        <Section bright>

            <div className="narrow">
                <p>ColdFront is a <strong>curated single-track conference</strong>, where the content is carefully curated by the organizers of ColdFront. This makes ColdFront different than most other conferences, as we don't have a regular CFP (Call for Proposals).</p>

                <p>Instead we are inviting the front-end community to submit <strong>recommendations</strong> via our <strong>Call for Recommendations</strong> where you can propose great content, topics for the upcoming ColdFront 2018 (November 13-14-15th, Copenhagen).</p>

                <p>This Call for Recommendations closes on May 1st 2018.</p>

                <p>
                    <br />
                    <a className="btn btn-primary">Our Call For Recommendations has ended.</a>
                    <br />
                    <br />
                </p>


                <h3>What not a Call for Proposals?</h3>
                <p>CFP's are great, but we think it can be done better through <strong>peer validation</strong> by having the community recommendating <strong>other peoples</strong> content instead of pitching their own. We want to hear about that amazing talk you saw at a meetup, that cool new project that's still under the rader, or that amazingly speaker you heard at another conference.</p>

                <p>Each year we do our best to select the best content for ColdFront, and we know we aren't perfect, and this is the reason for why we are opening this <strong>Call for Recommendations</strong> as a way for you to help shape and influence ColdFront 2018</p>
                <p><br /></p>

                <h3>What makes a good recommendation?</h3>
                <p>At ColdFront we have a <a href="/about">very specific format and set of principles</a> that guides our curation, so a good recommendation would first of all follow these. Your recommendation can also be something less tangible such as theme or topic you'd love to see covered at ColdFront 2018. </p>
                <ul>
                    <li>Topics and themes such as "devtools" or "web assembly"</li>
                    <li>Specific talks from other conferences and meetups</li>
                    <li>Speaker recommendations who you'll think will be a great fit for ColdFront</li>
                    <li>Artist and entertainment recommendations</li>
                </ul>


            <style jsx>{`
                .page-cfr {

                }
            `}</style>
            </div>
        </Section>
    </Layout>
)
