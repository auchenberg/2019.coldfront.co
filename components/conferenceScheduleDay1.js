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
        title="What's next for React Native and Expo"
        description="Fabric is a re-implementation of much of the internals of React Native that draws inspiration from the experiences of over three years of production use and turns initial design decisions upside down. In particular, it moves away from a mainly asynchronous bridge between the JavaScript and native runtimes by leveraging the React Fiber architecture. We’ll look at Fabric with a focus on what problems it aims to solve and which will problems will remain.
        <br /><br />We’ll also discuss the company that I work on, Expo. Expo is an important part of the React Native ecosystem because it builds tools, services, and libraries around React Native core that are increasingly depended on by the community. It removes the native build step required to get started and provides a “Create React App”-style experience. Expo also provides a CodeSandbox style web playground called Snack. A key piece of Expo is the extensive native API wrapper modules that are available out of the box. Up until recently, this package has been monolithic and developers have had to buy into the entire Expo toolchain in order to take advantage of the native modules. We recently re-architected them so React Native users can use as few or as many as they like, and Flutter, Cordova, or even normal native apps can take advantage of them to have a cleaner cross-platform interface for interacting with native APIs. 
        <br /><br />We’ll talk about these “universal modules” and other exciting projects underway."
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
        description="It was not until recently that the term AR has been reserved for a small group of developers, researchers and tech enthusiasts. All that changed with a game catching the interest of the general public and the subsequent introduction of Apple's own technology that promises to deliver augmented reality experiences to the masses - ARKit. <br /><br />
            In this interactive session, we will learn what ARKit is, get a glimpse of what it can do and show you how easy it is to get started with it."
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
        title="It’s My (Third) Party, and I’ll Cry if I Want To"
        description="Like it or not, a huge part of modern web development involves the use of third-party providers: fonts, analytics, ads, tracking, and more all have an impact of performance, and can leave us (or, more worryingly, our visitors) susceptible to performance degradation.
            <br /><br />In this talk, we’ll take a look at unruly or uninvited (third-)party guests: how to detect them, how to audit them, and how to manage them. We’ll also look at the different tools available to help us stress-test and quantify the overhead these third parties bring, and what that means for users and businesses alike."
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