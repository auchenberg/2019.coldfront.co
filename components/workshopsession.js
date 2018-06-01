
import React from 'react';

class WorkshopSession extends React.Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
        <div className="session" style={{backgroundColor: this.props.color, gridColumn: this.props.gridColumn, gridRow: this.props.gridRow}}>
            <div className="title">
                {this.props.title}
            </div>
            <div className="description" dangerouslySetInnerHTML={{__html: this.props.description}}>
            </div>

            <style jsx>{`
                :global(.session) {
                    padding: 16px 27px;
                }
                :global(.description) {

                }
                .session {
                    
                }
            `}
            </style>
        </div>
    );
  }
}

export default WorkshopSession;