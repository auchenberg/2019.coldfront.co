import WideSection from '../components/wideSection'
import Layout from '../components/layout'

export default () => (
    <Layout>

        <div className="image-diversity image-overlay d-none d-md-block">
            <div className="overlay-shadow"></div>
        </div>

        <WideSection>
                <div className="page-about">
                    <h2>DIVERSITY SCHOLARSHIPS</h2>

                    <p>We started ColdFront back in 2014 to flourish the front-end community and to put Copenhagen the global front-end map</p>

                    <p>Back in 2014 we had travel to other major european cities such as Amsterdam, London, Berlin, London, New York and San Francisco to be a part of our global front-end community, but with ColdFront we changed that.</p>

                    <p>ColdFront is a conference for front-end developers who are passionate about building user experiences with the latest and most relevant technologies. Over the past years the term “front-end” has transitioned from meaning building experiences for the web, to be covering a broad span of platforms, devices and runtimes.</p>

                    <p>ColdFront is a conference that aims to be at the forefront of technology curve by providing inspirational content about tomorrow's challenges and technologies.</p>



                </div>
        </WideSection>

        <div className="organizers">
            <div className="row">
                <div className="col-md-8 offset-md-3">
                    <h2>Organizers</h2>
                </div>
            </div>

            <ul className="row">
                <li className="col-md-6 kenneth">
                    <div className="overlay"></div>
                    <div className="text">
                        <h3>Kenneth Auchenberg</h3>
                        <p>Kenneth is a Program Manager at Microsoft and lives in Seattle, WA, where works on Visual Studio Code. He's a Global Shaper for Word Economic Forum, serves on multiple advisory boards, and co-founded ColdFront in 2014.</p>
                    </div>
                </li>

                <li className="col-md-6 michael">
                    <div className="overlay"></div>
                    <div className="text">
                        <h3>Michael Christiansen</h3>
                        <p>Joined ColdFront as co-organizer in 2017. Besides Michael is co-founder of Design Matters focusing on digital design, Medlemsorganisation a danish knowledge helping with digital transformation and finally Indie vid & co organizing and searching for independent knowledged.</p>
                    </div>
                </li>
            </ul>

        </div>

        <style jsx>{`

            blockquote {
                margin-left: 40px;
                margin-bottom: 40px;
            }

            .image-diversity {
                background-image:url('/static/images/diversity.jpg');
                height: 500px;
                margin-bottom: -200px;
            }

            .organizers {
                padding: 50px 0 0 0;

                ul {
                    list-style: none;
                    padding-top: 50px;
                }

                li {
                    height: 500px;
                    background-repeat: no-repeat;
                    background-size: cover;

                    display: flex;
                    align-items: flex-end;
                    justify-content: center;

                    padding: 20px;
                    position: relative;
                }

                .overlay {
                    background-image: linear-gradient(to top, #1c1c2d, rgba(28, 28, 45, 0.80) 100%, rgba(108, 28, 45, 0));
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                }

                .text {
                    position: relative;
                    z-index: 2;
                    padding: 15px;
                }

                .kenneth {
                    background-image: url(/static/images/kenneth.jpg);
                }

                .michael {
                    background-image: url(/static/images/michael.jpg);
                }

            }

            @media (max-width: 1000px) {
                .organizers {
                    padding-top: 20px;;

                    ul {
                        padding: 0;
                    }
                }

                .organizers li {
                    padding: 0;
                    height: 300px;
                }

                blockquote {
                    margin-left: 20px;
                    margin-bottom: 20px;
                }
            }

            `}
        </style>

    </Layout>

)
