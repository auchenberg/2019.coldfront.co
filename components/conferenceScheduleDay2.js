import Session from './session'

export default ({ children }) => (
    <>
    <Session 
        title="Breakfast"
        description=""
        color="#7425F3"
        time="8:00am - 9:00am"
    />

    <Session 
        title="Welcome back!"
        description=""
        color="#0629EA"
        time="9:00am - 9:15am"
        speakers={
            ["Phil Hawksworth"]
        }
    />   

    <Session 
        title=""
        description=""
        color="#0629EA"
        time="9:15am - 10:00am"
        speakers={
            ["Sara Soueidan"]
        }        
    />   

    <Session 
        title=""
        description=""
        color="#0629EA"
        time="10:00am - 10:45am"
        speakers={
            ["Jessica Liu"]
        }        
    />       

    <Session 
        title="Coffee break"
        description=""
        color="#7425F3"
        time="10:45am - 11:15am"
    />           

    <Session 
        description=""
        color="#0629EA"
        time="11:15am - 12:00am"
        speakers={
            ["Myles Borins"]
        }             
    />  

    <Session 
        description=""
        color="#0629EA"
        time="12:00am - 12:45am"
        speakers={
            ["Charlie Gerard"]
        }             
    />  

    <Session 
        title="Lunchtime"
        description=""
        color="#7425F3"
        time="12:45am - 13:30am"
    />             

    <Session 
        title="Interactive breakout session by 23Video"
        description=""
        color="#0477F2"
        time="13:30am - 14:00am"      
    />  

    <Session 
        title="“Architecture for an ever changing environment” by Zendesk"
        description=""
        color="#0477F2"
        time="13:30am - 14:00am"
        speakers={
            ["Sune Simonsen"]
        }       
    />  
    
    <Session 
        title="Breakout Interactive session"
        description=""
        color="#0477F2"
        time="14:00am - 14:30am"
    />  

    <Session 
        title="Breakout Interactive session"
        description=""
        color="#0477F2"
        time="14:00am - 14:30am"
    />          
      

    <Session 
        title="Coffee break"
        description=""
        color="#7425F3"
        time="14:30am - 15:00am"
    />  

    <Session 
        title="Session details to be announced"
        description=""
        color="#0629EA"
        time="15:00am - 15:45am"
        speakers={
            [""]
        }          
    /> 

    <Session 
        title="Session details to be announced"
        description=""
        color="#0629EA"
        time="15:45am - 16:30am"
        speakers={
            [""]
        }        
    />                   

    <Session 
        title="Closing session: Future of doing good as a developer"
        description=""
        color="#0629EA"
        time="16:30am - 17:15am"
        speakers={
            ["Mina Markham"]
        }        
    />   

    <Session 
        title="The end + Family photo"
        description=""
        color="#7425F3"
        time="17:15am - 17:30am"
    />       

    <Session 
        title="Social dinners + Meet in the bar"
        description=""
        color="#7425F3"
        time="17:30am - 23:00am"
    />  
    </>
)