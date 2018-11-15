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
        var lineUp = ['Phil Hawksworth', 'Charlie Gerard', 'Sarah Drasner', 'Vitaly Friedman', 'Shirley Wu','Maximiliano Firtman', 'Peter Müller']
        
        this.setState({
            speakers: s.filter(s => lineUp.includes(s.name))
        })
    }

    componentDidMount() {
        this.loadSpeakers();
    }


    render() {   
        return (
            <Layout title="ColdFront Student">
                <Section>
                    <Intro
                        title="ColdFront Student"
                        text="A mini-event for students in Copenhagen in collaboration with IT University of Copenhagen, ITB and Prosa"
                    />
                </Section>
                <Section bright>
                    <div className="page-scholarships narrow">
                        <div className="btn-action font-bitblox">
                            <a className="btn btn-primary btn-primary-shadow glitch" data-text="REGISTER" href="https://ti.to/coldfront/coldfront-2018/with/hvm92aogvzk">
                           REGISTER <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                                            
                        <p>In collaboration with IT University of Copenhagen, ITB and Prosa, we are inviting the best danish frontend students to join us for <strong>ColdFront Student</strong>, a mini-event taking place on November 15th, as a part of our <a href="/community-workshop-day">Community and Workshop day</a>.</p>
                        <p>The event will be theme around <strong>career choice</strong>, where leading frontend developers will share their experiences with creating digital products and working with develop processes, and share career advice in a panel debate moderated by this year Coldfront host Phil Hawksworth.</p>

                        <p><strong>ColdFront Student</strong> is all about giving you the opportunity to meet some of the speakers from ColdFront 18.</p>

                        <p>This is a unique opportunity for a meet-up between the industry and the next generation of frontend developers. So be prepared for an intense day dedicated to the future of frontend!</p>
                        
                        <div className="images">
                            <img src="/static/images/practical/itu.jpg" />
                         </div>

                        <h3>Program</h3> 
                        <ul>
                            <li>15:00 : 15:15 - Opening talk by <a href="https://twitter.com/firt">Maximiliano Firtman</a></li>
                            <li>15:15 : 16:00 - Panel debate on career choice</li>
                            <li>16:00 : 16:30 - Q/A</li>
                            <li>16:30 : 17:00 - Networking</li>
                        </ul>

                        <h3>Panel debate with</h3>

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

                        <h3>Practical details</h3>

                        <p>ColdFront Student will take place on <strong>November 15th 15:00-17:00</strong> at ITU, <a href="https://goo.gl/maps/WoScNoZSUNo">Rued Langgaards Vej 7 2300 København S</a></p>
                        
                        <div className="btn-action font-bitblox">
                            <a className="btn btn-primary btn-primary-shadow glitch" data-text="REGISTER" href="https://ti.to/coldfront/coldfront-2018/with/hvm92aogvzk">
                           REGISTER <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                    <div className="narrow">
                        <p>ColdFront Student is organized in collaboration with:</p>
                        <div id="help">
                            <img id="prosa" src="/static/images/logos/PROSA.png" />
                            <img id="itb" src="/static/images/logos/itb.png" />
                            <img id="itu" src="/static/images/logos/itu.png" />
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