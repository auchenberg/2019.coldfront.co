import Section from './section'

export default ({ children }) => (

    <Section>
        <a name="collaborators"></a>

        <div className="narrow">
            <h3>ColdFront is organised in collaboration with:</h3>
        </div>

        <div className="narrow">
            <div className="list">
                <div className="list-item">
                    <a href="https://www.zendesk.com/">
                        <img src="/static/images/logos/zendesk.svg" alt="zendesk-logo" className="logos" />
                    </a>
                </div>

                <div className="list-item">
                    <a href="https://www.jayway.com/">
                        <img src="/static/images/logos/jayway.svg" alt="jayway-logo" className="logos jayway" />
                    </a>
                </div>
            </div>
            
        </div>

        <style jsx>{`
            
            .list {
                display: flex;
                justify-content: space-between;

                .list-item {
                    max-width: 415px;
                    padding: 40px 60px;
                    background: #020824;
    
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 40px;
                    margin-right: 70px;
    
                    .logos{
                        height: 60px;
                        max-width: 100%;

                        &.jayway{
                            height: 90px;
                        }
                    }
                }

                @media (max-width: 1100px) {
                    display: block;

                    .list-item{
                        margin-right: 0;
                    }
                }
            }

            
          `}</style>
    </Section>
)
