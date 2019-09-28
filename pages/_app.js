import React, { useEffect, useState } from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";
import { Provider as GQLProvider, createClient } from "urql";
import Head from "next/head";
// import { Router } from "../routes";
// import Router, { useRouter } from "next/router";
import { Router } from "../routes";

import { useQuery } from "urql";
import ErrorPage from "./_error";

import withGA from "next-ga";
// import * as Sentry from "@sentry/browser";

// Sentry.init({ dsn: "https://96e3f99378054f16937e9086f87e9632@sentry.io/1541641" });

// const client = createClient({
// 	url: "https://core.limapassport.com/query"
// });

const theme = {
	colors: {
		primary: "#9373ad"
	}
};

const PUBLIC_ROUTES = [ "/terms-of-service", "/privacy-policies", "/contact", "/auth", "/" ];

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		let e;
		if (Component.getInitialProps) {
			try {
				pageProps = await Component.getInitialProps(ctx);
				console.log("pageProps =========>", pageProps);
				if (pageProps.errorCode) {
					e = pageProps.errorCode;
				}
			} catch (error) {
				console.log("error =========>", error);
				e = error;
				// Sentry.captureException(error) //report to sentry
			}
		}
		return { pageProps, e };
	}

	constructor(props) {
		super(props);
		this.state = { eventId: null, hasError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// También puedes registrar el error en un servicio de reporte de errores
		logErrorToMyService(error, errorInfo);
	}

	// componentDidCatch(error, errorInfo) {
	// 	Sentry.withScope(scope => {
	// 		scope.setExtras(errorInfo);
	// 		const eventId = Sentry.captureException(error);
	// 		this.setState({ eventId });
	// 	});
	// }

	render() {
		const { Component, pageProps } = this.props;

		// let isPublic = PUBLIC_ROUTES.includes(this.props.router.pathname);
		// if (!isPublic) {
		// 	Router.push("/auth");
		// }
		if (this.props.e) {
			console.log("this.props.e :  =========> ", this.props.e);
			return <ErrorPage statusCode={this.props.e} />; // customize your error page
		}
		if (this.state.hasError) {
			return <button onClick={() => Sentry.showReportDialog({ eventId: this.state.eventId })}>Report feedback</button>;
		}

		return (
			<div>
				<Head>
					{/* <script
						dangerouslySetInnerHTML={{
							__html: ` (function(h,o,t,j,a,r){
								h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
								h._hjSettings={hjid:1459175,hjsv:6};
								a=o.getElementsByTagName('head')[0];
								r=o.createElement('script');r.async=1;
								r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
								a.appendChild(r);
						})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
						}}
					/> */}
					<title>Paradigm</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no" />
					<meta name="theme-color" content={theme.colors.primary} />
					<link rel="icon" type="image/x-icon" href="/static/images/favicon.ico" />
				</Head>

				{/* <GQLProvider value={client}> */}
				{/* <Person.Provider> */}
				<ThemeProvider theme={theme}>
					<Component {...pageProps} />
				</ThemeProvider>

				{/* </Person.Provider> */}
				{/* </GQLProvider> */}
			</div>
		);
	}
}

export default withGA("UA-148878400-1", Router)(MyApp);
