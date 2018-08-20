import Section from './section'
import SpeakerCard from '../components/speakerCard'

export default (props) => (

    <React.Fragment>
        <SpeakerCard
            speakerImage="/static/images/speakers/speaker-sara.jpg"
            speakerTheme="future of real-world CSS"
            speakerName="Sara Soueidan"
            speakerTitle="Freelance front-end web developer"
            speakerPosition="Sara Soueidan is a Lebanese freelance front-end web developer working with companies across the globe, building clean, responsive front-ends for Web sites and applications focused on accessibility, progressive enhancement and performance."
            twitter="https://twitter.com/SaraSoueidan"
            compact={props.compact}
        />

        <SpeakerCard
            speakerImage="/static/images/speakers/speaker-brent.png"
            speakerName="Brent Vatne"
            speakerTheme="future of Expo and React Native"
            speakerTitle="Developer at Expo and core contributor to React Native"
            speakerPosition="Developer at [Expo](https://expo.io), core contributor to [React Native](http://github.com/facebook/react-native), and project lead on [React Navigation](https://github.com/react-navigation/react-navigation). Spare time is spent traveling and playing with [#lucythetri](https://www.instagram.com/explore/tags/lucythetri)."
            twitter="https://twitter.com/notbrent"
            compact={props.compact}
        />

        <SpeakerCard
            speakerImage="/static/images/speakers/speaker-shirley.jpg"
            speakerName="Shirley Wu"
            speakerTheme="future of web visualizations"
            speakerTitle="freelance software engineer"
            speakerPosition="Shirley Wu is a freelance software engineer specializing in data visualization. She combines her love of art, math, and code into colorful, interactive data visualizations. "
            twitter="https://twitter.com/sxywu"
            compact={props.compact}
        />

        <SpeakerCard 
            speakerImage="/static/images/speakers/speaker-myles.jpg"
            speakerName="Myles Borins"
            speakerTheme="future of open web standards"
            speakerTitle="Google as a developer advocate serving the Node.js ecosystem"
            speakerPosition="Myles Borins is a developer, musician, artist, and maker. They work for Google as a developer advocate serving the Node.js ecosystem. Myles cares about the open web and healthy communities" 
            twitter="https://twitter.com/mylesborins?lang=en" 
            compact={props.compact}
        />

        <SpeakerCard
            speakerImage="/static/images/speakers/speaker-sarah.jpg"
            speakerName="Sarah Drasner"
            speakerTheme="future of ethics for developers"
            speakerTitle="Award-winning Speaker, Senior Developer Advocate at Microsoft"
            speakerPosition="Sarah Drasner is an award-winning Speaker, Senior Developer Advocate at Microsoft, and Staff Writer at CSS-Tricks. Sarah is also the co-founder of Web Animation Workshops, with Val Head"
            twitter="https://twitter.com/sarah_edo/"
            compact={props.compact}
         />

        <SpeakerCard
            speakerImage="/static/images/speakers/speaker-michael.jpg"
            speakerName="Michael Thomsen"
            speakerTheme="future of cross-platform native apps"
            speakerTitle="Product manager at Google for Dart and Flutter"
            speakerPosition="Michael Thomsen is a product manager at Google working on the Dart programming language, and Flutter, Google’s mobile UI framework to craft high-quality interfaces for iOS and Android"
            twitter="https://twitter.com/MiSvTh/"
            compact={props.compact}
         />

        <SpeakerCard
            speakerImage="/static/images/speakers/speaker-mina.jpg"
            speakerName="Mina Markham"
            speakerTheme="future of doing good as a developer"
            speakerTitle="Senior Engineer at Slack"
            speakerPosition="Mina Markham is a Senior Engineer at Slack. She’s a lover of design systems and prolific public speaker, appearing at events worldwide, including CSS Dev Conf, Fluent, and Future of Web Design. Mina also co-organizes Front Porch Conference."
            twitter="https://twitter.com/MinaMarkham/"
            compact={props.compact}
         />         

        <SpeakerCard
            speakerImage="/static/images/speakers/speaker-harry.jpg"
            speakerName="Harry Roberts"
            speakerTheme="future of web performance"
            speakerTitle="Consultant Front-end Architect:"
            speakerPosition="Harry Roberts is a consultant Front-end Architect: @@google, @UN, @Etsy, @kickstarter, @BBC, @Unileve, @Deloitte,and more • Speaker • Author: @cssguidelines"
            twitter="https://twitter.com/csswizardry"
            compact={props.compact}
        />    
    
        <SpeakerCard
            speakerImage="/static/images/speakers/speaker-vitaly.jpg"
            speakerName="Vitaly Friedman"
            speakerTheme="future adventures in front-end"
            speakerTitle="Vitaly Friedman is the author, co-author and editor of all Smashing books."
            speakerPosition="Vitaly Friedman is the author, co-author and editor of all Smashing books. He currently works developing the new Smashing Memberships around the globe!"
            twitter="https://twitter.com/smashingmag/"
            compact={props.compact}
        />     

        <SpeakerCard
            speakerImage="/static/images/speakers/speaker-mathias.jpg"
            speakerName="Mathias Buus"
            speakerTheme="Madscience with JavaScript in workshop"
            speakerTitle="JavaScript hacker"
            speakerPosition="Mathias Buus is a self taught JavaScript hacker from Copenhagen that has been working with Node.js since the 0.2 days. Mathias likes to work with P2P and distributed systems and is the author of more than 650 modules on npm, including some of the most popular ones for working with streams. In addition he has spoken about mad science projects at various conferences around the world."
            twitter="https://twitter.com/mafintosh/"
            compact={props.compact}
        />   

        <SpeakerCard
            speakerImage="/static/images/speakers/speaker-thomas.jpg"
            speakerName="Thomas Watson"
            speakerTheme="Madscience with JavaScript in workshop"
            speakerTitle="JavaScript hacker at Elastic"
            speakerPosition="Thomas Watson is a computer programmer, public speaker, and open source hacker. He works on Application Performance Monitoring at Elastic, the company behind Elasticsearch, Kibana, and Logstash. Thomas has published hundreds of Node modules> and mad science projects, he is a Node.js Core member, and a part of the Node.js Diagnostics Working Group at the Node.js Foundation."
            twitter="https://twitter.com/wa7son"
            compact={props.compact}
        />    

        <SpeakerCard
            speakerImage="/static/images/speakers/speaker-max.jpg"
            speakerName="Maximiliano Firtman"
            speakerTheme="Progressive Web Apps in workshop"
            speakerTitle="mobile and web developer, trainer, speaker, and author"
            speakerPosition="Maximiliano Firtman (@firt) is a mobile and web developer, trainer, speaker, and author. Max teaches mobile HTML5, PWAs and performance trainings for top companies around the world. The founder of ITMaster Academy, Max is a well-known professional in the mobile web community with dozens of articles and online courses published. He has authored many books, including Programming the Mobile Web and High Performance Mobile Web, published by O’Reilly Media. He is a frequent speaker at conferences and many other events around the world."
            twitter="https://twitter.com/firt"
            compact={props.compact}
        />         

        <SpeakerCard
            speakerImage="/static/images/speakers/speaker-tony.jpg"
            speakerName="Tony Beltramelli"
            speakerTheme="Machine learning to convert design to code“ in Interactive Session by Uizard"
            speakerTitle="CEO and Co-Founder, Uizard"
            speakerPosition="Tony is the CEO and Co-Founder of [Uizard](http://uizard.io). His work on the application of Deep Learning has been recognized globally and featured in international media"
            twitter="https://twitter.com/Tbeltramelli"
            compact={props.compact}
        />   

        <SpeakerCard
            speakerImage="/static/images/speakers/speaker-charlie.jpg"
            speakerName="Charlie Gerard"
            speakerTheme="future of emotive interfaces"
            speakerTitle="Software developer at ThoughtWorks"
            speakerPosition="Charlie is a software developer at [ThoughtWorks](http://thoughtworks.com/) in Sydney. She is passionate about creative coding, hardware and spends her free time experimenting with technology to create interactive prototypes. She also spends time giving back to the community by mentoring new developers, contributing to open-source projects and speaking at events."
            twitter="https://twitter.com/devdevcharlie"
            compact={props.compact}
        />   

        <SpeakerCard
            speakerImage="/static/images/speakers/speaker-henrik.jpg"
            speakerName="Henrik Haugbølle"
            speakerTheme="“Machine learning to convert design to code“ in Interactive Session by Uizard"
            speakerTitle="CTO and Co-Founder, Uizard"
            speakerPosition="Henrik is the CTO and Co-Founder of [Uizard](http://uizard.io). With a passion for startups, frontend, and JavaScript he's often encountered as an active part of the Danish JS community."
            twitter="https://twitter.com/haugboelle "
            compact={props.compact}
        />     

        <SpeakerCard
            speakerImage="/static/images/speakers/speaker-jessica.jpg"
            speakerName="Jessica Liu"
            speakerTheme="Future of front-end and design tools"
            speakerTitle="Engineering Manager at Figma"
            speakerPosition="Jessica is an engineering manager at Figma. She has spent her career bridging the gap between design, software engineering, and occasionally musical theater."
            twitter=""
            compact={props.compact}
        />     

        <SpeakerCard
            speakerImage="/static/images/speakers/speaker-srdan.jpg"
            speakerName="Srđan Rašić"
            speakerTheme="“Building AR apps with ARKit on iOS” Interactive session by Shape"
            speakerTitle="Software developer at Shape"
            speakerPosition="Srđan is a software developer at Shape, an active open-source contributor and an author of the popular frameworks Bond and ReactiveKit. Interest in new and emerging technologies has marked my career with things from functional-reactive programming to the wonders of augmented reality. "
            twitter=""
            compact={props.compact}
        />       

        <SpeakerCard
            speakerImage="/static/images/speakers/speaker-sune.jpg"
            speakerName="Sune Simonsen"
            speakerTheme="“Architecture for an ever changing environment” in interactive session by Zendesk"
            speakerTitle="Software Engineer at Zendesk"
            speakerPosition="Sune is a Software Engineer at Zendesk where I do front-end development in React, previously I was at One.com building calendar and webmail for thousands of concurrent users. I'm running a couple of open source projects most notably unexpected.js.org. "
            twitter=""
            compact={props.compact}
        />     


      
    </React.Fragment>
)
