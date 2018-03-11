import Section from './section'
import SpeakerCard from '../components/speakerCard'

export default ({ children }) => (

    <Section>

        <Section>
            <div className="offset-md-3">
                <h2>Themes and speakers</h2>
                <p>ColdFront is about the future, so we have asked our speakers share their perspective on the respective themes.</p>
            </div>

            <div className="speaker-grid">
                <SpeakerCard
                    speakerImage="/static/images/speakers/speaker-sara2.jpg"
                    speakerName="Sara Soueidan"
                    speakerSubject="Future of SVG and scalable graphics"
                    speakerPosition="Front-End Web Developer"
                    speakerTwitterLink="https://twitter.com/SaraSoueidan"
                />
                <SpeakerCard
                    speakerImage="/static/images/speakers/speaker-shirley.jpg"
                    speakerName="Shirley Wu"
                    speakerSubject="Future of web visualizations"
                    speakerPosition="Freelance Software Engineer"
                    speakerTwitterLink="https://twitter.com/sxywu"
                />
                <SpeakerCard
                    speakerImage="/static/images/speakers/myles.jpg"
                    speakerName="Myles Bonris"
                    speakerPosition="Developer Advocate at Google"
                    speakerSubject="Future of Node.js & full-stack"
                />
                <SpeakerCard
                    speakerImage="/static/images/speakers/blank.png"
                    speakerName="To be announced!"
                    speakerPosition=""
                />
            </div>

            {/* <p><a href="/speakers">See all the speakers here</a></p> */}

        </Section>

        <style jsx>{`

                .speaker-grid {
                    width: 75%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }

          `}</style>
    </Section>
)
