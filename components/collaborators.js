import Section from './section'

export default ({ children }) => (

    <Section compact>
        <a name="collaborators"></a>

        <div className="row">
            <div className="col-md-8 offset-md-3 font-bitblox">
                <p>ColdFront is organised in collaboration with:</p>
            </div>
        </div>

        <div className="row">
            <div className="offset-md-3 col-8">
                <div className="row list">
                    <div className="list-item col-md-4">
                        <a href="https://www.zendesk.com/">
                            <img src="/static/images/logos/zendesk.svg" alt="zendesk-logo" className="logos" />
                        </a>
                    </div>

                    <div className="list-item col-md-3 offset-md-1">
                        <a href="https://www.jayway.com/">
                            <img src="/static/images/logos/jayway.svg" alt="jayway-logo" className="logos jayway" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-8 offset-md-3 font-bitblox">
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
                margin-left: 0;
                margin-right: 0;
            }

            .list-item {
                padding: 0;
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
