import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FlatList,
  Image,
} from 'react-native';
import { Icon } from 'react-native-elements';

const Lists = ({ lists, title, setLists, setTitle, setListNum }) => {
  const navigation = useNavigation();

  const handleListSubmit = () => {
    if (title.trim() !== '') {
      setLists([...lists, { title, isCompleted: false, subLists: [] }]);
      setTitle('');
    }
  };

  const onPressActionOptions = (index) => {
    const update = () => {
      if (lists[index].isCompleted) {
        return '未完了に戻す';
      } else {
        return '完了しました';
      }
    };

    Alert.alert(`${lists[index].title}`, '', [
      {
        text: update(),
        style: 'cancel',
        onPress: () => handleUpdateList(index),
      },
      {
        text: '削除します',
        style: 'destructive',
        onPress: () => onPressRemoveAlert(index),
      },
      {
        text: 'キャンセル',
        style: 'cancel',
      },
    ]);
  };

  const handleUpdateList = (index) => {
    setLists((prevLists) => {
      return prevLists.map((item, i) => {
        if (i === index) {
          return { ...item, isCompleted: !item.isCompleted };
        } else {
          return item;
        }
      });
    });
  };

  const handleRemoveList = (index) => {
    const newLists = [...lists];
    newLists.splice(index, 1);
    setLists(newLists);
  };

  const onPressRemoveAlert = (index) => {
    Alert.alert(`${lists[index].title}`, `を本当に削除しますか？`, [
      {
        text: 'いいえ',
        style: 'cancel',
      },
      { text: 'はい', onPress: () => handleRemoveList(index) },
    ]);
  };

  const handleSelectList = (index) => {
    setListNum(index);
    navigation.navigate('SubLists');
  };

  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.listItem}>
        <View style={styles.listItemList}>
          <TouchableOpacity onPress={() => handleSelectList(index)}>
            <Text
              style={[
                styles.listItemText,
                lists[index].isCompleted ? styles.doneListItem : styles.inputListItem,
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => onPressActionOptions(index)}>
            <Icon style={styles.actionButton} name="more-horiz" size={20} color="#906460" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.main}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../images/shiba.png')}
          />
          <TextInput
            style={styles.input}
            placeholder="新しいリストを入力.."
            value={title}
            returnKeyType="done"
            placeholderTextColor="#cfb7b5"
            onSubmitEditing={handleListSubmit}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <FlatList style={styles.lists} data={lists} renderItem={renderItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#bb6464',
    height: 100,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingBottom: 10,
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
  doneListItem: {
    textDecorationLine: 'line-through',
  },
  inputListItem: {
    flexGrow: 1,
    width: '100%',
  },
  actionButton: {
    padding: 10,
  },
});

export default Lists;
