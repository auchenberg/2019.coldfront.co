import Section from './section'

export default ({ children }) => (

    <div className="collaborators">
        <a name="collaborators"></a>

        <div className="row offset-md-2">

            <div className="col-md-4 offset-md-1">
                <h2 className="title">Collaborators</h2>
                <br />
                <br />
            </div>
        </div>

        <div className="row offset-md-3 list">
            <div className="col-md-4 col-8">
                <a href="https://www.zendesk.com/">
                    <img src="/static/images/logos/zendesk.svg" alt="zendesk-logo" className="logos" />
                </a>
            </div>

            <div className="col-md-3 offset-md-1 col-8">
                <a href="https://www.jayway.com/">
                    <img src="/static/images/logos/jayway.svg" alt="jayway-logo" className="logos jayway" />
                </a>
            </div>
        </div>


        <style jsx>{`

            .collaborators {
                margin-top: 200px;
                margin-bottom: 200px;
            }


            .title {
                font-size: 14px;
            }

            .logos {
                width: 100%;
                margin-bottom: 40px;
            }

            .list {
                margin-bottom: 40px;
            }

            @media (max-width: 1000px) {
                .collaborators {
                    margin-top: 0;
                    margin-bottom: 0;
                }

                .jayway {
                    width: 80%;
                }
            }

          `}</style>
    </div>
)
