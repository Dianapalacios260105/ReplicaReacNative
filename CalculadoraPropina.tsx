import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

interface Calculation {
  id: string;
  amount: number;
  tipPercentage: number;
  tip: string;
  total: string;
}

const TipCalculator: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [tipPercentage, setTipPercentage] = useState<number>(15);
  const [customTip, setCustomTip] = useState<string>('');
  const [history, setHistory] = useState<Calculation[]>([]);

  const calculateTip = () => {
    const billAmount = parseFloat(amount);
    if (isNaN(billAmount)) {
      alert('Por favor, ingresa un monto válido.');
      return;
    }

    const tip = (billAmount * (parseFloat(customTip) || tipPercentage)) / 100;
    const total = billAmount + tip;

    const calculation: Calculation = {
      id: Math.random().toString(),
      amount: billAmount,
      tipPercentage: parseFloat(customTip) || tipPercentage,
      tip: tip.toFixed(2),
      total: total.toFixed(2),
    };

    setHistory([calculation, ...history]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Propinas</Text>
      <TextInput
        style={styles.input}
        placeholder="Monto del consumo"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Text style={styles.label}>Selecciona el porcentaje de propina:</Text>
      <View style={styles.buttonGroup}>
        <Button title="10%" onPress={() => setTipPercentage(10)} />
        <Button title="15%" onPress={() => setTipPercentage(15)} />
        <Button title="20%" onPress={() => setTipPercentage(20)} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="O ingresa un porcentaje personalizado"
        keyboardType="numeric"
        value={customTip}
        onChangeText={setCustomTip}
      />
      <Button title="Calcular Propina" onPress={calculateTip} />
      <Text style={styles.result}>Propina: ${((parseFloat(amount) * (parseFloat(customTip) || tipPercentage)) / 100).toFixed(2)}</Text>
      <Text style={styles.result}>Total a Pagar: ${(parseFloat(amount) + (parseFloat(amount) * (parseFloat(customTip) || tipPercentage)) / 100).toFixed(2)}</Text>
      <Text style={styles.historyTitle}>Historial de Cálculos:</Text>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text>Consumo: ${item.amount}</Text>
            <Text>Propina: {item.tipPercentage}%</Text>
            <Text>Monto de Propina: ${item.tip}</Text>
            <Text>Total: ${item.total}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
  },
  historyItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default TipCalculator; 