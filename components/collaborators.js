import Section from './section'

export default ({ children }) => (

    <Section compact>
        <a name="collaborators"></a>

        <div className="row">
            <div className="col-md-8 offset-md-2">
                <h2 className="title">Collaborators</h2>
                <p>ColdFront is organised in collaboration with</p>
            </div>
        </div>

        <div className="row">
            <div className="offset-md-3 col-7">
                <div className="row list">
                    <div className="col-md-4">
                        <a href="https://www.zendesk.com/">
                            <img src="/static/images/logos/zendesk.svg" alt="zendesk-logo" className="logos" />
                        </a>
                    </div>

                    <div className="col-md-3 offset-md-1">
                        <a href="https://www.jayway.com/">
                            <img src="/static/images/logos/jayway.svg" alt="jayway-logo" className="logos jayway" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-8 offset-md-2">
                <p>Want be a part of ColdFront?  Contact us at <a href="mailto:hello@coldfront.co">hello@coldfront.co</a></p>
            </div>
        </div>

        <style jsx>{`
            .logos {
                width: 100%;
                margin-bottom: 40px;
            }

            .list {
                margin-bottom: 40px;
                margin-top: 40px;
            }

            @media (max-width: 1000px) {
                .list {
                    margin: 0;
                }

                .jayway {
                    width: 80%;
                }
            }

          `}</style>
    </Section>
)
