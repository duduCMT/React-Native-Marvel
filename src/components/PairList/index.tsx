import React from 'react'
import { View, Text, ViewProps } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { size } from '../../styles'
import { Image, Title } from './styles'

type Props = ViewProps & {
  title?: string;
  pairs: PairData[];
}

export default function PairList({title, pairs, ...rest}: Props){
  return (
    <View {...rest}>
      <Title>{title}</Title>

      <FlatList 
        horizontal
        data={pairs}
        keyExtractor={(item) => item.name} 
        contentContainerStyle={{paddingRight: 32}}
        ItemSeparatorComponent={
          () => <View style={{marginRight: size.create(7)}} />
        }
        renderItem={ ({item}) => (
          <Image source={{uri: item.image}} />
        )}
      />
    </View>
  )
}