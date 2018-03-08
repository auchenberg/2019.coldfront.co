import Link from 'next/link'
import WideSection from '../../components/wideSection'
import Layout from '../../components/layout'
import SpeakerSection from '../../components/speakerSection'

export default () => (
    <Layout>

        <div className="speaker-card">
            <div className="speaker-avatar col-md-12 col-xs-12">
                <div className="overlay-shadow"></div>
            </div>
        </div>

        <WideSection>
            <Link href="/">
            <img className="arrow cursor-pointer" src="/static/images/arrow-purple.svg" /></Link>
            <h2 className="font-bitblox">TALK: BRIDGING THE WEB AND THE PHYSICAL WORLD</h2>
            <p className="font-bitblox">Sara Soueidan</p>
            <p className="font-bitblox">Front-End Web Developer</p>

            <div className="contact-links font-bitblox">
                <div>
                    <img src="../static/images/twitter.svg" />
                    <p>@sarasouleidan</p>
                </div>

                <div>
                    <img src="../static/images/twitter.svg" />
                    <p>github</p>
                </div>

            </div>

            <p>
            Sara Soueidan is a Lebanese freelance front-end web developer working with companies across the globe, building clean, responsive front-ends for Web sites and applications focused on accessibility, progressive enhancement and performance. She also runs workshops on front-end development and writes technical articles on <a href="https://www.sarasoueidan.com/">her blog</a> and for various big publications. Sara wrote the Codrops CSS Reference, co-authored the Smashing Book 5, and has been voted the Developer of the Year in the 2015 net awards.
            </p>         


                
        </WideSection>

        <SpeakerSection />

        <style jsx>{`

            .arrow {
                transform: rotate(180deg);
                position: absolute;
                top: -120px;
            }


            .speaker-card {
                width: 30%;
                margin-bottom: -10%;
                margin-left: 10px;
            }

            .speaker-avatar {
                background-image: url(/static/images/speakers/speaker-sara2.jpg);
                background-size: cover;
                box-shadow: 40px 80px 80px 20px rgba(0, 0, 0, 0.5);
                height: 30vw;
                position: relative;

                .overlay-shadow {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: linear-gradient(to top,#1c1c2d 0%,transparent);
                }
            }

            .contact-links {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: 50%;
                margin-bottom: 10px;
                
                div {
                    display: flex;
                    flex-direction: row;
                    align-items: center;

                    img {
                        width: 30px;
                    }

                    p {
                        margin: 0;
                        margin-left: 10px;
                    }
                }
            }

            `}
        </style>

    </Layout>

)
