import Section from './section'
import SpeakerCard from '../components/speakerCard'

export default ({ children }) => (

    <Section>

        <Section>
            <h2 className="offset-md-3" style={{paddingLeft: 15}}>Speakers</h2>

            <div className="speaker-grid">
                <SpeakerCard 
                    speakerImage="/static/images/speakers/speaker-sara2.jpg"
                    speakerName="Sara Soueidan" 
                    speakerPosition="Front-End Web Developer" 
                    speakerTwitterLink="https://twitter.com/SaraSoueidan" 
                />
                <SpeakerCard
                    speakerImage="/static/images/speakers/speaker-shirley.jpg"
                    speakerName="Shirley Wu" 
                    speakerPosition="Freelance Software Engineer" 
                    speakerTwitterLink="https://twitter.com/sxywu"
                />
                <SpeakerCard
                    speakerImage="/static/images/speakers/speaker-sara.jpg"
                    speakerName="Sara Soueidan" 
                    speakerPosition="Front-End Web Developer" 
                    speakerTwitterLink="https://twitter.com/SaraSoueidan"
                />
            </div>

        </Section>

        <style jsx>{`

                .speaker-grid {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }

          `}</style>
    </Section>
)
