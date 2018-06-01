
import Section from '../components/section'

export default ({ children, props }) => (

    <Section>

        <div className="wideSection">
            { children }
        </div>


        <style jsx>{`
        :global(.wideSection) {
            padding-top: 100px;
            padding-bottom: 100px;
        }

        @media (max-width: 1000px) {
            :global(.wideSection) {
                padding-top: 0;
                padding-bottom: 0;
            }
        }

        `}
        </style>
    </Section>
)
