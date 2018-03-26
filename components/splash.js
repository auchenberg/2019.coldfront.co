import Section from './section'

export default () => (
    <Section clean>
        <div className="splash">

            <div className="row">
                <div className="col-md-6 text">
                    <h1 className="title">The future of front-end and interfaces</h1>
                    {/* <h3>A unique two-day conference that blurs the lines between web, mobile, native and design in Copenhagen, Denmark</h3> */}
                    <p className="date">NOV 13-14-15 2018 in Copenhagen</p>

                    <a className="btn btn-primary btn-primary-shadow ticket" data-text="Get your ticket" href="https://2018.coldfront.co/tickets">
                        Secure your ticket <i className="fas fa-arrow-right"></i>
                    </a>


                </div>
            </div>

            <style jsx>{`
            .splash {
                position: relative;
                box-sizing: border-box;
                padding-top: 100px;

                background: url('/static/images/splash/splash.png');
                background-repeat: no-repeat;
                background-size: contain;
                background-color: #0C0C14;

                text-align: center;

                .text {
                    margin: 0 auto;
                }
                .date {
                    font-size: 20px;
                    margin-bottom: 50px;
                }

                .title {
                    font-size: 80px;
                    font-weight: 600;
                }

                .ticket {
                    margin-bottom: 100px;

                }
                .img {
                    width: 100%;
                }

                .btn-splash {
                    margin-top: 40px;

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
                        color: #8f23f5;
                        font-size: 20px;
                        line-height: 2.6;
                        letter-spacing: 0.7px;
                    }

                }
            }

            @media (max-width: 1000px) {
                .splash {

                    background-position: 0 60px;

                    .btn-splash {
                        position: static !important;
                        text-align: center;
                    }

                    .title {
                        font-size: 28px;
                    }

                    .ticket {
                        padding: 10px 30px;
                        font-size: 12px;
                        width: 100%;
                        margin-bottom: 0;
                    }
                }
            }

            `}
            </style>
        </div>
    </Section>
  )
