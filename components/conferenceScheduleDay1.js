import Session from './session'

export default ({ children }) => (
    <>
    <Session 
        title="Registration and breakfast"
        description=""
        color="#7425F3"
        time="8:00 - 9:00"
    />

    <Session 
        title="Welcome to ColdFront 2018!"
        description=""
        color="#0629EA"
        time="9:00 - 9:15"
        speakers={
            ["Phil Hawksworth"]
        }
    />   

    <Session 
        title=""
        description=""
        color="#0629EA"
        time="9:15 - 10:00"
        speakers={
            ["Sarah Drasner"]
        }        
    />   

    <Session 
        title="Session details to be announced"
        description=""
        color="#0629EA"
        time="10:00 - 10:45"
        speakers={
            [""]
        }        
    />       

    <Session 
        title="Coffee break"
        description=""
        color="#7425F3"
        time="10:45 - 11:15"
    />           

    <Session 
        description=""
        color="#0629EA"
        time="11:15 - 12:00"
        speakers={
            ["Brent Vatne"]
        }             
    />  

    <Session 
        description=""
        color="#0629EA"
        time="12:00 - 12:45"
        speakers={
            ["Michael Thomsen"]
        }             
    />  

    <Session 
        title="Lunchtime"
        description=""
        color="#7425F3"
        time="12:45 - 13:30"
    />             

    <Session 
        title="“Building AR apps with ARKit on iOS” interactive breakout session by Shape"
        description=""
        color="#0477F2"
        time="13:30 - 14:00"
        speakers={
            ["Srđan Rašić"]
        }           
    />  

    <Session 
        title="Interactive breakout session by Umbraco"
        description=""
        color="#0477F2"
        time="13:30 - 14:00"
    />

    <Session 
        title="Breakout Interactive session"
        description=""
        color="#0477F2"
        time="14:00 - 14:30"
    />  

    <Session 
        title="Breakout Interactive session"
        description=""
        color="#0477F2"
        time="14:00 - 14:30"
    />          
      

    <Session 
        title="Coffee break"
        description=""
        color="#7425F3"
        time="14:30 - 15:00"
    />  

    <Session 
        title=""
        description=""
        color="#0629EA"
        time="15:00 - 15:45"
        speakers={
            ["Harry Roberts"]
        }          
    /> 

    <Session 
        title=""
        description=""
        color="#0629EA"
        time="15:45 - 16:30"
        speakers={
            ["Shirley Wu"]
        }        
    />                   

    <Session 
        title="New Adventures In Front-End"
        description="The beast is alive! How do you feel about ASCII-alike CSS Grid layout with polyfluid sizing and ch unit? Do you feel itchy when it comes to building responsive HTML email layouts? What about the brave new world of dynamic static site generators and JAM stack? Have you ever tried to work around nested CSS Custom Properties, untamed 3rd-party scripts, shady service workers, multi-dimensional variable fonts and painfully outdated pattern libraries? Well, let’s bring it on!
            <br/ ><br/>Tighten up your seatbelt! Beware: you will not be able to unlearn what you’ll learn in the session! Ah, one more thing, take the techniques with a grain of salt — we do not take responsibility for sleepless nights and nightmares caused by the content of this session."
        color="#0629EA"
        time="16:30 - 17:15"
        speakers={
            ["Vitaly Friedman"]
        }        
    />   

    <Session 
        title="Social dinners and party"
        time="17:30 - 24:00"
        description="To finish ColdFront with a blast, we are throwing a party for all ColdFronters. We are planning on opening the bar, while bringing you a special experience in one of Copenhagen's most historic venues."
        color="#7425F3"
        link="/social"
    />  
    </>
)