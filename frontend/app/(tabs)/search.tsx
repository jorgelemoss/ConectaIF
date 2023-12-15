import { ScrollView, View, Text, TextInput, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { Image, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import BooksJSON from 'books.json'

const Book = ({ title, thumbnail }: { title: any, thumbnail: any }) => (
  <View className={'h-[160px] w-[80px]'}>
    <View className={"bg-gray-500 h-[70%] w-[100%] rounded-[8px]"}>
      {thumbnail ? (
        <Image source={{ uri: thumbnail }} className={"h-full w-full rounded-[8px]"} />
      ) : (
        <Text>No Thumbnail</Text>
      )}
    </View>
    <View className={"mt-2 font-bold flex-row justify-between align-center"}>
      <Text>{title}</Text>
      <TouchableOpacity>
        <Ionicons name="ellipsis-vertical-outline" size={16} />
      </TouchableOpacity>
    </View>
  </View>
);

export default function Search() {

  return (
    <ScrollView className={styles.container}>
      <View className="relative justify-center mt-6">
        <TextInput placeholder='Pesquisar por livros...' className='absolute w-full pl-10 pr-4 py-1.5 bg-white rounded-full border-2 border-green-500' />
        <Pressable className='absolute left-3 z-20'>
          <AntDesign name='search1' color={"#32a852"} size={22} />
        </Pressable>
      </View>
      <View className='mt-10'>
        <Text className='text-xl font-bold'>Livros</Text>
        <View className='flex-row flex-wrap z-10'>
          {BooksJSON.map((book, index) => {
            return (
              <View key={index} className='w-1/3 p-4'>
                <Book title={book.title} thumbnail={book.cover} />
              </View>
            )
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = {
  container: 'flex-1 p-6',
  main: 'flex-1 max-w-[960]',
  title: 'text-[64px] font-bold',
  subtitle: 'text-4xl text-gray-700',
};
