import Section from './section'

export default ({ children }) => (

    <Section bright>

            <div className="narrow">
                <div className="intro">
                    <h2>The program</h2>
                    <p>We want to inspire you, so this year we are taking ColdFront to a new level by having two full conference days in VEGA and introducing a new 3rd community day in collaboration the local communities in Copenhagen, where we'll host workshops and meetups.</p>
                </div>
            </div>

            <div className="narrow days">
                    <div className="day">
                        <h2>Day 1</h2>
                        <p><strong>November 13</strong> – Talks, amazing food, social dinner and party</p>
                    </div>
                    <div className="day ">
                        <h2>Day 2</h2>
                        <p><strong>November 14</strong> – Talks, amazing food, and social dinner</p>
                    </div>
                    <div className="day">
                        <h2>Day 3</h2>
                        <p><strong>November 15</strong> – Community day with workshops and meetups</p>
                    </div>
            </div>

            <div className="narrow">
                <p>Details about the program will be announced as we get closer to November.</p>
            </div>

        <style jsx>{`

            h2 {
                font-size: 20px;
            }

            .intro {
                font-size: 38px;
            }

            .days {
                display: flex;
                justify-content: space-between;
                margin: 100px 0;

                @media (max-width: 768px){
                    flex-direction: column;

                    .day {
                        width: 100%;
                    }
                }
            }

            .day {
                width: 30%;

                @media (min-width: 1200px){
                    width: 25%;
                }
                

                h2 {
                    font-size: 80px;
                }
            }

            
            .arrow {
                width: 40px;
            }

          `}</style>
    </Section>
)
