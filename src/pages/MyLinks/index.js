import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Menu from '../../components/Menu'
import StatusBarPage from '../../components/StatusBarPage'
import { Container, Title, ListLinks } from './styles'
import ListItem from '../../components/ListItem'

export default function MyLinks() {
	return (
		<Container>
			<StatusBarPage
				barStyle="light-content"
				backgroundColor="#006666"
			/>

			<Menu/>
			
			<Title>Meus links</Title>

			<ListLinks
				data={[{ id: 1, link: 'teste' }]}
				keyExtractor={(item) => String(item.id)}
				renderItem={({ item }) => <ListItem data={item} />}
				contentContainerStyle={{ paddingBottom: 20 }}
				showsVerticalScrollIndicator={false}
			/>
			
		</Container>
	)
}