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
            <div className="col-md-4">
                <a href="https://www.zendesk.com/">
                    <img src="/static/images/logos/zendesk.svg" alt="zendesk-logo" className="logos" />
                </a>
            </div>

            <div className="col-md-3 offset-md-1">
                <a href="https://www.jayway.com/">
                    <img src="/static/images/logos/jayway.svg" alt="jayway-logo" className="logos" />
                </a>
            </div>
        </div>


        <style jsx>{`

            .collaborators {
                margin-bottom: 200px;
            }

            .title {
                font-size: 14px;
            }

            .logos {
                width: 100%;
            }

            .list {
                margin-bottom: 40px;
            }

          `}
        </style>
    </div>
)
