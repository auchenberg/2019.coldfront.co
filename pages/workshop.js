import Layout from '../components/layout'
import Section from '../components/section'
import Intro from '../components/intro'

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
        <Section bright narrow>
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
            <p>
                The day is organized with help from:
            </p>
            <div id="help">
                <img id="prosa" src="/static/images/PROSA.png" />
                <img id="itu" src="/static/images/ITU.png" />
                <img id="itb" src="/static/images/itb.png" />
            </div>
        </Section>
        <style jsx>{`    
            h2, p {
                margin-bottom: 34px;
            }
            h3 {
                margin-bottom: 10px;
            }
            #help{
                display: flex;
                justify-content: space-around;
            }
            #prosa{
                height: 45px;
            }
            #itu{
                height: 51px;
            }
            #itb{
                height: 61px;
            }
        `}
        </style>
    </Layout>
)