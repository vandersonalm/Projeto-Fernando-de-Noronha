import { View, Text, StyleSheet } from 'react-native'

export function SubTitle() {
  return (
    <View>
      <Text style={styles.titulo}>Explore as Maravilhosas Praias</Text>
      <Text style={styles.texto}>Visite as praias de Fernando de Noronha e mergulhe nas águas azul-turquesa.</Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#f18210',
    paddingBottom: 15,
    paddingTop: 15,
    marginTop: 30
  },

  texto: {
    marginLeft: 10,
    color: '#000000'
  }
})