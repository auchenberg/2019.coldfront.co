
import Header from '../components/header'

import Section from '../components/section'
import Layout from '../components/layout'
import Intro from '../components/intro'
import SpeakerList from '../components/speakerList'

export default () => (
    <Layout title="Speakers and workshop holders">
        <Section>
            <Intro
                title="Speakers and workshop holders"
                text="Our incredible line-up for ColdFront 2018 consisting of international world-class speakers and workshop holders."
            />
        </Section>

        <Section bright>
            <div className="speaker-section">
                <SpeakerList compact="false" />
            </div>
        </Section>        
        
        <style jsx>{`
            .speaker-section {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-gap: 60px;
                padding: 20px 0;
            }        

            @media (max-width: 600px) {
                .speaker-section {
                    grid-template-columns: repeat(2, 1fr);
                    grid-gap: 20px;
                }
            }

            `}
            </style>
    </Layout>
)


