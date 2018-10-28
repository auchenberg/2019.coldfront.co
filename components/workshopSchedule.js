import WorkshopSession from './programSession'

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
                title="Workshop 1: Centralization is so 1999 - decentralized web in Node.js"
                description=""
                speakers={
                    ["Thomas Watson", "Mathias Buus"]
                }
                color="#0629EA"
                gridRow="2 / span 6"
                gridColumn="2"
                images={[
                    "/static/images/speakers/speaker-thomas.jpg", 
                    "/static/images/speakers/speaker-mathias.jpg"
                ]}
                />
                
                <WorkshopSession
                title="Workshop 2: Running Node.js in the Google Cloud with"
                description=""
                speakers={
                    ["Myles Borins"]
                }
                color="#0550EE"
                gridRow="2 / span 2"
                gridColumn="3"
                images={["/static/images/speakers/speaker-myles.jpg"]}
                />

                <WorkshopSession
                title="Workshop 4: Getting started with Tensorflow.js"
                description=""
                speakers={[
                    "Daniel Smilkov",
                    "Nikhil Thorat"
                ]}
                color="#0550EE"
                gridRow="5 / span 3"
                gridColumn="3"
                images={[
                    "/static/images/speakers/speaker-nikhil.jpg",
                    "/static/images/speakers/speaker-daniel.jpg"
                ]} 
                />


                <WorkshopSession
                title="Workshop 3: Real-world Progressive Web Apps"
                description=""
                speakers={
                    ["Maximiliano Firtman"]
                }
                color="#0477F2"
                gridRow="2 / span 6"
                gridColumn="4"
                images={["/static/images/speakers/speaker-max.jpg"]}
                />
            
                <WorkshopSession 
                    title="ColdFront Student. Mini-student event for students in Copenhagen"
                    color="#7425F3"
                    gridRow="9 / span 4"
                    gridColumn="2"/>

            
            <WorkshopSession 
                title="Meetups, beers and snacks"
                description="React Native CPH: ColdFront edition"
                color="#2128EC"
                gridRow="12 / span 6"
                gridColumn="2"
                logo="/static/images/workshopschedule/reactnativecph.png"
                link="https://www.meetup.com/React-Native-CPH/events/255775917/"
                />
                <WorkshopSession
                title="Meetups, beers and snacks"
                description="Special GDG CPH + CopenhagenJS meetup: ML extravaganza"
                color="#7425F3"
                gridRow="12 / span 6"
                gridColumn="3"
                link="https://www.meetup.com/GDG-Copenhagen/events/255724292/"
                images={[
                    "/static/images/workshopschedule/gdg.png", 
                    "/static/images/workshopschedule/cphjs.png"
                ]}
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
                grid-template-rows: 1px 180px 1px 180px 1px 180px 1px 180px 1px 180px 1px 180px;

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
                grid-template-rows: 1px 90px 90px 1px 90px 90px 1px 90px 90px 1px 90px 90px 1px 90px 90px 1px 90px 90px;
                grid-column-gap: 8px;
            }

            :global(.session) {
                position: relative;
                padding: 16px 27px;
                font-size: 18px;
            }
            :global(.description) {

            }
            :global(a.workshop-signup){
                display: block;
                margin: 15px 0;
                color: white;
                text-decoration: underline;
            }
            :global(.schedule-images, .schedule-logo){
                position: absolute;
                bottom: 10px;
            }
            :global(.schedule-image){
                width: 51px;
                clip-path: circle(25px at center);
            }
            :global(.schedule-logo img){
                width: 131px;
                clip-path: circle(65px at center);
            }


            @media(max-width: 800px){
                :global(.session) {
                    font-size: 12px;
                }
                :global(.schedule-logo img){
                    width: 44px;
                    clip-path: circle(22px at center);
                }
            }

            @media(max-width: 1000px){
                #workshop-grid, #workshop-program{
                    grid-template-columns: 40px auto;

                    .time-line{
                        margin-left: 40px;
                    }
    
                    .time-label {                        
                        font-size: 12px;
                        top: -11px;
                    }

                    :global(.session) {
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