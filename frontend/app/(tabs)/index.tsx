import { Pressable, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import BooksJSON from 'books.json'
import { useEffect, useRef } from 'react'
import { BookProps } from '../../dto/BookProps'


export default function Home() {



  return (
    <ScrollView>
      <View className='py-1 bg-gray-200 justify-between flex-row items-center px-3.5'>
        <Text className='font-bold'>Olá, Aluno</Text>
        <TouchableOpacity>
          <Image className='rounded-full w-10 h-10' source={{ uri: 'https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg' }} />
        </TouchableOpacity>
      </View>
      <View className='px-2 mt-3 space-y-3'>
        <Text className='text-[2.3vh] font-bold'>Destaques</Text>
        {BooksJSON.map((book) => {
          return book.higlights?.slice(0, 1).map((higlight) => {
            return (
              <Image source={{ uri: higlight.cover }} className='w-full h-44 rounded-lg' />
            )
          })
        })}
        {/* <View className='bg-gray-300 w-full h-44 rounded-lg' /> */}
      </View>
      <View className='px-2 mt-3 space-y-3'>
        <Text className='text-[2.3vh] font-bold'>Mais populares</Text>
        <View className='flex-row gap-2 justify-between'>
          {BooksJSON.map((book) => {
            return book.most_popular?.map((popular) => {
              return (
                <Image source={{ uri: popular.cover }} className='w-20 h-28 rounded-lg' />
              )
            })
          })}
        </View>
        <View className='px-1 space-y-3'>
          <View className='flex-col mt-1 space-y-1'>
            <Text className='text-[2.1vh] font-bold'>Livro</Text>
            <View className='flex-row gap-4 items-center'>
              <Pressable>
                <FontAwesome name='list-ul' size={22} />
              </Pressable>
              <Text>Autor</Text>
              <Text className='w-28 bg-gray-300 text-center rounded-md py-1'>Científico</Text>
            </View>
          </View>
          <View>
            <Text className='break-all'>
              Est adipisicing cupidatat adipisicing dolor adipisicing mollit do consequat elit consequat sit non.
              Et anim cillum quis ea. Proident aute aliquip ea consectetur ea incididunt.
              Lorem non irure velit nulla esse sunt pariatur culpa.
              Ex incididunt mollit veniam deserunt magna. Enim et aliqua nulla elit ad nisi adipisicing proident quis.
            </Text>
          </View>
        </View>
      </View>
      <View className='px-2 mt-6 space-y-3'>
        <Text className='text-[2.3vh] font-bold'>Recém-chegados</Text>
        <View className='flex-row gap-2 justify-between'>
          {BooksJSON.map((book) => {
            return book.recently?.map((recent) => {
              return (
                <Image source={{ uri: recent.cover }} className='w-20 h-28 rounded-lg' />
              )
            })
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = {
  title: 'text-xl font-bold text-red-500',
};
