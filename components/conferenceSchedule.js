
import Day1 from './conferenceScheduleDay1'
import Day2 from './conferenceScheduleDay2'

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="conference-schedule">

                <div className="headers">          
                    <div className="day1">
                        {this.props.selectedDay === 'day1' && 
                            <h2>Day 1: Tuesday, November 13th 2018</h2>
                        }
                        
                        {this.props.selectedDay === 'day2' && 
                            <h2>Day 2: Wednesday, November 14th 2018</h2>
                        }                 
                    </div>         
                </div>

                <div id="conference-grid">
                    <div className="time-line" />
                    <div className="time-label">08:00</div>
                    <div className="time-line" />
                    <div className="time-label">09:00</div>
                    <div className="time-line" />
                    <div className="time-label">10:00</div>
                    <div className="time-line" />
                    <div className="time-label">11:00</div>
                    <div className="time-line" />
                    <div className="time-label">12:00</div>
                    <div className="time-line" />
                    <div className="time-label">13:00</div>            
                    <div className="time-line" />
                    <div className="time-label">14:00</div>            
                    <div className="time-line" />
                    <div className="time-label">15:00</div>
                    <div className="time-line" />            
                    <div className="time-label">16:00</div>
                    <div className="time-line" />
                    <div className="time-label">17:00</div>
                    <div className="time-line" />            
                    <div className="time-label">18:00</div>
                    <div className="time-line" />
                    <div className="time-label">20:00</div>
                </div>

                <div id="conference-program">
                    {this.props.selectedDay === 'day1' ? <Day1 /> : ''}
                    {this.props.selectedDay === 'day2' ? <Day2 /> : ''}
                </div>

                <style jsx>{`    
                    #conference-schedule {
                        position: relative; 
                    }

                    .headers {
                        display: grid;               
                        grid-template-columns: 80px auto 100px auto;

                        .day1 {
                            grid-column: 2;
                        }            
                    }

                    #conference-grid {
                        position: absolute;
                        top: 110px;
                        width: 100%;
                        display: grid;
                        grid-template-columns: 80px auto;
                        grid-template-rows: 1px 180px 1px 180px 1px 180px 1px 180px 1px 180px 1px 180px 1px 180px 1px 180px 1px 180px 1px 180px 1px 180px;
                        grid-column-gap: 8px;
                        
                        .time-line{
                            background: white;
                            grid-column-start: 1;
                            grid-column: span 2;
                            margin-left: 80px;
                            height: 1px;
                        }

                        .time-label {
                            position: relative;
                            top: -15px;
                        }
                    }

                    #conference-program {

                        position: relative;
                        display: grid;
                        grid-template-columns: 80px auto auto 0;
                        grid-template-rows: 1px 45px 45px 45px 45px 1px 45px 45px 45px 45px 1px 45px 45px 45px 45px 1px 45px 45px 45px 45px 1px 45px 45px 45px 45px 1px 45px 45px 45px 45px 1px 45px 45px 45px 45px 1px 45px 45px 45px 45px 1px 45px 45px 45px 45px 1px 45px 45px 45px 45px 1px 45px 45px 45px 45px;
                    }

                    @media(max-width: 1000px){
                        #conference-grid, 
                        #conference-program{
                            grid-template-columns: 40px auto;

                            .time-line{
                                margin-left: 40px;
                            }
            
                            .time-label {                        
                                font-size: 12px;
                                top: -11px;
                            }
                        }
                    }

                `}
                </style>
            </div>
        )
    }
}
