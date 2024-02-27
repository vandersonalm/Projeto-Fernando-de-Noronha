import {SafeAreaView} from 'react-native'
import {Title} from './components/Title.js'
import {SubTitle} from './components/SubTitle.js'
import {Button} from './components/Button.js'
import {Footer} from './components/Footer'

export default function App() {
  return (
    <SafeAreaView>
    <Title />
    <SubTitle />
    <Button />
    <Footer/>
    </SafeAreaView>
  )
}