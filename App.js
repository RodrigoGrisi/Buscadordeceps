import {
  StyleSheet, Text, View,
  TextInput, TouchableOpacity,
  SafeAreaView,
  Keyboard
} from 'react-native';
import React, { useState } from 'react';
import api from './src/services/api'

export default function App() {

  function buscar(){
    Keyboard.dismiss();
  }

  const [cep, setCep] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center', width: '100%' }}>
        <Text style={styles.textoTitulo}>Digite o CEP desejado:</Text>
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          placeholder='Ex: 006652-000'
          value={cep}
          onChangeText={(texto) => setCep(texto)}
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity onPress={buscar} style={[styles.botao, {backgroundColor: '#1d75cd'}]}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, {backgroundColor: '#cd3e1d'}]}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultado}>
        <Text style={styles.itemText}>CEP: 790000</Text>
        <Text style={styles.itemText}>Logradouro: 790000</Text>
        <Text style={styles.itemText}>Bairro: 790000</Text>
        <Text style={styles.itemText}>Cidade: 790000</Text>
        <Text style={styles.itemText}>Estado: 790000</Text>
      </View>

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
  resultado:{
    flex: 1,
    marginTop: 30,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText:{
    fontSize: 22,
  }
});
