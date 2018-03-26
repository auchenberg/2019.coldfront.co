import Section from './section'

export default ({ children }) => (

    <Section bright>
        <a name="collaborators"></a>

        <div className="row">
            <div className="col-md-8">
                <h3>ColdFront is organised in collaboration with:</h3>
            </div>
        </div>

        <div className="row">
            <div className="col-12">
                <div className="row list">
                    <div className="list-item col-md-4">
                        <a href="https://www.zendesk.com/">
                            <img src="/static/images/logos/zendesk.svg" alt="zendesk-logo" className="logos" />
                        </a>
                    </div>

                    <div className="list-item col-md-4 offset-md-1">
                        <a href="https://www.jayway.com/">
                            <img src="/static/images/logos/jayway.svg" alt="jayway-logo" className="logos jayway" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-8">
                <p>Want be a part of ColdFront?  Contact us at <a href="mailto:hello@coldfront.co">hello@coldfront.co</a></p>
            </div>
        </div>

        <style jsx>{`
            .logos {
                width: 100%;
            }

            .list {
                margin-bottom: 40px;
                margin-top: 40px;
                margin-left: 0;
                margin-right: 0;
            }

            .list-item {
                padding: 40px 60px;
                background: #020824;

                display: flex;
                align-items: center;
                margin-bottom: 40px;
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
