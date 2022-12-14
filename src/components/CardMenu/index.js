import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  BackwardClock,
  Clip,
  QR,
  SquarePlus,
  UserChecklist,
} from '../../assets/icon';
import React from 'react';

const CardMenu = ({onPress, type, title}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.wrapper}
      onPress={onPress}>
      {type === 'datang' || type === 'pulang' ? (
        <QR />
      ) : type === 'manual' ? (
        <UserChecklist />
      ) : type === 'data-maba' ? (
        <Clip />
      ) : type === 'create-user' ? (
        <SquarePlus />
      ) : type === 'histori' ? (
        <BackwardClock />
      ) : (
        <QR />
      )}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CardMenu;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 90,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 50,
    shadowColor: 'black',
    shadowOffset: {
      width: -6,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  },
  title: {
    marginTop: 7,
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: 'black',
  },
});
