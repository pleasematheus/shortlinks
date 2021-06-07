import React from 'react'

import { LinearGradient } from 'expo-linear-gradient'
import StatusBarPage from '../../components/StatusBarPage'
import Menu from '../../components/Menu'

import { Feather } from '@expo/vector-icons'
import { ContainerLogo, Logo, ContainerContent, Title, SubTitle, ContainerInput, BoxIcon, Input, ButtonLink, ButtonLinkText } from './styles'

export default function Home() {
	return (
		<LinearGradient
			colors={['#1DDBB9', '#132742']}
			style={{ flex: 1, justifyContent: 'center' }}
		>
			<StatusBarPage
				barStyle="light-content"
				backgroundColor="#1AA696"
			/>
			
			<Menu/>
			
			<ContainerLogo>
				<Logo source={require('../../assets/Logo.png')} resizeMode="contain"/>
			</ContainerLogo>

			<ContainerContent>
				<Title>shortlinks</Title>
				<SubTitle>Cole seu link aqui</SubTitle>

				<ContainerInput>
					<BoxIcon>
						<Feather
							name="link"
							size={22}
							color="#FFF"
						/>
					</BoxIcon>
					<Input
						placeholder="Cole seu link aqui..."
						placeholderTextColor="white"
					/>
				</ContainerInput>

				<ButtonLink>
					<ButtonLinkText>Gerar link</ButtonLinkText>
				</ButtonLink>
			</ContainerContent>
		</LinearGradient>
	)
}