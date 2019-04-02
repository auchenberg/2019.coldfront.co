import Section from './section'

export default ({ children }) => (

    <Section bright>

        <div className="host">

            <div className="host-text">
                <h2>Your Host</h2>
                <h3>Phil Hawksworth<br />
                - Principal Developer Advocate at <a href="https://www.netlify.com/">Netlify</a></h3>
                
                <p>Phil Hawksworth will be your host and take you through the ColdFront experience. Phil spoke at the very first ColdFront, and has since hosted many of our favorite conferences around the world. We are luckiy to have him!</p>
                <p><a className="btn btn-primary-inversed" href="https://twitter.com/philhawksworth" target="_blank">Get to know him</a></p>
            </div>

            <div className="host-avatar">
                <img className="avatar" src="/static/images/host-phil.jpg" />
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
