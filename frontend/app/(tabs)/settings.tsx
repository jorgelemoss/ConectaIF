import { View, Text, Image, TextInput, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function Settings() {
  return (
    <View className='mt-10 space-y-6'>
      <View className='relative items-center'>
        <View className='absolute items-center justify-center bg-black/60 rounded-full w-24 h-24 z-10'>
          <AntDesign name="upload" size={26} color={"white"} />
        </View>
        <Image className='w-24 h-24 rounded-full' source={{ uri: "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg" }} />
        <Text className='font-bold text-[2.5vh]'>Aluno</Text>
      </View>
      <View className='space-y-4 items-center'>
        <View className='space-y-2'>
          <Text className='font-bold'>Informações Pessoais</Text>
          <TextInput placeholder='Example@email.com' className='mt-2 px-4 border-2 border-green-400 rounded-full w-62' />
          <View className='flex-row justify-between gap-2'>
            <TextInput placeholder='Senha atual' className='px-4 border-2 w-32 border-green-400 rounded-full' />
            <TextInput placeholder='Nova senha' className='px-4 border-2 w-32 border-green-400 rounded-full' />
          </View>
        </View>
        <View className='space-y-2.5'>
          <Text className='font-bold'>Dados Pessoais</Text>
          <View className='flex-row space-x-2'>
            <TextInput placeholder='Rua 0, Bairro' className='px-4 border-2 border-green-400 rounded-full w-32' />
            <TextInput placeholder='Cidade' className='px-4 border-2 border-green-400 rounded-full w-32' />
          </View>
          <View className='items-center'>
            <TextInput placeholder='123.456.789-00' className='px-4 border bg-gray-300 rounded-full w-36' />
          </View>
        </View>

        <Pressable className='items-center bg-green-400 px-3 py-1.5 rounded-full'>
          <Text className='text-white'>Salvar alterações</Text>
        </Pressable>
      </View>
    </View>
  )
}