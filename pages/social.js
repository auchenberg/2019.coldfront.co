import Layout from '../components/layout'
import Section from '../components/section'
import Intro from '../components/intro'
import Link from 'next/link'

export default() => (
    <Layout title="Party, social dinners and social side events">
        <Section>
            <Intro
                title="Party, social dinners and social side events"
                text="Take the opportunity to meet new people you've never met over a scrumptious social dinner, and participate in social events to experience the best of Copenhagen."/>
        </Section>

        <Section bright>
            <div className="narrow">
                <h2>Food and ColdFront Party™</h2>

                <p>As a part of ColdFront we are providing breakfast and lunch during the conference days. We believe that conference food should be delicious and nutritious, so we are teaming up with an amazing local food vendor who will put together a great Nordic menu for us.</p>

                <p>This year we are teaming up with world world renowned chef <a href="https://www.meyersmad.dk/english/">Claus Meyer</a>!</p>

                <h3>Meyers Group</h3>
                <p>We make fresh, wholesome food available for more.</p>
                <p>The idea that food matters beyond pleasure are the guiding principles of everything we do.</p>
                <p>The Meyers Group operates at all levels from farm to table. Our many activities unfold in canteens, catering, fruit farming, production and processing activities, own shops, commerce, team building, research, education and consulting.</p>

                <div className="images">
                    <img src="/static/images/practical/meyers1.jpg" />
                    <img src="/static/images/practical/meyers3.png" />
                    <img src="/static/images/practical/meyers2.jpg" />
                </div>

                <h3>Chef Claus Meyer</h3>
                <p>Claus Meyers has been instrumental in unlocking the potential of Danish food culture in the past 30 years through several research, consulting, community and entrepreneurial initiatives. Claus has challenged conventional thinking in agriculture, food production and cooking. He has inspired a generation to rediscover local Nordic produce through cookbooks, TV shows, cookery schools, lectures, public food debates and produce from his own orchard.</p>
                <p>He is the inventor and initiator of the New Nordic Cuisine movement, and co-founder of noma, Copenhagen’s famed New Nordic restaurant. From 2014 and on, Claus has been involved and established the US projects Great Northern Food Hall and Agern Restaurant located in New York's Grand Central Terminal.</p>

                <h3>Party</h3>

                <p>Dinner will be provided at our mighty ColdFront Party™ which will take place on <Link href="/program/day1">Day 1</Link>.</p>  

    
                <p>To finish ColdFront with a blast, we are throwing a party for all ColdFronters. We are planning on opening the bar, while bringing you unique experience in one of Copenhagen's most historic venues.</p>

                <p>The party is being held at <a href="venue-and-practical">our venue</a> from 17:30-22:00, and will include food, open bar and lots of fun!</p>       


                <div className="images">
                    <img src="/static/images/practical/party2.jpg" />
                    <img src="/static/images/practical/food2.jpg" />
                    <img src="/static/images/practical/food3.jpg" />
                </div>

                <p>More details about the ColdFront Party™ will be announced as we get closer.</p>
            </div>
        </Section>

        <Section>        
            <div className="narrow">
                <h2>Social Dinners</h2>

                <p>Take the opportunity to meet people you've never met over a scrumptious dinner in Copenhagen. We’ve reserved tables at a number of our favorite restaurants.</p>

                <p>Copenhagen is great at a lot of things, and one of the things that really sticks out is the amazing food scene, made famous by NOMA.</p>

                <p><img src="/static/images/practical/dinner1.jpg" width="700" /></p>

                <p>We’ll hook you up with great people and in November we'll tell you which restaurant you should show up at. A bit like Russian roulette, but with only great options. Please mind that your group need to pick up the bill yourself. We just faciliate.</p>

                <p>A list of the participating restaurants and signup links will be announced in the weeks before ColdFront</p>
            </div>        
        </Section>

        <Section bright>
            <div className="narrow">
                <h2>Copenhagen experiences</h2>
                <p>We want you to experience Copenhagen, and we know many of you are travelling to attend ColdFront. Maybe it's your first time here? So we are teaming up with local event organizers that allows you to experience unique sides of Copenhagen while you are here.</p>
                
                <p>We plan to organize tours like:</p>
                <ul>
                    <li>Trip to world famous Louisiana art museum</li>
                    <li>Trip to the free-town Christinia</li>
                    <li>Winter Boat Tours (if not too icy)</li>
                    <li>Experience hot steam baths in the Copenhagen harbour at <a href="https://copenhot.com/">CopenHot</a></li>
                    <li>... and much more!</li>
                </ul>     

                <div className="images">
                    <img src="/static/images/practical/copenhagen2.jpg" />
                    <img src="/static/images/practical/copenhagen1.jpg" />
                    <img src="/static/images/practical/copenhagen3.jpg" />
                </div>

                <p>Please mind that your group need to pick up the bill yourself. We just faciliate, and it's totally optional to attend.</p>

                <p>More details about the Copenhagen experiences will be announced as we get closer.</p>           
            </div>
        </Section>

        <Section>
            <div className="narrow">
                <h2>Community day and meetups</h2>
                <p><Link href="/community-workshop-day"><a>Learn more about our Community day where we host several meetups in the evening.</a></Link></p>
            </div>
        </Section>

        <Section bright>
            <div className="narrow">
                <h2>Hotels and Transport</h2>
                <p><Link href="/where-to-stay-and-how-to-get-around"><a>Learn more about hotels and transport in Copenhagen.</a></Link></p>

                <h2>Venue and Practicalities</h2>
                <p><Link href="/venue-and-practical"><a>Learn more about Venue and Practicalities.</a></Link></p>
            </div>
        </Section>

        <style jsx>{`    
            h2, p {
                margin-bottom: 34px;
            }

            h3 {
                margin-bottom: 10px;
            }

            .images {
                margin: 40px 0 80px 0;
                display: flex;
                justify-content: space-between;
                align-items: center;

                img:nth-child(1){
                    max-width: 30%;
                }

                img:nth-child(2){
                    max-width: 35%;
                }

                img:nth-child(3){
                    max-width: 25%;
                }            
            }
        `}
        </style>
    </Layout>
)
