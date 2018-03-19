
import WideSection from '../../components/wideSection'
import Layout from '../../components/layout'
import Intro from '../../components/intro'
import ListItem from '../../components/listItem'

export default () => (
    <Layout>

        <Intro title="Our Advisory board" img="/static/images/splash-advisory-board.jpg" />

        <WideSection>
            <div className="page-advisory-board">
                <p>ColdFront has an Advisory Board consisting of world renowned experts and partners from the leading companies in our industry. The role of the board is to advice and help the ColdFront team navigate in a field that's changing faster than ever.</p>
            </div>
        </WideSection>

        <div className="list">
            <ul className="row">

                <ListItem title="Robert Nymann"
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

                <ListItem title="Rachel Nabours"
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
                    body=""
                    img="/static/images/advisory-board/advisor-olga.jpg"
                    affiliation="Zendesk"
                    size="4"
                />

                <ListItem title="Simon Engelbretch"
                    body=" "
                    img="/static/images/advisory-board/advisor-simon.jpg"
                    affiliation="Sharp"
                    size="4"
                />

                <ListItem title="Ulrik Bech Hald"
                    body=" "
                    img="/static/images/advisory-board/advisor-ulrik.jpg"
                    affiliation="Jayway"
                    size="4"
                />

                <ListItem title="Mikkel Rasmussen"
                    body=" "
                    img="/static/images/advisory-board/advisor-mikkel.jpg"
                    affiliation="Jayway"
                    size="4"
                />
            </ul>
        </div>

        <style jsx>{`


            .list {
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
            }

            `}
        </style>
    </Layout>
)





