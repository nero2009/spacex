import { Entypo, Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

type Props = {
  isSearchInputClicked: boolean;
  searchQuery: string;
  setSearchQuery: (s: string) => void;
  setSearchInputClicked: (b: boolean) => void;
};

const SearchBar = ({
  isSearchInputClicked,
  searchQuery,
  setSearchQuery,
  setSearchInputClicked,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputUnfocus}>
        <Feather name="search" size={20} color="black" style={{ marginLeft: 1 }} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onFocus={() => {
            setSearchInputClicked(true);
          }}
        />
        {searchQuery?.length > 0 ? (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              setSearchQuery('');
            }}
          />
        ) : null}
      </View>
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    margin: 5,
  },
  inputUnfocus: {
    padding: 10,
    flexDirection: 'row',
    width: '95%',
    backgroundColor: '#d9dbda',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  input: {
    fontSize: 20,
    marginLeft: 20,
    width: '90%',
  },
  cancelButton: { width: '25%', justifyContent: 'center', alignItems: 'center' },
});
