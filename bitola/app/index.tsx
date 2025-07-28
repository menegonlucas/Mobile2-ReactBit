import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Bitola() {
  const [corrente, setCorrente] = useState('');
  const [distancia, setDistancia] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const i = parseFloat(corrente);
    const d = parseFloat(distancia);

    if (!i || !d) {
      setResultado('Preencha os campos corretamente.');
      return;
    }

    const bit110 = (2 * i * d) / 294.64;
    const bit220 = (2 * i * d) / 510.4;

    setResultado(`110V: ${bit110.toFixed(2)} mm²\n220V: ${bit220.toFixed(2)} mm²`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bitola Elétrica</Text>
      <TextInput placeholder="Corrente (A)" keyboardType="numeric" value={corrente} onChangeText={setCorrente} style={styles.input} />
      <TextInput placeholder="Distância (m)" keyboardType="numeric" value={distancia} onChangeText={setDistancia} style={styles.input} />
      <Button title="Calcular" onPress={calcular} />
      {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#112D4E' },
  titulo: { fontSize: 24, color: '#fff', marginBottom: 20, textAlign: 'center' },
  input: { backgroundColor: '#3F72AF', color: '#fff', padding: 10, marginBottom: 10, borderRadius: 6 },
  resultado: { marginTop: 20, color: '#fff', fontSize: 16, textAlign: 'center' },
});