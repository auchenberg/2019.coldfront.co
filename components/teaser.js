import Section from './section'

export default ({ children }) => (

    <Section>

        <div className="narrow teaser">
            <h2>A holistic conference about the future outlook for front-end and interfaces in Copenhagen, Denmark.</h2>
            <a href="https://coldfront.co/why-coldfront">Why are we making ColdFront?</a>
        </div>

        <style jsx>{`
            .teaser {
                padding-top: 100px;
                padding-bottom: 100px;
                
                h2 {
                    font-weight: normal;
                    font-size: 38px;
                }

                @media (max-width: 1000px) {
                    padding: 0;
                    h2 {
                        font-size: 30px;
                    }
                }
            }
          `}
        </style>
    </Section>
)
