import WideSection from '../components/wideSection'
import Layout from '../components/layout'

export default () => (
    <Layout>

        <div className="image-about image-overlay d-none d-md-block">
            <div className="overlay-shadow"></div>
        </div>

        <WideSection>
            <div className="page-about">
                <h2>About ColdFront</h2>
                <p>We started <a href="https://kenneth.io/blog/2014/04/09/introducing-coldfront-conference/">ColdFront back in 2014</a> to flourish the front-end community and to put Copenhagen the global front-end map. </p>                
                <p>Back in 2014 we had travel to other major european cities such as Amsterdam, London, Berlin, London, New York and San Francisco to be a part of our global front-end community, but with ColdFront we changed that.</p>                
                <p>ColdFront is a conference for front-end developers who are passionate about building user experiences with the latest and most relevant technologies. Over the past years the term “front-end” has transitioned from meaning building experiences for the web, to be covering a broad span of platforms, devices and runtimes.</p>
                <p>ColdFront is a conference that aims to be at the forefront of technology curve by providing inspirational content about tomorrow's challenges and technologies.</p>
                <h3>Our format</h3>
                <p>ColdFront is a single-track conference, and a ColdFront talk is maximum 45 minutes long. After each 2 session block, a 15 min break will follow to allow attendees to stretch their legs.</p>
            </div>
        </WideSection>

        <WideSection>
            <h3>Our principles and manifest</h3>

            <p>To guide the content for ColdFront we have outlined the following principles that helps us decide what content that is relevant for the conference.</p>

            <blockquote>
                <h4>Why instead of how</h4>
                <p>We want to hear talks that focuses on the “why” instead of the practical “how”. By this we mean that we would rather hear a talk that provides the reasons and perspective on a given technology or framework, than the “how to” on how to use the technology or framework. </p>

                <h4>Perspective over tutorials</h4>
                <p>We want talks that provides perspective, new ways of thinking, and puts today’s landscape into the perspective of tomorrow. If the content can be read in a tutorial, it’s not a ColdFront talk.</p>

                <h4>Technologies and trends</h4>
                <ul>
                    <li>Web platform / browsers / W3C / WHATWG / runtimes</li>
                    <li>Mobile platforms / trends / runtimes</li>
                    <li>React / VueJS / Modern front-end frameworks</li>
                    <li>React Native / NativeScript / Platforms for native apps using web technology</li>
                    <li>CSS / Precompilers / Abstractions for UI styling</li>
                    <li>Animations / ways to bring life to front-end experiences</li>
                    <li>Tooling / productivity / workflows / production learnings / war stories</li>
                    <li>Devices / form factors / IoT / emerging markets</li>
                    <li>Human aspects of software development / management / process</li>
                    <li>Music / arts / creative coding / design</li>
                </ul>
            </blockquote>

        </WideSection>



        <WideSection>
                <div className="page-about">

                    <h3>The ColdFront name</h3>
                    <p>The name ColdFront expresses the aim to create events that’s on the forefront of the future, and is a mix of the words “cold” as a reference to the cold Scandinavia climate  and “front” referring to the front-end disciplin.</p>

                    <h3>Previous ColdFronts</h3>
                    <ul>
                        <li><a href="https://2017.coldfront.co">ColdFront 2017</a></li>
                        <li><a href="https://2016.coldfront.co">ColdFront 2016</a></li>
                        <li><a href="https://2015.coldfront.co">ColdFront 2015</a></li>
                        <li><a href="https://2014.coldfront.co">ColdFront 2014</a></li>
                    </ul>
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
                        <p>Joined ColdFront as co-organizer in 2017. Besides he is co-founder of Design Matters focusing on new movements in digital design. Finally he works a lot with membership organizations helping them with the digital transformation.</p>
                    </div>
                </li>
            </ul>

        </div>

        <style jsx>{`

            blockquote {
                margin-left: 40px;
                margin-bottom: 40px;
            }

            .image-about {
                background-image:url('/static/images/the-team.jpg');
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
