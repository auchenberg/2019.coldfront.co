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
                title="Workshop 1: Mad science with JavaScript"
                description=""
                speakerName="Thomas Watson"
                signupUrl="https://ti.to/coldfront/coldfront-2018/with/wstjksq87lu"
                color="#0629EA"
                gridRow="2 / span 2"
                gridColumn="2"
                images={["/static/images/workshopschedule/thomas.jpeg", "/static/images/workshopschedule/mathias.jpeg"]}
                />
                <WorkshopSession
                title="Workshop 2: Running Node.js in the Google Cloud with"
                description=""
                speakerName="Myles Borins"
                signupUrl="https://ti.to/coldfront/coldfront-2018/with/xba-wd04a4m"
                color="#0550EE"
                gridRow="2 / span 2"
                gridColumn="3"
                images={["/static/images/workshopschedule/myles.jpeg"]}
                />
                <WorkshopSession
                title="Workshop 3: Real-world Progressive Web Apps"
                signupUrl="https://ti.to/coldfront/coldfront-2018/with/stqmvryakdo"
                description=""
                speakerName="Maximiliano Firtman"
                color="#0477F2"
                gridRow="2 / span 2"
                gridColumn="4"
                images={["/static/images/workshopschedule/max.jpg"]}
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

            :global(.session) {
                position: relative;
                padding: 16px 27px;

                @media(max-width: 800px){
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
            :global(.schedule-images){
                position: absolute;
                bottom: 10px;
            }
            :global(.schedule-image){
                width: 51px;
                clip-path: circle(25px at center);
            }

            @media(max-width: 800px){
                #workshop-grid, #workshop-program{
                    grid-template-columns: 40px auto;

                    .time-line{
                        @media(max-width: 800px){
                            margin-left: 40px;
                        }
                    }
    
                    .time-label {
                        @media(max-width: 800px){
                            font-size: 12px;
                            top: -11px;
                        }
                    }

                    :global(.session) {
                        font-size: 12px;
                        padding: 11px 8px;

                        :global(.schedule-image){
                            width: 31px;
                            margin-right: 10px;
                            clip-path: circle(15px at center);
                        }
                    }
                }
            }

        `}
        </style>

    </div>
)