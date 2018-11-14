import Section from '../components/section'
import Layout from '../components/layout'
import Intro from '../components/intro'

export default () => (
    <Layout title="ColdFront Social Dinners">

        <Section>
            <Intro
                title="ColdFront Social Dinners"
                text="Take the opportunity to meet people you've never met over a scrumptious dinner in Copenhagen. We’ve reserved tables at a number of our favorite restaurants."

                img="/static/images/splash-social-dinners.jpg"
            />
        </Section>
        <Section bright>

            <div className="narrow">

                <h3>Social Dinners, huh?</h3>

                <p></p>

                <p>One of the highlights of Copenhagen is its vibrant food scene. Brought into focus in recent years by NOMA, the New Nordic movement has inspired many new restaurant openings covering everything from smørrebrød to ramen.</p>

                <p>At these Social Dinners, we will connect you with a group of ColdFront attendees with similar interests across a number of these restaurants. Think of it like a game of Russian Roulette, with good options only.</p>
                
                <p>Please keep in mind that ColdFront is the facilitator and each group will be responsible for covering their own expenses.</p>

                <h3>When are the Social Dinners?</h3>
                <p>Our social dinners will take place on <strong>November 14 (Day 2) at 18:15</strong> after the closing of ColdFront. Some of you will probably grab beers down at <a href="http://warpigs.dk/news/">Warpigs</a> after the conference, others will head home, and some of you will be joining us at a Social Dinner!</p>

                <h3>What's after the dinners??</h3>
                <p>After the dinners we meet at <a href="http://warpigs.dk/news/">Warpigs</a> at 9pm for the post ColdFront social.</p>

                <h3>Pick 1 out of 5 themes</h3>
                <p>We are hosting 5 themed dinners for you across Mikeller’s partner locations across Copenhagen. Each dinner has a maximum capacity of 20 people and will be reserved on a first come, first serve basis.</p>
                
                <p>We want to bring like-minded people together, so pick your theme, and enjoy a meal amongst lively conversation!</p>

                <div className="dinner cancel">
                    <h4>Theme #1: Future of native apps (CANCELLED)</h4>
                    <p>This dinner will be themed around native apps, so if you are into Swift, React Native, Flutter, Android or anything remotely related to native apps, you should join this dinner with like-minded people.</p>

                    <img src="/static/images/social-dinners/ramen.jpg" />

                    <p>This dinner will take place at: <a href="http://ramentobiiru.dk/vesterbro/">Ramen To Biiru</a>, a Japanese ramen joint by our fiends at <a href="http://mikkeller.dk">Mikkeller</a></p>
                    
                    {/* <a href="https://ti.to/coldfront/coldfront-2018/with/z0ukudcxlq4" className="btn btn-primary">Sign up for #1 Future of native apps</a> */}
                </div>

                <div className="dinner cancel">
                    <h4>Theme #2: Future of tools and machine learning (CANCELLED)</h4>
                    <p>This dinner will be themed around <strong>tools and machine learning</strong> and is for everyone interested in editors, tools, machine learning.</p>
                    <p>This dinner will take place at: <a href="http://ologbrod.com/">ØL & BRØD</a>, a restaurant serving danish Smørrebrød, the traditional danish topped rye bread, paired together with beers from our fiends at <a href="http://mikkeller.dk">Mikkeller.</a></p>

                    <img src="/static/images/social-dinners/ol-og-brod.jpg" />
                    <img src="/static/images/social-dinners/ol_brod.jpg" />
                

                    {/* <a href="https://ti.to/coldfront/coldfront-2018/with/9bygwwthlx8" className="btn btn-primary">Sign up for #2 Future of tools and machine learning</a> */}
                </div>

                <div className="dinner cancel">
                    <h4>Theme #3: Future of ethics/privacy for developers (CANCELLED)</h4>

                    <p>This dinner will be themed around <strong>ethics/privacy</strong> and is for everyone interested in how we as developers should reflect and handle issues like privacy and ethics.</p>

                    <p>This dinner will take place at: <a href="http://ologbrod.com/">ØL & BRØD</a>, a restaurant serving danish Smørrebrød, the traditional danish topped rye bread, paired together with beers from our fiends at <a href="http://mikkeller.dk">Mikkeller.</a></p>

                    <img src="/static/images/social-dinners/ol-og-brod.jpg" />
                    <img src="/static/images/social-dinners/ol_brod.jpg" />


                    {/* <a href="https://ti.to/coldfront/coldfront-2018/with/hb0klkj5ori" className="btn btn-primary">Sign up for #3 Future of ethics/privacy for developers</a> */}
                </div>

                <div className="dinner">
                    <h4>Theme #4: Future of the web and standards (SOLD OUT)</h4>

                    <p>This dinner will be themed around <strong>web and standards</strong> and is for everyone interested in the web platform and how the open web standards emerge.</p>

                    <p>This dinner will take place at: <a href="http://warpigs.dk/news/">Warpigs</a>, a brewpub serving informal american food, paired together with beers from our fiends at <a href="http://mikkeller.dk">Mikkeller.</a></p>

                    <img src="/static/images/social-dinners/warpigs2.jpg" />
                    <img src="/static/images/social-dinners/warpigs1.jpg" />

                    <a href="https://ti.to/coldfront/coldfront-2018/with/asc-eucae3y" className="btn btn-primary">Sign up for #4 Future of the web and standards</a>
                </div>

                <div className="dinner">
                    <h4>Theme #5: Future of design and interfaces (SOLD OUT)</h4>

                    <p>This dinner will be themed around <strong>web and standards</strong> and is for everyone interested in future of design and interfaces. What's next? How will AR go mainstream? What about IOT?</p>

                    <p>This dinner will take place at: <a href="http://warpigs.dk/news/">Warpigs</a>, a brewpub serving informal american food, paired together with beers from our fiends at <a href="http://mikkeller.dk">Mikkeller.</a></p>

                    <img src="/static/images/social-dinners/warpigs2.jpg" />
                    <img src="/static/images/social-dinners/warpigs1.jpg" />
                    

                    <a href="https://ti.to/coldfront/coldfront-2018/with/8tindktt6ae" className="btn btn-primary">Sign up for #5 Future of design and interfaces</a>                
                </div>

            <style jsx>{`
                h4 {
                    font-size: 20px;
                    font-weight: bold;
                }

                .cancel {
                    text-decoration: line-through;
                }

                .dinner {
                    margin-bottom: 40px;
                    max-width: 700px;

                    img {
                        max-width: 100%;
                        margin-bottom: 20px;
                    }

                    a {
                        margin-top: 20px;
                    }
                }
            `}</style>
            </div>
        </Section>
    </Layout>
)
