
import React from 'react';
import slug from 'slug'
import Link from 'next/link'

class WorkshopSession extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            speakers: []
        }
    }

    async loadSpeakers() {
        const speakerData = await import('../data/speakers.json')
        let images = this.props.images || []
        let speakers = this.props.speakers || []
        let title = this.props.title || null;
        let theme = null;

        if(this.props.speakers) {
            this.props.speakers.forEach((speaker) => {
                var speakerInfo = speakerData.find(s => s.name == speaker)   ;            
                if(speakerInfo) {
                    images.push(speakerInfo.image)
                    theme = speakerInfo.theme
                }

                if(!title) {
                    title = 'Theme: ' + speakerInfo.theme;
                }
            })
        }

        this.setState({
            images: images,
            speakers: speakers,
            title: title,
            theme: theme
        })
    }

    componentDidMount() {
       this.loadSpeakers();
    }

    render(props) {
        let slugLabel

        return (
            <div className="session">
                <div className="time" style={{backgroundColor: this.props.color}}>
                    {this.props.time}
                </div>

                <div className="content">
                    <div className="images">
                        { this.state.images.map(function(image, idx){
                            return (<p><img className="scheduleImage" src={image} /></p>)
                        })}
                    </div>
                    <div className="body">
                        <div className="title">
                            <Link href={this.props.link}>
                                <a className="session-link">                                
                                    {this.state.title}
                                </a>
                            </Link>
                        </div>
                        

                        <div className="speakers">
                            { this.state.speakers.map(function(speaker, idx, speakers){
                                let slugLabel = slug(speaker, { lower: true})
                                    return (<a className="speaker-link" href={'/speakers#'+ slugLabel}>{speaker} {speakers.length > 1 && idx < speakers.length -1 ? ' + ': ''}</a>)
                            })} 
                            
                            {this.state.theme ? " - on " + this.state.theme : '' }
                        </div>

                        <div className="description" dangerouslySetInnerHTML={{__html: this.props.description}}></div>
                    </div>
                </div>
                
                <style jsx>{`    

                    .time {
                        background: #7425F3;
                        padding: 10px;
                        text-align: center;
                    }

                    .images {
                        margin-right: 1em;
                    }

                    .scheduleImage {
                        width: 200px;
                    }

                    .title {
                        font-size: 30px;
                        margin-bottom: 10px;
                    }

                    .content {
                        display: flex;
                        align-items: flex-start;  
                        padding: 40px 0;                              
                    }

                    .speakers {
                        padding-bottom: 20px;
                    }
                        
                    .body {
                        flex: 1;
                        padding: 0 20px;
                    }                            

                    @media(max-width: 800px){
                        .session {
                            font-size: 12px;
                        }

                        .scheduleImage {
                            width: 100px;
                        }

                        .body {
                            padding: 0 20px;
                        }   
                        
                        .title {
                            font-size: 20px;
                            margin-bottom: 10px;
                        }                        

                    }   
                    
                    @media(max-width: 1000px){
                        .session {
                            padding: 11px 8px;
                        }
                    }
                `}
                </style>
            </div>
    )}
}

export default WorkshopSession;