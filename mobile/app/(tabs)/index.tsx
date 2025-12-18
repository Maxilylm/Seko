import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Link } from 'expo-router'

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>
          Frutas y Verduras{'\n'}
          <Text style={styles.heroHighlight}>Deshidratadas</Text>
        </Text>
        <Text style={styles.heroSubtitle}>
          Descubre el sabor concentrado de la naturaleza. 
          Productos 100% naturales y sin conservantes.
        </Text>
        <Link href="/productos" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver Productos</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Benefits */}
      <View style={styles.benefits}>
        <Text style={styles.sectionTitle}>¿Por qué Seko?</Text>
        
        <View style={styles.benefitCard}>
          <Text style={styles.benefitIcon}>🌿</Text>
          <Text style={styles.benefitTitle}>100% Natural</Text>
          <Text style={styles.benefitDescription}>
            Sin aditivos ni conservantes artificiales
          </Text>
        </View>

        <View style={styles.benefitCard}>
          <Text style={styles.benefitIcon}>🛡️</Text>
          <Text style={styles.benefitTitle}>Calidad Garantizada</Text>
          <Text style={styles.benefitDescription}>
            Selección cuidadosa de cada ingrediente
          </Text>
        </View>

        <View style={styles.benefitCard}>
          <Text style={styles.benefitIcon}>🚚</Text>
          <Text style={styles.benefitTitle}>Envío Rápido</Text>
          <Text style={styles.benefitDescription}>
            Entrega rápida y segura a todo Uruguay
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
  },
  hero: {
    padding: 24,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3E2723',
    marginBottom: 16,
  },
  heroHighlight: {
    color: '#8B4513',
  },
  heroSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6D4C41',
    marginBottom: 24,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#8B4513',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFF8DC',
    fontSize: 16,
    fontWeight: '600',
  },
  benefits: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3E2723',
    marginBottom: 24,
  },
  benefitCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  benefitIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  benefitTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3E2723',
    marginBottom: 8,
  },
  benefitDescription: {
    fontSize: 14,
    color: '#6D4C41',
    textAlign: 'center',
  },
})

