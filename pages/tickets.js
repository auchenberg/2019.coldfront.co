import Header from '../components/header'

import Section from '../components/section'
import Layout from '../components/layout'
import NewsletterForm from '../components/newsletterForm'
import Intro from '../components/intro'

export default () => (
    <Layout>
        <Section>
            <Intro
                title="Tickets"
                img="/static/images/splash-tickets.jpg"
                text="The price incl. 2 day conference, 1 community day, social dinners, party and a major surprise."
            />
        </Section>
        <Section bright>
            <div className="col-md-8 col-xs-12">

                <tito-widget event="coldfront/coldfront-2018" />

                <h3>Want to buy via Invoice?</h3>
                <p>No problem! Contact us at <a href="mailto:hello@coldfront.co">hello@coldfront.co</a></p>

                <br />
                <br />

                <h3>Don't miss out! Get the latest</h3>
                <p>We are planning another ColdFront storm to arrive in late 2018, so sign up to stay tuned and become a early bird ColdFronter!</p>
                <NewsletterForm />
            </div>
        </Section>

            <style jsx>{`


            `}</style>

    </Layout>
)
