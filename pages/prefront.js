import Section from '../components/section'
import Layout from '../components/layout'
import Intro from '../components/intro'

import SpeakerCard from '../components/speakerCard'

class student extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            speakers: []
        }
    }
    
    async loadSpeakers() {
        const s = await import('../data/speakers.json')
        var lineUp = ['Anders Hejlsberg']
        
        this.setState({
            speakers: s.filter(s => lineUp.includes(s.name))
        })
    }

    componentDidMount() {
        this.loadSpeakers();
    }


    render() {   
        return (
            <Layout title="Prefront: Special TypeScript event before ColdFront">
                <Section>
                    <Intro
                        title="Prefront: Special TypeScript event on the night before ColdFront"
                        text="A special TypeScript event on the night before ColdFront with Anders Hejlsberg, architect on TypeScript and Technical Fellow at Microsoft"
                        img="/static/images/splash-prefront.png"
                    />
                </Section>
                <Section bright>
                    <div className="page-scholarships narrow">
                        <div className="btn-action font-bitblox">
                            <a className="btn btn-primary btn-primary-shadow glitch" data-text="REGISTER" href="https://ti.to/coldfront/coldfront-2018/with/rqxsxje1syw">
                           REGISTER <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                                            
                        <p>We are happy to be able to invite you to a special ColdFront event which we call <strong>PreFront</strong> on the night before ColdFront with our very own danish <a href="https://twitter.com/ahejlsberg?">Anders Hejlsberg</a> from Microsoft.</p>
                        <p>The event will take place on <strong>November 12th</strong> where Anders will give a talk about TypeScript. The event will be hosted at the ColdFront venue, VEGA, where we will be opening up Ideal Bar for the evening.</p>
                           
                        <p>This is a unique opportunity to meet one of the words most renowned programming langauge designers. Anders has worked on development tools for over 30 years and is the original designer of C#, Delphi, and Turbo Pascal. Today he's the lead archiect on TypeScript.</p>

                        <p>Space is limited, so grab a spot while you can!</p>
                        
                        <div className="lineup">
                            { this.state.speakers.map((speaker, idx) => {
                                return (
                                    <SpeakerCard
                                        speakerImage={speaker.image}
                                        speakerName={speaker.name}
                                        speakerTitle={speaker.title}
                                        speakerPosition={speaker.position}
                                        twitter={speaker.twitter}
                                        hideTheme="true"
                                    />                           
                                )
                            })}
                        </div>
                        <h3>Program</h3> 
                        <ul>
                            <li>16:45 : 17:15 - Welcome at Ideal Bar.</li>
                            <li>17:15 : 17:45 - Talk by Anders Hejlsberg.</li>
                            <li>18:00 : 24:00 - Networking at Mikkeller Bar in the meat packing district. </li>
                            <li>18:00 : 24:00 - (ColdFront crew + speakers will join after speakers dinner)</li>
                        </ul>

                        <div className="images">
                            <img src="/static/images/idealbar.jpg" />
                         </div>                        

                        <h3>Practical details</h3>

                        <p>PreFront will take place on <strong>November 12th 16:45-18:00</strong> at <a href="https://goo.gl/maps/LMosBszDEdN2">Ideal Bar, Enghavevej 40, 1674 København V</a>. Networking will continue at <a href="http://mikkeller.dk/location/warpigs/">Mikkeller Warpigs Brewpub</a> in the meat packing district of Copenhagen.</p>
                        
                        <div className="btn-action font-bitblox">
                            <a className="btn btn-primary btn-primary-shadow glitch" data-text="REGISTER" href="https://ti.to/coldfront/coldfront-2018/with/rqxsxje1syw">
                           REGISTER <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                </Section>

                <style jsx>{`

                    .images {
                        margin: 0px 0 80px 0;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        img:nth-child(1){
                            max-width: 70%;
                        }
                    }

                    .lineup {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        grid-gap: 20px;
                        padding: 30px;
                    }        

                    @media (max-width: 600px) {
                        .lineup {
                            grid-template-columns: repeat(2, 1fr);
                            grid-gap: 20px;
                        }
                    }

                    .btn-action {
                        margin-top: 40px;
                        margin-bottom: 100px;
                    }

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

                    #help{
                        display: flex;
                        justify-content: space-around;
                        margin-top: 40px;

                        @media (max-width: 900px) {
                            flex-direction: column;
                            align-items: center;

                            img{
                                margin: 20px 0;
                            }
                        }

                        img{
                            opacity: 0.5;

                            &#prosa{
                                height: 45px;
                            }
                            
                            &#itu{
                                height: 51px;
                            }
                            
                            &#itb{
                                height: 61px;
                            }
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
    }
}

export default student;
