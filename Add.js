import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';

const Add = ({ route }) => {
    const navigation = useNavigation();
    const { setTransactions } = route.params;

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('Income');

    const handleAddTransaction = () => {
        const newTransaction = {
            id: Math.random().toString(),
            title,
            amount: parseFloat(amount),
            type,
        };

        setTransactions(prevTransactions => [...prevTransactions, newTransaction]);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text>Add New Transaction</Text>
            <TextInput
                style={styles.input}
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Amount"
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
            />
            <RNPickerSelect
                value={type}
                onValueChange={(value) => setType(value)}
                items={[
                    { label: "Income", value: "Income" },
                    { label: "Expense", value: "Expense" },
                ]}
            />
            <Button title="Add Transaction" onPress={handleAddTransaction} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 8,
    },
});

export default Add;
