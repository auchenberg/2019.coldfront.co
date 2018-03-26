import Section from './section'

export default ({ children }) => (

    <Section bright>

            <div className="row">
                <div className="col-md-10 col-xs-12 intro">
                    <h2>The program</h2>
                    <p>We want to inspire you, so this year we are taking ColdFront to a new level by having two full conference days in VEGA and introducing a new 3rd community day in collaboration the local communities in Copenhagen, where we'll host workshops and meetups.</p>
                </div>
            </div>

            <div className="row days">
                    <div className="col-md-4 day">
                        <h2>Day 1</h2>
                        <p><strong>November 13</strong> – Talks, amazing food, social dinner and party</p>
                    </div>
                    <div className="col-md-4 day ">
                        <h2>Day 2</h2>
                        <p><strong>November 14</strong> – Talks, amazing food, and social dinner</p>
                    </div>
                    <div className="col-md-4 day">
                        <h2>Day 3</h2>
                        <p><strong>November 15</strong> – Community day with workshops and meetups</p>
                    </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <p>Details about the program will be announced as we get closer to November.</p>
                </div>
            </div>

        <style jsx>{`

            h2 {
                font-size: 20px;
            }

            .intro {
                font-size: 38px;
            }

            .days {
                padding: 100px 15px;
            }

            .day {

                h2 {
                    font-size: 80px;
                    font-weight: 800;
                }

                strong {
                    font-weight: 800;
                }
            }

            .host-avatar {
                position: relative;

                .avatar {
                    height: 300px;
                }

                .text {
                    position: absolute;
                    bottom: 0%;
                    left: 0%;
                    right: 0%;

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;

                    padding: 20px 40px;
                }
            }

            .arrow {
                width: 40px;
            }

            @media (max-width: 1000px) {

                .host-avatar {
                    height: 222px;
                }

                .intro {
                    font-size: 20px;
                }

                .days {
                    padding: 40px 20px;
                }

                .day {
                    h2 {
                        font-size: 60px;
                    }
                }
            }

          `}</style>
    </Section>
)
