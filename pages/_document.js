import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <title>ColdFront 2018, the future of interface</title>
                    <meta name="viewport" content="width=device-width,initial-scale=1"/>
                    <meta name="theme-color" content="#673ab7" />
                    <link href="https://fonts.googleapis.com/css?family=Raleway:200,300,400" rel="stylesheet" />
                    <link rel="stylesheet" type="text/css" href='https://css.tito.io/v1.1' />
                    <link href="/static/css/bootstrap.min.css" rel="stylesheet"  />
                    <link href="/static/css/page.css" rel="stylesheet"  />
                    <link rel="shortcut icon" href="/static/images/favicon.png" sizes="16x16 32x32 64x64 128x128 256x256" />
                </Head>
                <body>
                    <div className="page container-fluid px-sm-4 px-md-0">
                        <Main />
                    </div>
                    <NextScript />

                    <script src='https://js.tito.io/v1' async></script>
                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>                    
                </body>
            </html>
        );
    }
}