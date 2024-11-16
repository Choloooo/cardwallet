import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // For icons

const DashboardScreen = ({ navigation }) => {
  const cards = [
    { id: '1', name: 'Visa **** 1234', balance: '$200.00' },
    { id: '2', name: 'MasterCard **** 5678', balance: '$50.00' },
  ];

  // Example transaction data
  const transactions = [
    { id: '1', date: 'Oct 15, 2024', description: 'Grocery Store', amount: '-$25.50' },
    { id: '2', date: 'Oct 14, 2024', description: 'Online Shopping', amount: '-$75.00' },
    { id: '3', date: 'Oct 12, 2024', description: 'Salary Deposit', amount: '+$1500.00' },
    { id: '4', date: 'Oct 10, 2024', description: 'Coffee Shop', amount: '-$4.25' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }} // Replace with user image URI
            style={styles.profileAvatar}
          />
          <View style={styles.userDetails}>
            <Text style={styles.greeting}>Hi, John Doe</Text> {/* Personalized Greeting */}
            <Text style={styles.userRole}>Premium Member</Text>
          </View>
        </View>

        {/* Wallet Balance Section */}
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>Wallet Balance</Text>
          <Text style={styles.balanceAmount}>$250.00</Text>
        </View>

        {/* Cards Section */}
        <Text style={styles.cardsHeader}>Your Cards</Text>
        <FlatList
          data={cards}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.cardItem} activeOpacity={0.9}>
              <MaterialCommunityIcons name="credit-card" size={32} color="#fff" style={styles.cardIcon} />
              <View>
                <Text style={styles.cardName}>{item.name}</Text>
                <Text style={styles.cardBalance}>{item.balance}</Text>
              </View>
            </TouchableOpacity>
          )}
        />

        {/* Transaction History Section */}
        <Text style={styles.transactionsHeader}>Recent Transactions</Text>
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <Text style={styles.transactionDate}>{item.date}</Text>
              <Text style={styles.transactionDescription}>{item.description}</Text>
              <Text style={styles.transactionAmount}>{item.amount}</Text>
            </View>
          )}
        />
      </View>

      {/* Add Card Button at the Bottom */}
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddCard')}>
        <Text style={styles.addButtonText}>+ Add Card</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7f9', // Light background for a clean, professional look
  },
  contentWrapper: {
    flex: 1,
    padding: 20,
    paddingBottom: 80, // Space for the button, so it's not overlapped by the content
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#0357ee', // Moniepoint branding blue for a professional touch
  },
  userDetails: {
    flex: 1,
  },
  greeting: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  userRole: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  balanceContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: '700',
    color: '#0357ee', // Moniepoint blue for prominence
    marginTop: 8,
    textShadowColor: '#0357ee',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 6,
  },
  cardsHeader: {
    fontSize: 16, // Slightly reduced font size
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: '#0357ee', // Moniepoint blue
    marginBottom: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  cardIcon: {
    marginRight: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
  },
  cardName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  cardBalance: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
    opacity: 0.85,
  },
  transactionsHeader: {
    fontSize: 14, // Reduced font size
    fontWeight: '600',
    color: '#333',
    marginBottom: 8, // Reduced margin between header and list
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6, // Reduced vertical padding to shrink space
    paddingHorizontal: 10, // Reduced horizontal padding to make it tighter
    backgroundColor: '#fff',
    marginBottom: 4, // Reduced bottom margin for tighter spacing
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  transactionDate: {
    fontSize: 11, // Reduced font size for date
    color: '#777',
  },
  transactionDescription: {
    fontSize: 12, // Reduced font size for description
    color: '#333',
    fontWeight: '600',
  },
  transactionAmount: {
    fontSize: 13, // Reduced font size for amount
    color: '#0357ee', // Amount in blue for emphasis
    fontWeight: '600',
  },
  addButton: {
    position: 'absolute',
    bottom: 20, // Fixed at the bottom with 20px padding from the screen's bottom
    left: 20,
    right: 20, // Makes the button span the width of the screen, with padding on both sides
    paddingVertical: 15,
    backgroundColor: '#ff5f65', // Soft pinkish-red for contrast and visual appeal
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#ff5f65',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
});

export default DashboardScreen;
