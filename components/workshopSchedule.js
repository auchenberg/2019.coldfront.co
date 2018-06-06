import WorkshopSession from './workshopsession'

export default ({ children }) => (
    <div id="workshop-schedule">
        <div id="workshop-grid">
            <div className="time-line" />
            <div className="time-label">10:00</div>
            <div className="time-line" />
            <div className="time-label">12:00</div>
            <div className="time-line" />
            <div className="time-label">14:00</div>
            <div className="time-line" />
            <div className="time-label">16:00</div>
            <div className="time-line" />
            <div className="time-label">18:00</div>
            <div className="time-line" />
            <div className="time-label">20:00</div>
        </div>

        <div id="workshop-program">
            <WorkshopSession 
                title="Workshop 1"
                description="Mad science with Javascrpt"
                color="#0629EA"
                gridRow="2 / span 2"
                gridColumn="2"
                />
                <WorkshopSession
                title="Workshop 2"
                description="Running Node.js in the Google Cloud"
                color="#0550EE"
                gridRow="2 / span 2"
                gridColumn="3"
                />
                <WorkshopSession
                title="Workshop 3"
                description="TBA"
                color="#0477F2"
                gridRow="2 / span 2"
                gridColumn="4"
                />
            
            <WorkshopSession 
                title="Workshop 4"
                description="TBA"
                color="#029FF7"
                gridRow="5 / span 2"
                gridColumn="2"
                />
                <WorkshopSession
                title="Workshop 5"
                description="TBA"
                color="#01C6FB"
                gridRow="5 / span 2"
                gridColumn="3"
                />
                <WorkshopSession
                title="Workshop 6"
                description="TBA"
                color="#63D9F9"
                gridRow="5 / span 2"
                gridColumn="4"
                />
            
            <WorkshopSession 
                title="Coldfront Student"
                description="<p>Panel-debate with Selected Speakers</p><p>Networking with speakers, meet ColdFront partners about jobs and future</p>"
                color="#C249FB"
                gridRow="8 / span 4"
                gridColumn="2"
                />
                <WorkshopSession 
                    gridRow="8 / span 4"
                    gridColumn="2"/>
                <WorkshopSession 
                    gridRow="8 / span 4"
                    gridColumn="2"
                />
                
            
            <WorkshopSession 
                title="Meetups, beers and snacks"
                description="React Native CPH"
                color="#2128EC"
                gridRow="12 / span 6"
                gridColumn="2"
                />
                <WorkshopSession
                title="Meetups, beers and snacks"
                description="Copenhagen JS"
                color="#5826F1"
                gridRow="12 / span 6"
                gridColumn="3"
                />
                <WorkshopSession
                title="Meetups, beers and snacks"
                description="GDG CPH"
                color="#7425F3"
                gridRow="12 / span 6"
                gridColumn="4"
                />
        </div>

        <style jsx>{`    
            #workshop-schedule{
                position: relative;
                
            }
            #workshop-grid {
                position: absolute;
                top: 0;
                width: 100%;
                display: grid;
                grid-template-columns: 100px auto;
                grid-template-rows: 1px 234px 1px 234px 1px 234px 1px 234px 1px 234px 1px 234px;

                .time-line{
                    background: white;
                    grid-column-start: 2;
                    grid-column: span 4;
                    margin-left: 80px;
                }

                .time-label {
                    position: relative;
                    top: -15px;
                }
            }

            #workshop-program {
                position: relative;
                display: grid;
                grid-template-columns: 100px auto auto auto;
                grid-template-rows: 1px 117px 117px 1px 117px 117px 1px 117px 117px 1px 117px 117px 1px 117px 117px 1px 117px 117px;
                grid-column-gap: 8px;
            }

            @media(max-width: 600px){
                #workshop-grid, #workshop-program{
                    grid-template-columns: 40px auto;

                    .time-line{
                        @media(max-width: 600px){
                            margin-left: 40px;
                        }
                    }
    
                    .time-label {
                        @media(max-width: 600px){
                            font-size: 12px;
                            top: -11px;
                        }
                    }
                }
            }
        `}
        </style>

    </div>
)