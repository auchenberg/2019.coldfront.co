import Section from './section'
import SpeakerCard from '../components/speakerCard'

export default ({ children }) => (

    <Section bright>

        <h2>Themes and speakers</h2>
        <p>ColdFront is about the future, so we have asked each of our amazing speakers to share their perspective on what the future brings for their area and theme.</p>

        <p>We can't wait. It's gonna be amazing.</p>

        <div className="speaker-grid">
            <SpeakerCard
                speakerImage="/static/images/speakers/speaker-sara2.jpg"
                speakerName="Sara Soueidan"
                speakerSubject="future of SVG and scalable graphics"
                speakerPosition="front-End Web Developer"
                twitter="https://twitter.com/SaraSoueidan"
            />
            <SpeakerCard
                speakerImage="/static/images/speakers/speaker-shirley.jpg"
                speakerName="Shirley Wu"
                speakerSubject="future of web visualizations"
                speakerPosition="freelance Software Engineer"
                twitter="https://twitter.com/sxywu"
            />
            <SpeakerCard
                speakerImage="/static/images/speakers/speaker-brent.png"
                speakerName="Brent Vatne"
                speakerPosition="Developer at Expo, core contributor to React Native"
                speakerSubject="future of Expo and React Native"
                twitter="https://twitter.com/notbrent"
            />
        </div>

        <p>Stay tuned. Many more amazing speakers to be announced soon.</p>

        {/* <p><a href="/speakers">See all the speakers here</a></p> */}



        <style jsx>{`
            .speaker-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-gap: 40px;

                padding: 100px 0;
            }

            @media (max-width: 1000px) {

                .speaker-grid {
                    padding: 40px 0;
                    grid-template-columns: repeat(2, 1fr);
                }

            }

          `}</style>
    </Section>
)
