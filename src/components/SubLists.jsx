import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';

const SubLists = ({ lists, list, listNum, title, setLists }) => {
  const [item, setItem] = useState('');

  const navigation = useNavigation();

  const handleSubListSubmit = () => {
    if (item.trim() !== '') {
      const newSubLists = [...lists[listNum].subLists, { item, isCompleted: false }];
      setLists((lists) => {
        lists[listNum].subLists = newSubLists;
        return lists;
      });
      setItem('');
    }
  };

  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.listItem}>
        <View style={styles.listItemList}>
          <Text style={styles.listItemText}>{item?.item}</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Icon style={styles.actionButton} name="more-horiz" size={20} color="#906460" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.return} onPress={() => navigation.navigate('Lists')}>
          <Icon name="chevron-left" size={30} color="white" />
          <Text style={styles.returnText}>戻る</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../images/shiba_1.png')}
          />
          <TextInput
            style={styles.input}
            placeholder="リストを入力..."
            value={item}
            returnKeyType="done"
            placeholderTextColor="#cfb7b5"
            onSubmitEditing={handleSubListSubmit}
            onChangeText={(text) => setItem(text)}
          />
        </View>
        <View style={styles.title}>
          <Image style={styles.pawsIcon} source={require('../images/paws_icon.png')} />
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <FlatList style={styles.lists} data={list.subLists} renderItem={renderItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    float: 'left',
    backgroundColor: '#bb6464',
    height: 100,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingBottom: 10,
  },
  return: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 4,
  },
  returnText: {
    color: 'white',
    fontSize: 16,
    marginLeft: -4,
  },
  main: {
    flex: 1,
    backgroundColor: '#faf1f1',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    paddingRight: 20,
  },
  image: {
    width: 120,
    height: 100,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderStyle: 'dotted',
    borderColor: '#d4aca8',
    borderRadius: 24,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    marginTop: 16,
  },
  pawsIcon: {
    width: 20,
    height: 14,
  },
  titleText: {
    fontSize: 16,
    color: '#906460',
    fontWeight: 'bold',
  },
  lists: {
    marginTop: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
    paddingLeft: 20,
    paddingRight: 10,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#d4aca8',
  },
  listItemList: {
    flex: 1,
  },
  listItemText: {
    fontWeight: 'bold',
    color: '#906460',
  },
  actionButton: {
    padding: 10,
  },
});

export default SubLists;
