import WideSection from '../components/wideSection'
import Layout from '../components/layout'
import Intro from '../components/intro'
import ListItem from '../components/listItem'

export default () => (
    <Layout>

        <Intro title="About ColdFront" img="/static/images/splash-about.png" />

        <WideSection>
            <p>We started <a href="https://kenneth.io/blog/2014/04/09/introducing-coldfront-conference/">ColdFront back in 2014</a> to flourish the front-end community and to put Copenhagen the global front-end map. </p>
            <p>Back in 2014 we had travel to other major european cities such as Amsterdam, London, Berlin, London, New York and San Francisco to be a part of our global front-end community, but with ColdFront we changed that.</p>
            <p>ColdFront is a conference for front-end developers who are passionate about building user experiences with the latest and most relevant technologies. Over the past years the term “front-end” has transitioned from meaning building experiences for the web, to be covering a broad span of platforms, devices and runtimes.</p>
            <p>ColdFront is a unique conference that aims to be at the forefront of technology curve by providing inspirational content about tomorrow's challenges and technologies.</p>

            <h3>Our ColdFront name</h3>
            <p>The name ColdFront expresses the aim to create events that’s on the forefront of the future, and is a mix of the words “cold” as a reference to the cold Scandinavia climate  and “front” referring to the front-end disciplin.</p>

            <p>Earlier editions: <a href="https://2017.coldfront.co">ColdFront 2017</a>, <a href="https://2016.coldfront.co">ColdFront 2016</a>, <a href="https://2015.coldfront.co">ColdFront 2015</a>, <a href="https://2014.coldfront.co">ColdFront 2014</a></p>
        </WideSection>

        <Intro title="Our principles and manifest" img="/static/images/splash-manifest.jpg" />

        <WideSection>
            <p>To guide the content for ColdFront we have outlined the following principles that helps us decide what content that is relevant for the conference:</p>

            <h4>Our format</h4>
            <p>ColdFront is a single-track conference, and a ColdFront talk is maximum 45 minutes long. After each 2 session block, a 15 min break will follow to allow attendees to stretch their legs.</p>

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
        </WideSection>

        <Intro title="Our team" img="/static/images/splash-team.jpg" />

        <div className="organizers">
            <ul className="row">
                <ListItem title="Kenneth Auchenberg"
                    body="Kenneth is a Program Manager at Microsoft and lives in Seattle, WA, where works on Visual Studio Code. He's a Global Shaper for Word Economic Forum, serves on multiple advisory boards, and co-founded ColdFront in 2014."
                    img="/static/images/team/team-kenneth.jpg"
                />

                <ListItem title="Michael Christiansen"
                    body="Joined ColdFront as co-organizer in 2017. Besides he is co-founder of Design Matters focusing on new movements in digital design. Finally he works a lot with membership organizations helping them with the digital transformation."
                    img="/static/images/team/team-michael.jpg"
                />

                <ListItem title="Christina Hanna"
                    body="Head of design since 2015."
                    img="/static/images/team/team-christina.jpg"
                />

                <ListItem title="Jessica Tremblay"
                    body="Communication and Community Manager"
                    img="/static/images/team/team-jessica.jpg"
                />
            </ul>
        </div>

        <Intro title="Our advisory board" img="/static/images/splash-advisory-board.jpg" />

        <WideSection>
            <p>ColdFront has an Advisory Board consisting of world renowned experts and partners from the leading companies in our industry. The role of the board is to advice and help the ColdFront team navigate in a field that's changing faster than ever.</p>

            <p><a id="location-link" href="/about/advisory-board">Read more about our Advisory Board here</a></p>
        </WideSection>

        <Intro title="Press and media" img="/static/images/splash-media.jpg" />

        <WideSection>
            <p>Our story, logo and images at your disposal.</p>
        </WideSection>

        <style jsx>{`

            .organizers {
                padding: 50px 0 0 0;

                ul {
                    list-style: none;
                    padding-top: 50px;
                }



                .kenneth {
                    background-image: url();
                }

                .michael {
                    background-image: url(/static/images/team/team-michael.jpg);
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
            }

            `}
        </style>

    </Layout>

)
