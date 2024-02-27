import {View, Text, StyleSheet} from 'react-native'

export function Title() {
  return(
    <View>
     <Text style={styles.titulo}>Bem-Vindo a Fernando de Noronha</Text>
     <Text style={styles.texto}>Descubra o paraíso das praias intocadas e águas cristalinas. </Text>
      </View>
  )
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 25,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#018002',
    paddingBottom: 15,
    paddingTop: 15,
  },

  texto: {
    marginLeft: 10,
  }
})
