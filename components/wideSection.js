
import Section from '../components/section'

export default ({ children }) => (

    <Section>
        <div className="row">
            <div className="col-md-8 offset-md-2 dark-section">
                <div className="content">
                { children }
                </div>
            </div>
        </div>

          <style jsx>{`
            .dark-section {
                padding-top: 100px;
                padding-bottom: 100px;
                background:#0c0c14;
            }

            .content {
                margin-left: calc(30px + 8%);
                margin-right: calc(30px + 8%);
                padding: 0 15px;
                position: relative;
            }

            @media (max-width: 1000px) {
                .dark-section {
                  padding-top: 20px;
                  padding-bottom: 20px;
                  width: 100%
                }

                .content {
                    margin-left: 0;
                    margin-right: 0;
                    padding: 0;
                }
            }
          `}
          </style>
        </Section>
    )
