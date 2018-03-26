import Section from './section'

export default ({ children }) => (

    <Section>

        <div className="col-md-10 col-xs-12 teaser">
            <h2>A holistic conference about the future outlook for front-end and interfaces in Copenhagen, Denmark.</h2>
            <a href="/why-coldfront">Why we are making this conference?</a>
        </div>

        <style jsx>{`
            .teaser {
                padding: 100px 0;
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
