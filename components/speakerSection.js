import Section from './section'
import SpeakerList from '../components/speakerList'
export default ({ children }) => (

    <Section>
        <div className="speaker-grid wide">
            <SpeakerList compact="false" />
        </div>

        <div className="narrow">
            <p>Stay tuned. Many more amazing speakers to be announced soon.</p>
        </div>

        <style jsx>{``}</style>
    </Section>
)
