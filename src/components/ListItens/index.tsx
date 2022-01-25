import React from 'react'
import { View, FlatList } from 'react-native'
import { size } from '../../styles'
import ItemList from '../ItemList'

const { create } = size

type Item = {
  id: number,
  name: string,
  description: string,
  image: string,
}

type Props = {
  onPress?: (data: Item) => void
  data: Item[]
}

export default function ListItens({data, onPress}: Props){
  //FletList temporariamente implementada
  return (
    <FlatList
      contentContainerStyle={{
        alignItems: 'center',
        paddingBottom: create(32),
      }}
      ItemSeparatorComponent={() => <View style={{height: create(21)}} />}
      numColumns={2}
      data={data}
      keyExtractor={({id}) => `${id}`} 
      renderItem={({item, index}) => (
        <View style={
          index % 2 == 0 
          ? { marginRight: create(10) } 
          : { marginLeft: create(10) }
        }>
          <ItemList 
            title={item.name} 
            description={item.description} 
            imageUrl={item.image}
            onPress={() => onPress ? onPress(item) : null }
          />
        </View>
        
      )} 
    />
  )
}