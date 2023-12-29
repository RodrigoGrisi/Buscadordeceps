import {
  StyleSheet, Text, View,
  TextInput, TouchableOpacity,
  SafeAreaView,
  Keyboard, Image
} from 'react-native';
import React, { useState, useRef } from 'react';
import api from './src/services/api'

export default function App() {
  const [cep, setCep] = useState('')
  const inputRef = useRef(null)
  const [infoCep, setInfoCep] = useState(null)

  async function buscar() {
    if (cep == '') {
      alert('Digite um cep valido')
      return;
    }

    try {
      const response = await api.get(`/${cep}/json`);
      setInfoCep(response.data);
    } catch (error) {
      console.error("Erro na requisição:", error.message);
    }

    Keyboard.dismiss();
  }

  function limpar() {
    setCep('')
    setInfoCep(null)
    inputRef.current.focus();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={{ width: 50, height: 50, marginBottom: 20 }} source={require('./assets/buscador.png')} />
      <View style={{ alignItems: 'center', width: '100%' }}>
        <Text style={styles.textoTitulo}>Digite o CEP desejado:</Text>
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          placeholder='Ex: 006652-000'
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          ref={inputRef}
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity onPress={buscar} style={[styles.botao, { backgroundColor: '#4ba2ea' }]}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={limpar} style={[styles.botao, { backgroundColor: '#ff3b4a' }]}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Limpar</Text>
        </TouchableOpacity>
      </View>


      {infoCep &&
        <View style={styles.resultado}>
          <Text style={styles.itemText}>CEP: {infoCep.cep}</Text>
          <Text style={styles.itemText}>Logradouro: {infoCep.logradouro}</Text>
          <Text style={styles.itemText}>Bairro: {infoCep.bairro}</Text>
          <Text style={styles.itemText}>Cidade: {infoCep.localidade}</Text>
          <Text style={styles.itemText}>Estado: {infoCep.uf}</Text>
        </View>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoTitulo: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  input: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#DDD',
    width: '70%',
    fontSize: 18,
    height: 42,
    borderRadius: 5
  },
  areaBtn: {
    width: '70%',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  botao: {
    padding: 20,
    borderRadius: 4,
  },
  resultado: {
    flex: 1,
    marginTop: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    fontSize: 20,
  }
});
