import WideSection from '../components/wideSection'
import Section from '../components/section'
import Layout from '../components/layout'
import Intro from '../components/intro'
import ListItem from '../components/listItem'

export default () => (
    <Layout title="About">

        <Section>
            <Intro
                title="About"
                text="ColdFront is a unique conference that aims to be at the forefront of technology curve by providing inspirational content about tomorrow's challenges and technologies."
                img="/static/images/splash-panel.jpg"
            />

            <div className="narrow">
                <p>We started <a href="https://kenneth.io/blog/2014/04/09/introducing-coldfront-conference/">ColdFront back in 2014</a> to flourish the front-end community and to put Copenhagen the global front-end map. </p>
                <p>Back in 2014 we had travel to other major european cities such as Amsterdam, London, Berlin, London, New York and San Francisco to be a part of our global front-end community, but with ColdFront we changed that.</p>
                <p>ColdFront is a conference for front-end developers who are passionate about building user experiences with the latest and most relevant technologies. Over the past years the term “front-end” has transitioned from meaning building experiences for the web, to be covering a broad span of platforms, devices and runtimes.</p>

                <h3>The ColdFront name</h3>
                <p>The name ColdFront expresses the aim to create events that’s on the forefront of the future, and is a mix of the words “cold” as a reference to the cold Scandinavia climate  and “front” referring to the front-end disciplin.</p>

                <p>Earlier editions: <a href="https://2017.coldfront.co">ColdFront 2017</a>, <a href="https://2016.coldfront.co">ColdFront 2016</a>, <a href="https://2015.coldfront.co">ColdFront 2015</a>, <a href="https://2014.coldfront.co">ColdFront 2014</a></p>
            </div>
        </Section>

        <Section bright>
            <Intro
                title="Our principles and manifest"
                text="To guide the content for ColdFront we have outlined the following principles that helps us decide what content that is relevant for the conference:"
            />

            <div className="narrow">
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
            </div>
        </Section>

        <Section>
            <Intro
                title="The team"
                text="ColdFront is organized by a diverse international team located across 3 cities, in 3 timezones, on 2 continents."

            />

            <div className="organizers">
                <div className="row col-12">
                    <ul className="team-list">
                        <ListItem title="Kenneth Auchenberg"
                            label="Organizer"
                            body="Kenneth is a Program Manager at Microsoft and lives in Seattle, WA, where works on Visual Studio Code. He's a Global Shaper for World Economic Forum, serves on multiple advisory boards, and co-founded ColdFront in 2014."
                            img="/static/images/team/team-kenneth.jpg"
                        />

                        <ListItem title="Michael Christiansen"
                            label="Organizer"
                            body="Joined ColdFront as co-organizer in 2017. Besides he is co-founder of Design Matters focusing on new movements in digital design. Finally he works a lot with membership organizations helping them with the digital transformation."
                            img="/static/images/team/team-michael.jpg"
                        />

                        <ListItem title="Jessica Tremblay"
                            label="Communication and Community"
                            body="Jessica Tremblay is a software designer and front end developer for IBM Design and currently lives in Austin, TX.  She is one of the original organizers for FEDucation: a global, internal, front end knowledge sharing program that is part of the ever-growing FED@IBM initiative."
                            img="/static/images/team/team-jessica.jpg"
                        />

                        <ListItem title="Christina Hanna"
                            label="Design"
                            body="Christina is a digital product and brand identity designer for Conferize. In her search for bringing people together in meaningful ways, she has also been designing the identity for ColdFront since 2015 and is a part of organising the biggest monthly design meetup in Copenhagen."
                            img="/static/images/team/team-christina.jpg"
                        />
                    </ul>
                </div>
            </div>
        </Section>

        <Section bright>
            <Intro
                title="Our advisory board"
                text="ColdFront is adviced by an Advisory Board consisting of world renowned experts and partners from the leading companies in our industry."
            />

            <div className="row col-12">
                <ul className="advisory-board-list">
                    <ListItem title="Robert Nyman"
                        body="Robert is a strong believer in the Open Web, and has been working since 1999 with Front End development. He is currently the Global Lead for Programs & Initiatives, Web Developer Relations, at Google, and loves to travel and meet people!"
                        img="/static/images/advisory-board/advisor-robert.jpg"
                        size="4"
                    />

                    <ListItem title="Jessica Lord"
                        body="Jessica is a web developer focusing on open source tools to make the web more approachable; she is active in the Node.js and Electron communities. Her project Git-it is one of the top 10 most contributed-to projects on GitHub."
                        img="/static/images/advisory-board/advisor-jessica.png"
                        size="4"
                    />

                    <ListItem title="Kenneth Rohde Christiansen"
                        body="Kenneth is a Web Platform Architect from Denmark working at the Intel Open Source Technology Center. He is a key team member in growing Intel's web involvement."
                        img="/static/images/advisory-board/advisor-kenneth.png"
                        size="4"
                    />

                    <ListItem title="Rachel Nabors"
                        body="Rachel Nabors (rachelnabors.com) began telling stories online as a teenager with her award-winning web comics (rachelthegreat.com). Her love of web technologies transformed into a career in front end development, where she has worked with Mozilla, the W3C, and Microsoft to build the web forward."
                        img="/static/images/advisory-board/advisor-rachel.jpg"
                        size="4"
                    />

                    <ListItem title="Sune Sloth Simonsen"
                        body="I'm currently a Software Engineer at Zendesk where I do front-end development in React, previously I was at One.com building calendar and webmail for thousands of concurrent users. I'm running a couple of open source projects most notably unexpected.js.org. "
                        img="/static/images/advisory-board/advisor-sune.jpg"
                        affiliation="Zendesk"
                        size="4"
                    />

                    <ListItem title="Olga Leus"
                        body="A Software Engineer at Zendesk, passionate about various web technologies including React and GraphQL. Previously at Spotify I helped to rewrite the Desktop client architecture and make it a better place for music."
                        img="/static/images/advisory-board/advisor-olga.jpg"
                        affiliation="Zendesk"
                        size="4"
                    />

                    <ListItem title="Mikkel Rasmussen"
                        body="I am managing our Danish Jayway Studio being responsible for Strategy, advisory, sales, business development and our 35 consultants.  I am passionate about inspiring and understanding other people. "
                        img="/static/images/advisory-board/advisor-mikkel.jpg"
                        affiliation="Jayway"
                        size="4"
                    />

                    <ListItem title="Simon Engelbrecht"
                        body="Simon is CEO & Founder of SKARP.DK a digital software consulting agency in Copenhagen. 20+ years experience in building user friendly digital products in Denmark and EastAfrica"
                        img="/static/images/advisory-board/advisor-simon.jpg"
                        affiliation="Sharp"
                        size="4"
                    />

                    <ListItem title="Ulrik Bech Hald"
                        body="Android developer and competence lead at Jayway's Copenhagen office. I have a background in embedded and IoT, involved in development of several OEM products. Passionate about reactive programming, open source and tech in general."
                        img="/static/images/advisory-board/advisor-ulrik.jpg"
                        affiliation="Jayway"
                        size="4"
                    />
                </ul>
            </div>
        </Section>

        <style jsx>{`
            h4 {
                margin: 40px 0;
                font-size: 34px;
            }`}
        </style>

    </Layout>

)
