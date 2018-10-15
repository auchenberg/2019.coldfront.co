import NewsletterForm from '../components/newsletterForm'
import Section from '../components/section'
import Head from 'next/head'

export default (props) => (    

        <div className="intro">
            <Head>
                <meta property="og:title" content={ (props.title ? props.title + ` - ` : ``) + `ColdFront 2018`} />
                <meta property="og:image" content={`https://2018.coldfront.co` + props.img}/>
                <meta name="twitter:title" content={ (props.title ? props.title + ` - ` : ``) + `ColdFront 2018`} />
                <meta name="twitter:image:src" content={`https://2018.coldfront.co` + props.img} />
            </Head>

            <div className="narrow text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>

            {props.img &&
                <img src={props.img} />
            }
        

    <style jsx>{`


        .text {
            padding-bottom: 50px;
        }

        img {
            width: 100%;
        }


    `}</style>
    </div>
)



