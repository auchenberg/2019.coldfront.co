import Section from '../components/section'
import Layout from '../components/layout'
import Intro from '../components/intro'

export default () => (
    <Layout title="Diversity Scholarships">
        <Section>
            <Intro
                title="Diversity Scholarships"
                img="/static/images/splash-tickets.jpg"
                text="We are proud to be able to provide diversity scholarships for ColdFront inspired by JSConf.EU"
            />
        </Section>
        <Section bright>
            <div className="page-scholarships narrow">
                <p>We started ColdFront back in 2014 to flourish with the front-end community and to put Copenhagen on the global front-end map.</p>
                <p>Back in 2014, we had to travel to other major European and North American cities such as Amsterdam, London, Berlin, London, New York, and San Francisco to be a part of the global, front-end community. With ColdFront, we are changing that.</p>

                <p>This year we are proud to be able to provide a handful of <strong>diversity scholarships</strong>, inspired by JSConf.EU. A Diversity Scholarship for ColdFront is a fully sponsored (free) ticket given to someone from an underrepresented group in tech. This includes, but is not limited to: students, women, people of color, LGBTQ people, disabled people, and people facing economic or social hardships.</p>

                <div className="btn-diversity font-bitblox">
                    <a className="btn btn-primary btn-primary-shadow glitch" data-text="Apply Now" href="https://goo.gl/forms/wiyIvCkgypdv4gtU2">
                    APPLY NOW <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </Section>

        <style jsx>{`

            blockquote {
                margin-left: 40px;
                margin-bottom: 40px;
            }

            .image-diversity {
                background-image:url('/static/images/diversity-1.jpg');
                height: 500px;
                margin-bottom: -200px;
            }

            .sponsor-wrapper {
                padding: 100px 0;
            }

            .sponsor-icons-wrapper {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }


            .btn-diversity {
                position: absolute;
                top:95%;
                left: 70%;

                a {
                    .fa-arrow-right {
                        margin-left: 10px;
                    }
                }

                button {
                    background-color: #8f23f5;
                    border: none;
                    color: white;
                    border-radius: 0;
                    padding: 6%;
                    width: 100%;

                    a {
                        color: white;

                        &:hover {
                            text-decoration: none;
                        }
                    }
                }

                p {
                    text-align: right;
                    color: #8f23f5;
                    font-size: 20px;
                    line-height: 2.6;
                    letter-spacing: 0.7px;
                }

            }






            @media (max-width: 1000px) {
                blockquote {
                    margin-left: 20px;
                    margin-bottom: 20px;
                }
            }

            `}
        </style>

    </Layout>

)
