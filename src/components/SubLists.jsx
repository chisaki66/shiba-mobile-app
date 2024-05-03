import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SubLists = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.main}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="リストを入力..."
            returnKeyType="done"
            onPress={() => foo()}
          />
        </View>
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
});

export default SubLists;
