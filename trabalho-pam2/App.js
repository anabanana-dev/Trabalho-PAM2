import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { TextInput as PaperInput, HelperText } from 'react-native-paper';

const App = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');
  const [erroCep, setErroCep] = useState('');

  const buscarCep = async () => {
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();  
        if (data.erro) {  
          setErroCep('CEP não encontrado');
        } else {
          console.log(data);
          setEstado(data.estado);
          setCidade(data.localidade)
          setRua(data.logradouro);
          setBairro(data.bairro); 
          setErroCep('');
        }
      } catch (error) {
        setErroCep('Erro ao buscar CEP');
      }
    } else {
      setErroCep('CEP deve ter 8 caracteres');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        label="Nome"
        value={nome}
        onChangeText={setNome}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 10 }}
      />
      <PaperInput
        label="CEP"
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
        style={{ marginBottom: 10 }}
      />
      {erroCep && <HelperText type="error">{erroCep}</HelperText>}
      <Button title="Buscar CEP" onPress={buscarCep} />

      {estado && (
        <Text style={{ marginTop: 10 }}>Estado: {estado}</Text>
      )}

      {cidade && (
        <Text style={{ marginTop: 10 }}>Cidade: {cidade}</Text>
      )}

      {rua && (
        <Text style={{ marginTop: 10 }}>Rua: {rua}</Text>
      )}

      {bairro && (
        <Text style={{ marginTop: 10 }}>Bairro: {bairro}</Text>
      )}

    </View>
  );
};

export default App;