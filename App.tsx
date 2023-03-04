import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Navigation from '@/navigation/Navigation'

export default function App() {
	return (
		<>
			<StatusBar style='light' />
			<SafeAreaProvider>
				{/*<SafeAreaView>*/}
				{/*	<Header />*/}
				{/*	<Text>Open up App.tsx to start working on your app!</Text>*/}
				{/*</SafeAreaView>*/}
				<Navigation />
			</SafeAreaProvider>
		</>
	)
}
