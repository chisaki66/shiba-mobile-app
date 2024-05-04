import { View, Text, Image, StyleSheet } from 'react-native';

const ListsNone = () => {
  return (
    <View style={styles.listsNone}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../images/shiba_none.png')}
      />
      <Text style={styles.text}>まだリストはありません！</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listsNone: {
    marginTop: 60,
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 160,
  },
  text: {
    color: '#906460',
    fontWeight: 'bold',
  },
});

export default ListsNone;
