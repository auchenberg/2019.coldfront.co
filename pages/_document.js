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
					<link href="/static/css/bootstrap.min.css" rel="stylesheet"  />
					<link href="/static/css/page.css" rel="stylesheet"  />
					<link rel="shortcut icon" href="/static/images/favicon.png" sizes="16x16 32x32 64x64 128x128 256x256" />
				</Head>
				<body>
                    <div className="page container-fluid px-sm-4 px-md-0">
    					<Main />
                    </div>
					<NextScript />
				</body>
			</html>
		);
	}
}