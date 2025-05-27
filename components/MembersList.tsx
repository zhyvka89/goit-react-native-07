import React from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

type Member = {
  id: string;
  name: string;
  avatar: ImageSourcePropType;
  birthday?: string;
};

const mockMembers: Member[] = [
  { id: '1', name: 'John Doe', avatar: require('../assets/images/avatar.jpg'), birthday: '2013-01-01' },
  { id: '2', name: 'Alice Smith', avatar: require('../assets/images/avatar.jpg'), birthday: '2013-01-01' },
  { id: '3', name: 'Liam Johnson', avatar: require('../assets/images/avatar.jpg'), birthday: '2013-01-01' },
  { id: '4', name: 'John Doe', avatar: require('../assets/images/avatar.jpg'), birthday: '2013-01-01' },
  { id: '5', name: 'Alice Smith', avatar: require('../assets/images/avatar.jpg'), birthday: '2013-01-01' },
  { id: '6', name: 'Liam Johnson', avatar: require('../assets/images/avatar.jpg'), birthday: '2013-01-01' },
];

export default function MembersList({route, navigation}: {route: any, navigation: any}) {
  const { generationTitle } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{generationTitle} Members</Text>

      <FlatList
        data={mockMembers}
        key={'2-cols'} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.memberRow} onPress={() => navigation.navigate('Memeber Details', { member: item })}>
            <Image source={item.avatar} style={styles.avatar} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  memberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
  },
});
