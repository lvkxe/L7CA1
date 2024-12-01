import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import RNPickerSelect from "react-native-picker-select";

const Edit = ({ route }) => {
    const { transaction, setTransactions } = route.params;

    const [title, setTitle] = useState(transaction.title);
    const [amount, setAmount] = useState(transaction.amount.toString());
    const [type, setType] = useState(transaction.type);

    useEffect(() => {
        setTitle(transaction.title);
        setAmount(transaction.amount.toString());
        setType(transaction.type);
    }, [transaction]);

    const handleSaveChanges = () => {
        const updatedTransaction = { ...transaction, title, amount: parseFloat(amount), type };

        setTransactions(prevTransactions => {
            return prevTransactions.map(t => t.id === transaction.id ? updatedTransaction : t);
        });
        Alert.alert("Success", "Transaction updated successfully");
    };

    const handleDelete = () => {
        Alert.alert("Are you sure?", "This action cannot be undone.", [
            {
                text: "Yes",
                onPress: () => {
                    setTransactions(prevTransactions =>
                        prevTransactions.filter(t => t.id !== transaction.id)
                    );
                },
            },
            { text: "No", style: "cancel" },
        ]);
    };

    return (
        <View style={styles.container}>
            <Text>Edit Transaction</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
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
            <Button title="Save Changes" onPress={handleSaveChanges} />
            <Button title="Delete" onPress={handleDelete} />
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

export default Edit;
