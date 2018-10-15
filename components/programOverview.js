import Section from './section'

export default ({ children }) => (

    <Section bright>

            <div className="narrow">
                <div className="intro">
                    <h1>The program</h1>
                    <p>Two full conference days and a 3rd community day where we'll host <strong>free</strong> workshops and meetups in collaboration our friends and partners.</p>
                </div>
            </div>

            <div className="narrow days">
            <div className="day">
                        <a href="/prefront">
                            <h2>Day 0</h2>
                            <p><strong>November 12</strong> – Prefront! Special TypeScript talk + networking</p>
                        </a>
                    </div>            
                    <div className="day">
                        <a href="/program/day1">
                            <h2>Day 1</h2>
                            <p><strong>November 13</strong> – Talks, amazing food, social dinner and party</p>
                        </a>
                    </div>
                    <div className="day">
                        <a href="/program/day2">
                            <h2>Day 2</h2>
                            <p><strong>November 14</strong> – Talks, amazing food, and social dinner</p>
                        </a>
                    </div>
                    <div className="day">
                        <a href="/community-workshop-day">
                            <h2>Day 3</h2>
                            <p><strong>November 15</strong> – Community day with workshops and meetups</p>
                        </a>
                    </div>
            </div>

            <div className="narrow">
                <p><a href="/program">Read more details about the program here</a>.</p>
            </div>

        <style jsx>{`

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
                width: 25%;

                @media (min-width: 1200px){
                    width: 20%;
                }
                
                a {
                    color: #fff;
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
