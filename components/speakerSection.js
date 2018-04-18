import Section from './section'
import SpeakerCard from '../components/speakerCard'

export default ({ children }) => (

    <Section bright>
        <div className="narrow">
            <h2>Themes and speakers</h2>
            <p>ColdFront is about the future, so we have asked each of our amazing speakers to share their perspective on what the future brings for their area and theme.</p>

            <p>We can't wait. It's gonna be amazing.</p>
        </div>
        <div className="speaker-grid wide">
            <SpeakerCard
                speakerImage="/static/images/speakers/speaker-sara.jpg"
                speakerName="Sara Soueidan"
                speakerSubject="Sara Soueidan is a front-End Web Developer, and will cover future of real-world CSS."
                twitter="https://twitter.com/SaraSoueidan"
            />
            <SpeakerCard
                speakerImage="/static/images/speakers/speaker-shirley.jpg"
                speakerName="Shirley Wu"
                speakerSubject="Shirley Wu is a freelance Software Engineer, and will cover future of web visualizations."
                twitter="https://twitter.com/sxywu"
            />
            <SpeakerCard
                speakerImage="/static/images/speakers/speaker-brent.png"
                speakerName="Brent Vatne"
                speakerSubject="Brent Vatne is a Developer at Expo, core contributor to React Native, and will cover future of Expo and React Native"
                twitter="https://twitter.com/notbrent"
            />

            <SpeakerCard 
                speakerImage="/static/images/speakers/speaker-myles.jpg"
                speakerName="Myles Borins"
                speakerSubject="Myles Borins is a developer, musician, artist, and maker. They work for Google as a developer advocate serving the Node.js ecosystem. Myles cares about the open web and healthy communities." 
                twitter="https://twitter.com/mylesborins?lang=en" />

            <SpeakerCard
                speakerImage="/static/images/speakers/speaker-michael.jpg"
                speakerName="Michael Thomsen"
                speakerSubject="Michael Thomsen is a product manager at Google working on the Dart programming language, and Flutter, Google’s mobile UI framework to craft high-quality interfaces for iOS and Android. He has 20 years experience building tools and frameworks for developers, with a special focus on developer productivity and agility."
                twitter="https://twitter.com/MiSvTh/" />
        </div>

        <div className="narrow">
            <p>Stay tuned. Many more amazing speakers to be announced soon.</p>
        </div>

        {/* <p><a href="/speakers">See all the speakers here</a></p> */}

        <style jsx>{``}</style>
    </Section>
)
