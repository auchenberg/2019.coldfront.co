import Section from './section'

export default ({ children }) => (

    <Section >
        <a name="partners"></a>

        <div className="narrow">
            <h3>Our partners</h3>
        </div>

        <div className="narrow">
            <div className="list">
                <div className="list-item">
                    <a href="https://www.stickermule.com/">
                        <img src="/static/images/logos/stickermule.png" alt="stickermule-logo" className="logos" />
                    </a>
                </div>

                <div className="list-item">
                    <a href="https://balsamiq.com/">
                        <img src="/static/images/logos/balsamiq.png" alt="balsamiq-logo" className="logos" />
                    </a>
                </div>

                <div className="list-item">
                    <a href="https://www.nodes.dk/">
                        <img src="/static/images/logos/nodes.png" alt="nodes-logo" className="logos" />
                    </a>
                </div>
            </div>
            <div className="list">
                <div className="list-item">
                    <a href="http://kraftvaerk.com/">
                        <img src="/static/images/logos/kraftwaerk.png" alt="kraftvaerk-logo" className="logos" />
                    </a>
                </div>

                <div className="list-item">
                    <a href="https://www.shape.dk/">
                        <img src="/static/images/logos/shape.png" alt="shape-logo" className="logos" />
                    </a>
                </div>

                <div className="list-item your-spot">
                    <span className="this-can-be">This can be your spot!</span>
                    <span>Email: <a href="mailto:michael@coldfront.co">michael@coldfront.co</a></span>
                </div>
            </div>
            
        </div>

        <style jsx>{`
            
            .list {
                display: flex;
                justify-content: space-between;

                .list-item {
                    width: 260px;
                    height: 103px;
                    padding: 40px 40px;
                    background: #0E132B;
    
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 48px;
    
                    .logos{
                        max-width: 100%;
                    }

                    &.your-spot{
                        font-size: 16px;
                        padding: 0;

                        .this-can-be{
                            font-weight: bold;
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
