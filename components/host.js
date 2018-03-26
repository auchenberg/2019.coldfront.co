import Section from './section'

export default ({ children }) => (

    <Section>

        <div className="row">

            <div className="host-avatar col-md-4  col-xs-12">
                <img className="avatar" src="/static/images/host-phil.jpg" />
                <div className="text">
                    <div>
                        <h3>PHIL HAWKSWORTH</h3>
                        <p>Developer Relations at @Netlify</p>
                    </div>
                    <a href="https://twitter.com/philhawksworth" target="_blank"><img className="arrow" src="/static/images/arrow-purple.svg" /></a>
                </div>
            </div>

            <div className="col-md-4 offset-md-1 col-xs-12 host-text">
                <h2>Your Host</h2>
                <p>Phil Hawksworth will be your host and take you through the ColdFront experience. Phil spoke at the very first ColdFront, and has since hosted many of our favorite conferences around the world. We are luckiy to have him!</p>
            </div>

        </div>

        <style jsx>{`

            .host-avatar {
                position: relative;

                .avatar {
                    height: 300px;
                }
                .text {
                    position: absolute;
                    bottom: 0%;
                    left: 20px;
                    right: 20px;

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;

                }
            }

            .arrow {
                width: 40px;
            }

            @media (max-width: 1000px) {

                .host-avatar {
                    height: 222px;
                }
            }

          `}</style>
    </Section>
)
