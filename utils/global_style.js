import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

b {
	font-weight: 600;
}

body, html{
    width: 100%;
    height: auto;
    font-size: 16px;
		margin: 0;
		font-weight: 400;
}

body {
	@import url('https://fonts.googleapis.com/css?family=Nunito:200,300,400,600,700,800,900&display=swap');
	overflow-x: hidden;
	font-family: 'Nunito', sans-serif;
	color: #4a4a4a;
	font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	-webkit-overflow-scrolling: touch;
	-webkit-tap-highlight-color: transparent;
}

a {
  text-decoration: none;
}

a:-webkit-any-link {
  text-decoration: none;
}

a:link, a:visited, a:hover, a:active {
  color: #4a4a4a;
}

figure{
  margin: 0px;
}

input[type="text"], input[type="number"], input {
  outline: none;
}

input, textarea, select, button {
  font-weight: 400;
  font-family: 'Nunito', sans-serif !important;
}

select {
	width: 100% !important;
	background: #FFFFFF;
  border: 1px solid #eeeeee;
	border-radius: 4px;
	line-height: 25px;
	/* height: 35px; */
	font-size: 14px;
	font-weight: 400;
	color: #4a4a4a;
	outline: none;
	appearance:none;
	background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%);
  background-position:
    calc(100% - 20px) calc(1em ),calc(100% - 15px) calc(1em),calc(100% - .5em) 0.2em;
  background-size:
    5px 5px,
    5px 5px,
    1.5em 1.5em;
	background-repeat: no-repeat;
	padding: 0.2em 0 0.2em 1em;
	display: block;
	margin: 0 auto;
	text-align:center;
}


select:active, select:hover {
  outline: none
}
`;

export default Global;
