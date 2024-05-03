import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';

const SubLists = ({ lists, list, listNum, title, setLists }) => {
  const [item, setItem] = useState('');

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
          <Text>{item?.item}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.main}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="リストを入力..."
            value={item}
            returnKeyType="done"
            onSubmitEditing={handleSubListSubmit}
            onChangeText={(text) => setItem(text)}
          />
        </View>
        <Text>{title}</Text>
        <FlatList data={list.subLists} renderItem={renderItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'skyblue',
    height: 100,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingBottom: 10,
  },
  main: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 10,
    paddingHorizontal: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemList: {
    flex: 1,
  },
  inputListItem: {
    flexGrow: 1,
    width: '100%',
  },
});

export default SubLists;
