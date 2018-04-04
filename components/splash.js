import Section from './section'

export default () => (
    <Section clean wide>
        <div className="splash">
                <div className="text">
                    <h1 className="title">The future of front-end and interfaces</h1>
                    {/* <h3>A unique two-day conference that blurs the lines between web, mobile, native and design in Copenhagen, Denmark</h3> */}
                    <p className="date">NOV 13-14-15 2018 in Copenhagen</p>

                    <a className="btn btn-primary btn-primary-shadow ticket" data-text="Get your ticket" href="https://2018.coldfront.co/tickets">
                        Secure your ticket <i className="fas fa-arrow-right"></i>
                    </a>


                </div>
            

            <style jsx>{`
            .splash {
                position: relative;
                box-sizing: border-box;
                padding-top: 100px;

                @media (max-width: 1000px){
                    padding-left: -17px;
                    padding-right: -17px;
                }

                background: url('/static/images/splash/splash.png');
                background-repeat: no-repeat;
                background-position: center center;

                text-align: center;

                .text {
                    text-align: center;
                    margin: 0 auto;
                }
                .date {
                    font-size: 20px;
                    margin-bottom: 50px;
                }

                .title {
                    width: 520px;
                    margin-right: auto;
                    margin-left: auto;

                    @media (max-width: 1000px){
                        width: auto;
                        max-width: 350px;
                    }
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

            `}
            </style>
        </div>
    </Section>
  )
