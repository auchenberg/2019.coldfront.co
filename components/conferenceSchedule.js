
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

                <div id="conference-container">
                    <div id="conference-program">
                        {this.props.selectedDay === 'day1' ? <Day1 /> : ''}
                        {this.props.selectedDay === 'day2' ? <Day2 /> : ''}
                    </div>
                </div>

                <style jsx>{`    
                    #conference-schedule {
                        position: relative; 
                        padding: 0 20px;
                    }

                    .headers {
                        margin-bottom: 50px;            
                    }

                    #conference-container{
                        position: relative;
                    }
                    #conference-grid {
                        position: absolute;
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
                    }

                    @media(min-width: 1000px){

                        #conference-schedule {
                            padding: 0 80px;
                        }

                    
                        #conference-grid, 
                        #conference-program{
                            

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
