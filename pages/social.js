
import WideSection from '../components/wideSection'
import Layout from '../components/layout'
import Intro from '../components/intro'

export default () => (
    <Layout>

        <Intro title="ColdFront Social" img="/static/images/splash-social.jpg" />

        <WideSection>
            <div className="page-social">
                <p>ColdFront is more than your typical conference. We want you to have a great social experience, and we believe socializing and netwokring is is big part of why we go to conferences.</p>
                <p>We are collaborating with a number of truly amazing people in Copenhagen, that will help you experience many sides of Copenhagen, as we are organzing a bunch of optionl social events that you can choose to participate in to meet new people.All of this in addition to the conference days.</p>
                <p>We believe conference food should be nutritious, coffee should be great, and parties should be focused about meeting people; not getting hammered.</p>

                <br />
                <img src="/static/images/program.png" width="100%" />

                <h2>Social dinners</h2>
                <p>During the conference days we are planning on organizing social dinners, where you can signup for pre-booked restaurants around Copenhagen, where you'll get paired up with fellow ColdFronters.</p>

                <p>A list of the participating ColdFront restaurants will be announced in the weeks before ColdFront</p>

                <h2>ColdFront Party</h2>
                <p>To finish ColdFront with a blast, we are throwing a party for all ColdFronters in Vega. We are planning on opening the bar, while bringing you a special experience in one of Copenhagen's most historic venues.</p>

                <h2>Experience Copenhagen</h2>
                <p>We want you to experience Copenhagen, and we know many of you are travelling to attend ColdFront. Maybe it's your first time here? So we are also organzing events that allows you to experience unique sides of Copenhagen while you are here.</p>
                <p>We plan to organize tours like:</p>
                <ul>
                    <li>Trip to the free-town Christinia</li>
                    <li>Winter Boat Tours (if not too icy)</li>
                    <li>Experience hot steam baths in the Copenhagen harbour</li>
                    <li>... and much more!</li>
                </ul>

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





