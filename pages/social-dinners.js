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

                <p>Copenhagen is great at a lot of things, and one of the things that really sticks out is the amazing food scene, made famous by NOMA.</p>

                <p>We’ll hook you up with great people and in November we'll tell you which restaurant you should show up at. A bit like Russian roulette, but with only great options.</p>
                
                <p>Please mind that your group need to pick up the bill yourself. We just faciliate.</p>

                <h3>When are the Social Dinners?</h3>
                <p>Our social dinners will take place on <strong>November 13 (Day 2) at 19:00 </strong> after the closing of ColdFront. Some of you will probably grab beers down at Mikeller after the conference, others will head home, and then there's you who are joining us for a Social Dinner!</p>

                <h3>What's after the dinners??</h3>
                <p>After the dinners we meet at <a href="http://warpigs.dk/news/">Warpigs</a> at 9pm for the post ColdFront social.</p>

                <h3>Pick 1 out of 5 themes</h3>
                <p>We have created 5 dinners for you which are organized by theme. Each dinner has a maximum capacity of 20 people, and will be hosted on several of Mikkeller's locations around town. </p>
                <p>We want to bring like-minded people together, so pick your theme, and enjoy a meal with great dicussions in mind!</p>

                <div className="dinner">
                    <h4>Theme #1: Future of native apps</h4>
                    <p>This dinner will be themed around native apps, so if you are into Swift, React Native, Flutter, Android or anything remotely related to native apps, you should join this dinner with like-minded people.</p>

                    <img src="/static/images/social-dinners/ramen.jpg" />

                    <p>This dinner will take place at: <a href="http://ramentobiiru.dk/vesterbro/">Ramen To Biiru</a>, a Japanese ramen joint by our fiends at <a href="http://mikkeller.dk">Mikkeller</a></p>
                    
                    <a href="https://ti.to/coldfront/coldfront-2018/with/z0ukudcxlq4" className="btn btn-primary">Sign up for #1 Future of native apps</a>
                </div>

                <div className="dinner">
                    <h4>Theme #2: Future of tools and machine learning</h4>
                    <p>This dinner will be themed around <strong>tools and machine learning</strong> and is for everyone interested in editors, tools, machine learning.</p>
                    <p>This dinner will take place at: <a href="http://ologbrod.com/">ØL & BRØD</a>, a restaurant serving danish Smørrebrød, the traditional danish topped rye bread, paired together with beers from our fiends at <a href="http://mikkeller.dk">Mikkeller.</a></p>

                    <img src="/static/images/social-dinners/ol-og-brod.jpg" />
                    <img src="/static/images/social-dinners/ol_brod.jpg" />
                

                    <a href="https://ti.to/coldfront/coldfront-2018/with/9bygwwthlx8" className="btn btn-primary">Sign up for #2 Future of tools and machine learning</a>
                </div>

                <div className="dinner">
                    <h4>Theme #3: Future of ethics/privacy for developers</h4>

                    <p>This dinner will be themed around <strong>ethics/privacy</strong> and is for everyone interested in how we as developers should reflect and handle issues like privacy and ethics.</p>

                    <a href="https://ti.to/coldfront/coldfront-2018/with/hb0klkj5ori" className="btn btn-primary">Sign up for #3 Future of ethics/privacy for developers</a>
                </div>

                <div className="dinner">
                    <h4>Theme #4: Future of the web and standards</h4>

                    <p>This dinner will be themed around <strong>web and standards</strong> and is for everyone interested in the web platform and how the open web standards emerge.</p>

                    <p>This dinner will take place at: <a href="http://warpigs.dk/news/">Warpigs</a>, a brewpub serving informal american food, paired together with beers from our fiends at <a href="http://mikkeller.dk">Mikkeller.</a></p>

                    <img src="/static/images/social-dinners/warpigs2.jpg" />
                    <img src="/static/images/social-dinners/warpigs1.jpg" />

                    <a href="https://ti.to/coldfront/coldfront-2018/with/asc-eucae3y" className="btn btn-primary">Sign up for #4 Future of the web and standards</a>
                </div>

                <div className="dinner">
                    <h4>Theme #5: Future of design and interfaces</h4>

                    <p>This dinner will be themed around <strong>web and standards</strong> and is for everyone interested in future of design and interfaces. What's next? How will AR go mainstream? What about IOT?</p>

                    <p>This dinner will take place at: <a href="http://restaurantgorilla.dk/forside/?lang=en">Gorilla</a>, a  beast of a restaurant residing in old industrial premises in the Meatpacking District of Vesterbro. The kitchen is undogmatic, with roots in the Mediterranean cuisine. The menu consists of shareable snacks and a la carte dishes, big and small.</p>
                    
                    <img src="/static/images/social-dinners/gorilla1.jpg" />
                    <img src="/static/images/social-dinners/gorilla2.jpg" />
                    

                    <a href="https://ti.to/coldfront/coldfront-2018/with/8tindktt6ae" className="btn btn-primary">Sign up for #5 Future of design and interfaces</a>                
                </div>

            <style jsx>{`
                h4 {
                    font-size: 20px;
                    font-weight: bold;
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
