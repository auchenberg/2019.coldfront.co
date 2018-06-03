import Section from './section'
import SpeakerList from '../components/speakerList'

export default ({ children }) => (

    <Section>
        <div className="narrow">
            <a id="speakers"></a> 
            <h2>Speakers, talks, workshops, and themes</h2>
            <p>ColdFront is about the future, so we have asked each of our amazing speakers and workshop holders to share their perspective on what the future brings for their area and theme.</p>
            <p>We can't wait. It's gonna be amazing.</p>
        </div>

        <div className="speaker-overview">
            <SpeakerList compact="true" />
        </div>

        <div className="narrow">
            <p><a href="/speakers">Read more all the details about our speakers here</a></p>
        </div>

        <style jsx>{`
            .speaker-overview {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                grid-gap: 60px;
                padding: 100px 0;
            }        

            @media (max-width: 600px) {
                .speaker-overview {
                    grid-template-columns: repeat(2, 1fr);
                    grid-gap: 20px;
                }
            }

        `}</style>
    </Section>
)
