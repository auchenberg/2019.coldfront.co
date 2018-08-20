import Layout from '../components/layout'
import Section from '../components/section'
import Intro from '../components/intro'
import Link from 'next/link'

export default() => (
    <Layout title="Where to stay and how to get around">

        <Section>
            <Intro
                title="Where to stay and how to get around"
                text="We know that many of you are visiting from abroad. To make things a bit simpler, we have prepared this quick guide on where to stay and how to get around."/>
        </Section>

        <Section bright>
            <div className="narrow">
                <h2>Hotels</h2>

                <p>The conference is held in the part of town called “Vesterbro”, which is not far from the meat packing district.  There plenty of hotels real close! We recommend you to stay in either the “Vesterbro” district or somewhere downtown.</p>

                <h3>Savoy Hotel — The ColdFront Hotel</h3>

                <p>The Savoy Hotel is housed in the Løvenborg building and is designed by architect Anton Rosen, who is also known for the Tuborg building in Hellerup and the Palace Hotel at the Town Hall Square (Rådhuspladsen).</p>
                
                <p><strong>The deal:</strong> As a ColdFronter you get the following deal</p>
                    
                <p>You pay just 825,- DKK for a single-room, and 925,- DKK for a double room, and that includes breakfast!</p>

                <p>You can book your room by sending an email to mail@savoyhotel.dk and be sure mention you are an attendee of ColdFront.  Use the discount code "F18171", and the Savoy Hotel will help you with the booking.</p>

                <p><strong>Random fact:</strong> The building was originally the first in Denmark to have an elevator. And today, more than 100 years later, the elevator is still working and can be used by hotel guests.</p>

                <p>The address of the hotel is: <strong>Vesterbrogade 34 1620 København V Denmark</strong>.</p>

                <div className="images">
                    <img src="/static/images/practical/savoy2.jpg" />
                    <img src="/static/images/practical/savoy1.jpg" />
                    <div>
                        <img src="/static/images/practical/savoy4.jpg" />
                        <img src="/static/images/practical/savoy3.jpg" />
                    </div>
                </div>

                <h3>Brøchner Hotels - beautiful boutique hotels</h3>
                <p>We are also pleased to have a special deal with <a href="http://www.brochner-hotels.com/">Brøchner Hotels</a>, the company behind several beautiful boutique hotels where ColdFronters are able to get <strong>15% off</strong> the current day rate for the dates: Nov 13-15 2018.</p>
                <p>The deal covers the following hotels: Hotel SP34, Hotel Danmark, Avenue Hotel Copenhagen og Hotel Astoria.  To book, simply reserve in the above interval and use the discount code COLDFRONT (in ALL CAPS).</p>

                <div className="images">
                    <img src="/static/images/practical/hotel3.jpg" />
                    <img src="/static/images/practical/hotel2.jpg" />
                    <div>
                        <img src="/static/images/practical/hotel1.jpg" />
                        <img src="/static/images/practical/hotel4.jpg" />
                    </div>
                </div>

                <h3>Other hotels</h3>

                <p><span>The historical one:&nbsp;</span><a rel="noopener noreferrer" href="https://guldsmedenhotels.com/babette/" target="_blank">Babette Guldsmeden</a></p>
                
                <p><span>The one located in city centre:&nbsp;</span><a rel="noopener noreferrer" href="http://www.arthurhotels.dk/ibsens-hotel/" target="_blank">Ibsens hotel</a></p>
                
                <p><span>The charming but quirky:&nbsp;</span><a rel="noopener noreferrer" href="http://www.hotelrye.dk/" target="_blank">Hotel Rye</a></p>
                
                <p><span>The cheaper one if you book ahead:&nbsp;</span><a rel="noopener noreferrer" href="https://www.wakeupcopenhagen.dk/hotellerne/koebenhavn/borgergade/#/search" target="_blank">Wake up Borgergade</a></p>
                
                <p><span>The luxury hostel (10%):&nbsp;<a href="http://www.steelhousecopenhagen.com/api/ahhg/corp/directlogin/53264" title="Steel House">Steel House</a></span></p>        
            </div>
        </Section>

        <Section>        
            <div className="narrow">
                <h2>Transport</h2>
                <p>When you arrive in Copenhagen, it is easy to find public transportation and get around by trains, Metro, busses (and waterbuses). One of the perks when traveling in Denmark is the Danish punctuality, so expect the public transportation to be very reliable and punctual. All means of transport can be accessed with the same ticket, so all you need to know are the number of zones you'll pass on your journey, since Copenhagen is divided into different zones.</p>

                <h3>Get to the city centre</h3>
                <p>By <a rel="noopener noreferrer" href="http://intl.m.dk/#!/" target="_blank">metro</a>, it only takes 15 minutes from CPH Airport and 10 minutes by <a rel="noopener noreferrer" href="http://www.rejseplanen.dk/bin/query.exe/en" target="_blank">bus</a> to get to Nørreport station, Copenhagen’s traffic nerve center. From here you can easily reach your hotel. You can buy a ticket for public transport in the arrivals hall of CPH Airport.&nbsp;</p>

                <h3>Bike, Bike, Bike!</h3>
                <p>Join the locals ride a bike around Copenhagen. You can&nbsp;rent a bike at almost every bikeshop around the city or&nbsp;rent a <a rel="noopener noreferrer" href="https://bycyklen.dk/en/" target="_blank">bycykel</a>&nbsp;(The City Bike), the City Bike is after all synonymous with Copenhagen.&nbsp;</p>
            </div>        
        </Section>

        <Section bright>
            <div className="narrow">
                <h2>Venue</h2>
                <p><Link href="/venue-practical"><a>Learn more about the Venue and Practicalities.</a></Link></p>

                <h2>Lunch, food, dinner, party and social dinners</h2>
                <p><Link href="/social"><a>Learn more about our ColdFront Party™, social dinners and social side events</a></Link></p>
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
                margin: 60px 0;
                display: flex;
                justify-content: space-between;
                align-items: center;

                img:nth-child(1){
                    max-width: 30%;
                }

                img:nth-child(2){
                    max-width: 35%;
                }

                div:nth-child(3){
                    max-width: 25%;
                }

                div img {
                    display: block;
                    width: 100% !important;
                    max-width: 100%;
                    margin-top: 30px;
                }              
            }
        `}
        </style>
    </Layout>
)
