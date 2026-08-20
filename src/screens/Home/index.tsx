import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { AddressInfo } from '../../components/AddressInfo';
import { searchAddressByCep } from '../../services/api';
import { AddressData } from '../../types/cep';
import { styles } from './styles';

export const Home: React.FC = () => {
  const [cep, setCep] = useState('');
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState<AddressData | null>(null);

  const handleCepChange = (value: string) => {
    const numericValue = value.replace(/\D/g, '').slice(0, 8);
    setCep(numericValue);
  };

  const handleSearch = async () => {
    const normalizedCep = cep.trim();

    if (!normalizedCep || normalizedCep.length !== 8) {
      Alert.alert('CEP inválido', 'Digite um CEP com 8 números.');
      return;
    }

    if (loading) {
      return;
    }

    Keyboard.dismiss();
    setLoading(true);

    try {
      const response = await searchAddressByCep(normalizedCep);

      if (response?.erro) {
        setAddress(null);
        Alert.alert('CEP não encontrado', 'Verifique o número informado e tente novamente.');
        return;
      }

      setAddress(response);
    } catch (error) {
      setAddress(null);
      Alert.alert('Erro', 'Não foi possível consultar o CEP. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar CEP</Text>

      <TextInput
        style={styles.input}
        value={cep}
        onChangeText={handleCepChange}
        placeholder="Digite o CEP"
        keyboardType="numeric"
        maxLength={8}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <TouchableOpacity
        onPress={handleSearch}
        disabled={loading}
        style={[styles.button, loading && styles.buttonDisabled]}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Buscar</Text>
        )}
      </TouchableOpacity>

      <Text style={styles.helper}>Digite apenas números para localizar o endereço.</Text>

      <AddressInfo address={address} />
    </View>
  );
};
