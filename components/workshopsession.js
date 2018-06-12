
import React from 'react';
import slug from 'slug'


class WorkshopSession extends React.Component {
  constructor(props) {
    super(props);
  }

   images(images){
       var elements = [];

       images.forEach(image => {
           elements.push(<img className="schedule-image" src={image} />)
       });

       return elements
   }

   speakers(list){
    var elements = [<span>with </span>];

    list.forEach((item, index) => {
        let slugLabel = slug(item, { lower: true})
        if(index === list.length -1) {
            elements.push(<a className="speaker-link" href={'/speakers#'+ slugLabel}>{item}</a>)
        } else {
            elements.push(<a className="speaker-link" href={'/speakers#'+ slugLabel}>{item} + </a>)
        }
    });

    return elements
}


  render(props) {
    let slugLabel

    if(this.props.speakerName) {
        
    }

    return (
        <div className="session" style={{backgroundColor: this.props.color, gridColumn: this.props.gridColumn, gridRow: this.props.gridRow}}>
            <div className="title">
                {this.props.title}
            </div>
            <div className="description" dangerouslySetInnerHTML={{__html: this.props.description}}>
            </div>

            {this.props.speakers ? <div className="speakerss">{this.speakers(this.props.speakers)}</div> : ''}

            {this.props.signupUrl ? <a className="workshop-signup" href={this.props.signupUrl} target="_blank">Sign up</a> : '' }

            {this.props.images ? <div className="schedule-images">{this.images(this.props.images)}</div> : ''}

            <style jsx>{`
            `}
            </style>
        </div>
    );
  }
}

export default WorkshopSession;