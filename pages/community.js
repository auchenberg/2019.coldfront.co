
import WideSection from '../components/wideSection'
import Layout from '../components/layout'
import Intro from '../components/intro'

export default () => (
    <Layout>

        <Intro title="Community Day" img="/static/images/splash-community.jpg" />

        <WideSection>
            <div className="page-community-day">
                <p>We want to inspire you, so this year we are taking ColdFront to a new level by introducing a new 3rd optional community day in collaboration with leading educational organizations and communities in Copenhagen. The community day will take place on <strong>November 15 2018</strong> where we'll host workshops and meetups on a different location than the conference venue.</p>
                <br />
                <img src="/static/images/program.png" width="100%" />

                <h2>Why Community Day?</h2>
                <p>ColdFront is all about the future, but we know some of the talks can be hard to apply to your daily job, so we want to combine an outlooking perspective with tangible hands-on workshops where you can learn about new things, and meet like-minded people to share ideas, perspectives or maybe just have fun!</p>

                <h2>What's the program?</h2>
                <p>What will</p>

                <h2>Who can attend?</h2>
                <p>By buying a ticket for ColdFront, you'll automaticlly get access to the workshops at Community Day. And if you are a student you can attend our Community Day event!</p>
                <p>The meetups in the evening will be open to everyone.</p>

                <img src="/static/images/community-partners.png" width="100%" />

            </div>
        </WideSection>
    </Layout>
)


