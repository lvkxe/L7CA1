import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    const [transactions, setTransactions] = useState([
        { id: '1', title: 'Allowance', amount: 10.5, type: 'Income' },
        { id: '2', title: 'Lunch', amount: 5.5, type: 'Expense' },
        { id: '3', title: 'Movie', amount: 11.5, type: 'Expense' },
    ]);

    const renderTransaction = ({ item }) => (
        <View style={styles.transaction}>
            <Text>{item.title} - {item.type} - ${item.amount}</Text>
            <Button
                title="Edit"
                onPress={() => navigation.navigate('Edit', { transaction: item, setTransactions })}
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={transactions}
                renderItem={renderTransaction}
                keyExtractor={item => item.id}
            />
            <Button title="Add Transaction" onPress={() => navigation.navigate('Add', { setTransactions })} />
            <Button title="View Summary" onPress={() => navigation.navigate('Total', { transactions })} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    transaction: {
        padding: 10,
        marginVertical: 8,
        borderBottomWidth: 1,
    },
});

export default Home;
