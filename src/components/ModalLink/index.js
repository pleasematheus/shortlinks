import React from 'react'
import { Text, TouchableOpacity, View, TouchableWithoutFeedback, Share } from 'react-native'

import { ModalContainer, Container, Header, LinkArea, Title, LongUrl, ShortLinkArea, ShortLinkUrl } from './styles'
import { Feather } from '@expo/vector-icons'
import Cliipboard from 'expo-clipboard'

export default function ModalLink({ onClose }) {

	function copyLink() {
		Clipboard
	}

	async function handleShare() {
		try {
			const result = await Share.share({
				message: ``
			})

			if (result.action === Share.sharedAction) {
				if (result.activityType) {
					console.log('ActivityType')
				} else {
					console.log('Compartilhado com sucesso!')
				}
			} else if (result.action === Share.dismissedAction) {
				console.log('Modal fechado')
			}
		} catch (error) {
			console.log(error.message)
		}
	}

	return (
		<ModalContainer>
			<TouchableWithoutFeedback onPress={() => onClose()}>
				<View style={{ flex: 1 }}></View>
			</TouchableWithoutFeedback>
			<Container>
				<Header>
					<TouchableOpacity onPress={() => onClose()}>
						<Feather name="x" color="#212743" size={30} />
					</TouchableOpacity>
					<TouchableOpacity onPress={handleShare}>
						<Feather name="share" color="#212743" size={30} />
					</TouchableOpacity>
				</Header>
				<LinkArea>
					<Title>Link Encurtado</Title>
					<LongUrl numberOfLines={1}></LongUrl>
					<ShortLinkArea
						activeOpacity={1}
						onPress={copyLink}
					>
						<ShortLinkUrl numberOfLines={1}></ShortLinkUrl>
						<TouchableOpacity onPress={copyLink}>
							<Feather
								name="copy"
								color="#fff"
								size={30}
							/>
						</TouchableOpacity>
					</ShortLinkArea>
				</LinkArea>
			</Container>
		</ModalContainer>
	)
}