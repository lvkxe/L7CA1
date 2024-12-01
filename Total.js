import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const Total = ({ route }) => {
    const { transactions } = route.params;

    const calculateTotals = () => {
        let totalIncome = 0;
        let totalExpense = 0;

        transactions.forEach(transaction => {
            if (transaction.type === 'Income') {
                totalIncome += transaction.amount;
            } else {
                totalExpense += transaction.amount;
            }
        });

        const deficitOrSurplus = totalIncome - totalExpense;
        const message = `Total Income: $${totalIncome}\nTotal Expense: $${totalExpense}\nYou have a ${deficitOrSurplus >= 0 ? 'Surplus' : 'Deficit'} of $${Math.abs(deficitOrSurplus)}`;

        Alert.alert('Summary', message, [{ text: 'OK' }]);
    };

    return (
        <View style={styles.container}>
            <Button title="Calculate Summary" onPress={calculateTotals} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
});

export default Total;
