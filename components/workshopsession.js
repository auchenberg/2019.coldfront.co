
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

            {this.props.signupUrl ? <a className="workshop-signup" href={this.props.signupUrl} target="_blank">Sign up</a> : '' }

            <style jsx>{`
                :global(.session) {
                    padding: 16px 27px;

                    @media(max-width: 600px){
                        font-size: 12px;
                        padding: 11px 8px;
                    }
                }
                :global(.description) {

                }
                :global(a.workshop-signup){
                    display: block;
                    margin: 15px 0;
                    color: white;
                    text-decoration: underline;
                }


            `}
            </style>
        </div>
    );
  }
}

export default WorkshopSession;