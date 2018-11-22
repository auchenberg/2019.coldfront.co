import Section from '../components/section'
import Layout from '../components/layout'
import Intro from '../components/intro'

export default () => (
    <Layout title="Summary">

        <Section>
            <Intro
                title="Talks, photos, videos and slides"
                text="Talks, photos, videos and slides from ColdFront 2018"
                img="/static/images/splash-summary.jpg"
            />
        </Section>
        <Section bright>

            <div className="narrow">  

                <h3>Talks, slides and demos from ColdFront 2018</h3>
                <p>All the videos are published on our YouTube channel. Slides and demos (if available) can be found in the description for each video on YouTube.</p>
                <br />
                <a href="https://www.youtube.com/playlist?list=PLl0kzWeYVmgt_k-4Yh2ld-T858sHjbHtC" className="btn btn-primary">ColdFront 2018 on YouTube</a>
                <br />
                <br />

                <h3>Photos from ColdFront 2018</h3>
                <p>All the photos shot by our wonderful photografer, <a href="http://cactusfoto.se/">Jonas Persson</a>, can be found in high resolution on Google Photos. The photos are owned by ColdFront, but you are allowed to use a photo of yourself, as long as you provide credits to ColdFront and Jonas.</p>
                <br />

                <a href="https://photos.app.goo.gl/on895DicAhncPTgw6" className="btn btn-primary">ColdFront on Google Photos</a>
                <br />
                <br />
                <br />
            

            <style jsx>{`
                .page-welcome {

                }
            `}</style>
            </div>
        </Section>
    </Layout>
)
