import Layout from '../components/layout'
import Section from '../components/section'
import Intro from '../components/intro'
import WorkshopSession from '../components/workshopsession'

export default() => (
    <Layout>
        <Section>
            <Intro
                title="Community & Workshop Day"
                text="This year we are taking ColdFront to a new level by hosting  a new 3rd optional community and workshop day in collaboration with leading educational organizations and communities in Copenhagen."/>
                <div className="narrow">
                    <p>ColdFront is all about the future, but we know some of the talks can be hard to apply to your daily job, so we want to combine an outlooking perspective with tangible hands-on workshops where you can learn about new things, and meet like-minded people to share ideas, perspectives or maybe just have fun!</p>
                </div>
        </Section>
        <Section bright>
            <div className="narrow">
                <h2>Program<br />Thursday, November 15th</h2>
                <p>
                    The community and community day will take place on November 15 2018, where we’ll be starting with workshops for the ColdFront attendees, followed by mini-conference for the Copenhagen student community with a panel debate and networking. In the afternoon we are excited to host 3 different meetups from the Copenhagen front-end community.
                </p>
                <h3>The workshops</h3>
                <p>
                    As an attendee of ColdFront you can register for FREE to attend the following workshop. Use the links to sign-up.
                </p>
                <h3>The meetups</h3>
                <p>
                    In the evening we are happy to partner up with the 3 communities in Copenhagen to host meetups that are open for everyone. Please join in!
                </p>
            </div>
            <div id="workshop-schedule">
                <div id="workshop-grid">
                    <div className="time-line" />
                    <div className="time-label">10:00</div>
                    <div className="time-line" />
                    <div className="time-label">12:00</div>
                    <div className="time-line" />
                    <div className="time-label">14:00</div>
                    <div className="time-line" />
                    <div className="time-label">16:00</div>
                    <div className="time-line" />
                    <div className="time-label">18:00</div>
                    <div className="time-line" />
                    <div className="time-label">20:00</div>
                </div>

                <div id="workshop-program">
                    <WorkshopSession 
                        title="Workshop 1"
                        description="Mad science with Javascrpt"
                        color="#0629EA"
                        gridRow="2 / span 2"
                        gridColumn="2"
                        />
                        <WorkshopSession
                        title="Workshop 2"
                        description="Running Node.js in the Google Cloud"
                        color="#0550EE"
                        gridRow="2 / span 2"
                        gridColumn="3"
                        />
                        <WorkshopSession
                        title="Workshop 3"
                        description="TBA"
                        color="#0477F2"
                        gridRow="2 / span 2"
                        gridColumn="4"
                        />
                    
                    <WorkshopSession 
                        title="Workshop 4"
                        description="TBA"
                        color="#029FF7"
                        gridRow="5 / span 2"
                        gridColumn="2"
                        />
                        <WorkshopSession
                        title="Workshop 5"
                        description="TBA"
                        color="#01C6FB"
                        gridRow="5 / span 2"
                        gridColumn="3"
                        />
                        <WorkshopSession
                        title="Workshop 6"
                        description="TBA"
                        color="#63D9F9"
                        gridRow="5 / span 2"
                        gridColumn="4"
                        />
                    
                    <WorkshopSession 
                        title="Coldfront Student"
                        description="<p>Panel-debate with Selected Speakers</p><p>Networking with speakers, meet ColdFront partners about jobs and future</p>"
                        color="#C249FB"
                        gridRow="8 / span 4"
                        gridColumn="2"
                        />
                        <WorkshopSession 
                            gridRow="8 / span 4"
                            gridColumn="2"/>
                        <WorkshopSession 
                            gridRow="8 / span 4"
                            gridColumn="2"
                        />
                        
                    
                    <WorkshopSession 
                        title="Meetups, beers and snacks"
                        description="React Native CPH"
                        color="#2128EC"
                        gridRow="12 / span 6"
                        gridColumn="2"
                        />
                        <WorkshopSession
                        title="Meetups, beers and snacks"
                        description="Copenhagen JS"
                        color="#5826F1"
                        gridRow="12 / span 6"
                        gridColumn="3"
                        />
                        <WorkshopSession
                        title="Meetups, beers and snacks"
                        description="GDG CPH"
                        color="#7425F3"
                        gridRow="12 / span 6"
                        gridColumn="4"
                        />
                </div>
            </div>
            <div className="narrow">
                <p>
                    The day is organized with help from:
                </p>
                <div id="help">
                    <img id="prosa" src="/static/images/PROSA.png" />
                    <img id="itu" src="/static/images/ITU.png" />
                    <img id="itb" src="/static/images/itb.png" />
                </div>
            </div>
        </Section>
        <style jsx>{`    
            h2, p {
                margin-bottom: 34px;
            }
            h3 {
                margin-bottom: 10px;
            }

            #workshop-schedule{
                position: relative;
                
            }
            #workshop-grid {
                position: absolute;
                top: 0;
                width: 100%;
                display: grid;
                grid-template-columns: 100px auto;
                grid-template-rows: 1px 234px 1px 234px 1px 234px 1px 234px 1px 234px 1px 234px;


                .time-line{
                    background: white;
                    grid-column-start: 2;
                    grid-column: span 4;
                    margin-left: 80px;
                }

                .time-label {
                    position: relative;
                    top: -15px;
                }
            }

            #workshop-program {
                position: relative;
                display: grid;
                grid-template-columns: 100px auto auto auto;
                grid-template-rows: 1px 117px 117px 1px 117px 117px 1px 117px 117px 1px 117px 117px 1px 117px 117px 1px 117px 117px;
                grid-column-gap: 8px;
            }

            #help{
                display: flex;
                justify-content: space-around;

                img{
                    opacity: 0.5;

                    &#prosa{
                        height: 45px;
                    }
                    
                    &#itu{
                        height: 51px;
                    }
                    
                    &#itb{
                        height: 61px;
                    }
                }
            }
        `}
        </style>
    </Layout>
)