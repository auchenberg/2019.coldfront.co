
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

  render(props) {
    let slugLabel

    if(this.props.speakerName) {
        slugLabel = slug(this.props.speakerName, { lower: true})
    }

    return (
        <div className="session" style={{backgroundColor: this.props.color, gridColumn: this.props.gridColumn, gridRow: this.props.gridRow}}>
            <div className="title">
                {this.props.title}
            </div>
            <div className="description" dangerouslySetInnerHTML={{__html: this.props.description}}>
            </div>
            {this.props.speakerName ? <a className="speaker-link" href={slugLabel} target="_blank">with {this.props.speakerName}</a>  : '' }

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