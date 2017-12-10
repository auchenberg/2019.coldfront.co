import Section from './section'

export default ({ children }) => (
    
        <div className="organizers">
            <a name="organizers"></a>

            <div className="row">
                <div className="col-md-2 offset-md-3">
                    <img src="/static/images/michael.png" className="avatar" />
                </div>

                <div className="col-md-4 d-flex align-items-end">
                    <h2>Questions?</h2>
                </div>
            </div>

            <div className="row">

                <div className="col-md-2 offset-md-4">
                    <img src="/static/images/kenneth.png" className="avatar" />
                </div>

                <div className="col-md-3">
                    <p>We started ColdFront back in 2014 to put Copenhagen on the global front-end map, and ColdFront 18 is our 5th anniversary.</p>
                    <p>ColdFront is organized by <a href="https://twitter.com/auchenberg">Kenneth Auchenberg</a> and <a href="https://twitter.com/indiedk">Michael Christansen</a>. Have a question or want to be a part of ColdFront? Don't hersitate to ping us!</p>
                    <a className="btn btn-primary" href="mailto:hello@coldfront.co">Contact us</a>
                </div>
            </div>
            
    
          <style jsx>{`
            .organizers {
                padding: 100px 0;
            }

            .row {
                margin-bottom: 40px;
            }

            .avatar {
                width: 100%;
            }
          `}
          </style>
        </div>
      )
    