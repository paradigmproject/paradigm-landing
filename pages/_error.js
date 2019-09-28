import React, { Component } from "react";
import Head from "next/head";
import { withRouter } from "next/router";
import styled, { css } from "styled-components";
// import { Router } from "../routes";
import { useRouter } from "next/router";

const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
`;

const WrapperLogo = styled.div`
	position: absolute;
	height: 35px;
	width: auto;
	top: 35px;
	left: 35px;
	cursor: pointer;
	z-index: 2;
`;

const ButtonWrapper = styled.div`margin-top: 20px;`;

const ButtonText = styled.div`
	font-size: 1em;
	font-weight: 600;
	padding: 2px 5px;
`;

class ErrorPage extends Component {
	static getInitialProps({ res, err }) {
		const statusCode = res ? res.statusCode : err ? err.statusCode : null;
		return { statusCode };
	}
	render() {
		const router = useRouter();
		return (
			<div>
				<Head>
					<title>
						{this.props.statusCode}: Error ocurred in {this.props.router.asPath} | Paradigm
					</title>
				</Head>
				<Wrapper>
					<ButtonWrapper onClick={() => router.pushRoute("/")}>
						<ButtonText>Go to Home</ButtonText>
					</ButtonWrapper>
				</Wrapper>
			</div>
		);
	}
}

export default withRouter(ErrorPage);
