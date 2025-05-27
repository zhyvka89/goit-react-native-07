// screens/MemberDetails.tsx
import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function MemberDetails(){
  // const { member } = route.params;
  const member = {
    name: 'John Doe',
    birthday: '1990-01-01',
    avatar: require('../assets/images/avatar.jpg'),
  };

  const handlePaymentsPress = () => {
    Alert.alert('Navigate to Payments');
  };

  const handleAttendancePress = () => {
    Alert.alert('Navigate to Training Attendance');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={member.avatar} style={styles.avatar} />
        <Text style={styles.name}>{member.name}</Text>
        <Text style={styles.birthday}>Birthday: {member.birthday}</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.listItem} onPress={handlePaymentsPress}>
          <Text style={styles.listItemText}>Payments</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.listItem}
          onPress={handleAttendancePress}
        >
          <Text style={styles.listItemText}>Training Attendance</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  birthday: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
  listItem: {
    padding: 16,
    backgroundColor: '#f2f2f2',
    color: '#555',
    borderRadius: 8,
    marginTop: 26,
  },
  listItemText: {
    fontSize: 18,
  },
});
