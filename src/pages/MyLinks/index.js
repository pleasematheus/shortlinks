import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import StatusBarPage from '../../components/StatusBarPage'

export default function MyLinks() {
	return (
		<View>
			<StatusBarPage
				barStyle="light-content"
				backgroundColor="#006666"
			/>
			<Text>
				MyLinks
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	}
})