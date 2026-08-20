import React from 'react';
import { Text, View } from 'react-native';

import { AddressData } from '../../types/cep';
import { styles } from './styles';

type AddressInfoProps = {
  address: AddressData | null;
};

export const AddressInfo: React.FC<AddressInfoProps> = ({ address }) => {
  if (!address) {
    return null;
  }

  const rows = [
    { label: 'CEP', value: address.cep },
    { label: 'Logradouro', value: address.logradouro },
    { label: 'Complemento', value: address.complemento },
    { label: 'Bairro', value: address.bairro },
    { label: 'Cidade', value: address.localidade },
    { label: 'UF', value: address.uf },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado</Text>
      {rows
        .filter(({ value }) => Boolean(value))
        .map(({ label, value }) => (
          <View key={label} style={styles.infoRow}>
            <Text style={styles.label}>{label}:</Text>
            <Text style={styles.value}>{value}</Text>
          </View>
        ))}
    </View>
  );
};
