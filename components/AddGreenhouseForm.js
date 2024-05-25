import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

const AddGreenhouseForm = ({ onCancel, onSubmit }) => {
  const [greenhouseName, setGreenhouseName] = React.useState('');

  const handleSubmit = () => {
    onSubmit(greenhouseName);
    setGreenhouseName('');
  };

  return (
    <View>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
        placeholder="Greenhouse name"
        value={greenhouseName}
        onChangeText={setGreenhouseName}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={{ color: 'blue', fontWeight: 'bold' }}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onCancel}>
        <Text style={{ color: 'red', fontWeight: 'bold' }}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddGreenhouseForm;
