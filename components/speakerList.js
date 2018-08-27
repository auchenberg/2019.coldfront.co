import Section from './section'
import SpeakerCard from '../components/speakerCard'
import React from 'react'

class speakerList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            speakers: []
        }
    }
      
    async loadSpeakers() {
        const s = await import('../data/speakers.json')
        this.setState({
            speakers: s.filter(s => (s.hide == undefined || s.hide == false))
        })
    }

    componentDidMount() {
        this.loadSpeakers();
    }

    render() {   
        return (
            <React.Fragment>
                { this.state.speakers.map((speaker, idx) => {
                    return (
                        <SpeakerCard
                            speakerImage={speaker.image}
                            speakerTheme={speaker.theme}
                            speakerName={speaker.name}
                            speakerTitle={speaker.title}
                            speakerPosition={speaker.position}
                            twitter={speaker.twitter}
                            compact={this.props.compact}
                        />                           
                    )
                })}
            </React.Fragment>                 
        );
    }
}

export default speakerList;