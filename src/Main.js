import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 15px;
	font-size: calc(16px + 2vmin);
	font-weight: bold;
	letter-spacing: 1.25px;
`

const Content = styled.div`
	display: flex;
	padding: 20px;
`

export const Main = (props) => {
	return (
		<>
			<Header>Hello CodeSandbox</Header>
			<Content>Start editing to see some magic happen!</Content>
		</>
	)
}
