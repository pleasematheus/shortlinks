import React, { useState } from 'react'
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Modal } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import StatusBarPage from '../../components/StatusBarPage'
import Menu from '../../components/Menu'
import ModalLink from '../../components/ModalLink'

import { Feather } from '@expo/vector-icons'
import { ContainerLogo, Logo, ContainerContent, Title, SubTitle, ContainerInput, BoxIcon, Input, ButtonLink, ButtonLinkText } from './styles'

import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function Home() {

	const [input, setInput] = useState('')
	const [modalVisible, setModalVisible] = useState(false)

	function handleShortLink() {
		setModalVisible(true)
	}

	return (
		<TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
			<LinearGradient
				colors={['#1DDBB9', '#132742']}
				style={{ flex: 1, justifyContent: 'center' }}
			>
				<StatusBarPage
					barStyle="light-content"
					backgroundColor="#1AA696"
				/>
			
				<Menu/>
				
				<KeyboardAvoidingView
					behavior={Platform.OS === 'android' ? 'padding' : 'position'}
					enabled
				>
			
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
								autoCapitalize="none"
								autoCorrect={false}
								keyboardType="url"
								value={input}
								onChangeText={(text) => setInput(text)}
							/>
						</ContainerInput>

						<ButtonLink onPress={ handleShortLink }>
							<ButtonLinkText>Gerar link</ButtonLinkText>
						</ButtonLink>

					</ContainerContent>

				</KeyboardAvoidingView>

				<Modal visible={modalVisible} transparent animationType="slide">
					<GestureHandlerRootView style={{flex: 1}}>
						<ModalLink onClose={() => setModalVisible(false)}/>
					</GestureHandlerRootView>
				</Modal>
			</LinearGradient>
		</TouchableWithoutFeedback>
	)
}