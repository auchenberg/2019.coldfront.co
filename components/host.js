import Section from './section'

export default ({ children }) => (

    <Section bright>

        <div className="host">

            <div className="host-text">
                <h2>Your Host</h2>
                <h3>Phil Hawksworth<br />
                - Developer Relations at @Netlify</h3>
                <p>Phil Hawksworth will be your host and take you through the ColdFront experience. Phil spoke at the very first ColdFront, and has since hosted many of our favorite conferences around the world. We are luckiy to have him!</p>
                <p><a href="https://twitter.com/philhawksworth" target="_blank">Get to know him<img className="arrow" src="/static/images/arrow-white.svg" /></a></p>
            </div>

            <div className="host-avatar">
                <img className="avatar" src="/static/images/host-phill-h.jpg" />
            </div>

        </div>

        <div className="host small">

            <div className="host-text">
                <h2>Your interactive breakout session Host</h2>
                <h3>Hans Ravnkjær Larsen<br />
                - Head of Conference, Dansk IT</h3>
                <p>Hans Ravnkjær Larsen from Dansk IT will be your interactive session host, and will faciliate the debates in our interactive breakout sessions during the conference.</p>
                <p><a href="https://twitter.com/hrlarsen_dk" target="_blank">Get to know Hans<img className="arrow" src="/static/images/arrow-white.svg" /></a></p>
            </div>

            <div className="host-avatar">
                <img className="avatar" src="/static/images/host-hans.jpg" />
            </div>

            </div>        

        <style jsx>{`

            .host{
                @media(min-width: 1000px){
                    display: flex;

                    .host-text{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }

                    .host-avatar{
                        margin-right: 100px;
                    }
                }
            }
            h2{
                font-size: 24px;
            }
            h3{
                font-size: 38px;
            }

            .host-avatar {
                .avatar {
                    width: 389px;
                    order: 0;
                }
            }

            .host-text{
                order: 1;
            }

            .arrow {
                margin-left: 20px;
                width: 14px;
            }

            .small {
                margin-top: 50px;
            }

            .small .avatar {
                margin-left: 188px;
                width: 200px;
            }

            

          `}</style>
    </Section>
)
