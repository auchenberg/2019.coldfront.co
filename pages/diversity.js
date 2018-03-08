import WideSection from '../components/wideSection'
import Layout from '../components/layout'

export default () => (
    <Layout>

        <div className="image-diversity image-overlay d-none d-md-block">
            <div className="overlay-shadow"></div>
        </div>

        <WideSection>
                <div className="page-scholarships">
                    <h2>DIVERSITY SCHOLARSHIPS</h2>
                    <p>We started ColdFront back in 2014 to flourish the front-end community and to put Copenhagen the global front-end map</p>
                    <p>Back in 2014 we had travel to other major european cities such as Amsterdam, London, Berlin, London, New York and San Francisco to be a part of our global front-end community, but with ColdFront we changed that.</p>
                    <p>ColdFront is a conference for front-end developers who are passionate about building user experiences with the latest and most relevant technologies. Over the past years the term “front-end” has transitioned from meaning building experiences for the web, to be covering a broad span of platforms, devices and runtimes.</p>
                    <p>ColdFront is a conference that aims to be at the forefront of technology curve by providing inspirational content about tomorrow's challenges and technologies.</p>

                    <div className="btn-diversity font-bitblox">
                        <a className="btn btn-primary btn-primary-shadow glitch" data-text="Apply Now" href="https://goo.gl/forms/k1Sb06DqHYYlluWF3">
                        APPLY NOW <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>


                </div>
        </WideSection>

        <div className="row sponsor-wrapper">
            <div className="col-md-6 offset-md-3">
                <p className="font-bitblox">Sponsored By</p>
                <div className="sponsor-icons-wrapper">
                    <img style={{transform: "scale(0.5)"}} src="../static/images/intel-logo.png" alt="samsung-internet-logo"/>
                    <img src="../static/images/samsunginternet-logo.svg" alt="samsung-internet-logo"/>
                </div>
            </div>
        </div>

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
