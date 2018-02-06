import Section from './section'

export default ({ children }) => (

    <div className="collaborators">
        <a name="collaborators"></a>

        <div className="row">
            <div>
                <p>Collaborators</p>
            </div>

            <div className="collab-wrapper">

                <div className="zendesk-wrapper">
                    <a href="https://www.zendesk.com/">
                        <img src="/static/images/logos/zendesk-medium-white.png" alt="zendesk-logo"/>
                    </a>
                </div>

                <div className="jayway-wrapper">
                    <a href="https://www.jayway.com/">
                        <img src="/static/images/logos/jayway-only.png" alt="jayway-logo"/>
                    </a>
                </div>

            </div>



            {/*<div className="hey">
                <div className="col-md-2 offset-md-4 d-none d-lg-block">
                    <img src="/static/images/kenneth.png" className="avatar" />
                </div>

            </div>*/}

        </div>


        <style jsx>{`
            .collaborators {
                padding: 15% 0;
                margin: 0 30%;

                p {
                    font-family: 'bitbloxmonospaced';
                }
            }

            .collab-wrapper {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    width: 100%;
            }

            .zendesk-wrapper {
                display: flex;
                align-items: center
            }

            .row {
                margin-bottom: 40px;
            }

            .avatar {
                width: 100%;
            }

            @media (max-width: 1000px) {
                .collaborators {
                  padding: 40px 0;
                  margin: 0;

                  .row {
                    margin-left: 0!important;
                    margin-right: 0!important;
                    margin: 0 !important;
                  }
                }

                .collab-wrapper {
                    flex-direction: column;

                    div {
                        text-align: center;
                        margin-bottom: 5%;
                        img {
                            width: 60%
                        }
                    }
                }
            }
          `}
        </style>
    </div>
)
