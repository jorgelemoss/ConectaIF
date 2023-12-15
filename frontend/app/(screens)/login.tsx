import { SVGIFPE } from 'components/SvgIFPE';
import { Link } from 'expo-router';
import { useCallback, useState } from 'react';
import {
  RefreshControl,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
} from 'react-native';

export default function Login() {

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }, [])


  return (
    <ScrollView
      refreshControl={
        <RefreshControl colors={['limegreen']} refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View className={styles.container}>
        <View className='mt-10 items-center'>
          <View className='flex-row items-center space-x-2'>
            <SVGIFPE />
            <Text className='w-24 font-bold text-[2.2vh] text-[#35972E]'>Instituto Federal de Pernambuco</Text>
          </View>
        </View>
        <View className={styles.main}>
          <View className='flex-1'>
            <View className='space-y-4 mt-6'>
              <TextInput placeholder='Email' keyboardType='email-address' textContentType='emailAddress' className='border-2 border-green-500 rounded-full px-4 py-2.5' />
              <TextInput placeholder='Senha' textContentType='password' className='border-2 border-green-500 rounded-full px-4 py-2.5' secureTextEntry />
            </View>
          </View>
          <View className='flex-1'>
            <Link href={{ pathname: "/(tabs)/" }} asChild>
              <TouchableOpacity className={styles.button}>
                <Text className={styles.buttonText}>Fazer Login</Text>
              </TouchableOpacity>
            </Link>
          </View>
          <View className='flex-1 flex items-center'>
            <Link href={"/"}>
              <Pressable>
                <Text className='text-blue-500'>Esqueci o email.</Text>
              </Pressable>
            </Link>
            <Link href={"/"}>
              <Pressable>
                <Text className='text-blue-500'>Esqueci a senha.</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = {
  button: 'items-center bg-green-500 rounded-[28px] shadow-md p-4',
  buttonText: 'text-white text-lg font-semibold text-center',
  container: 'min-h-screen p-6',
  main: 'flex-1 max-w-[960] gap-4 my-4',
  title: 'text-center text-[42px] text-green-500 font-bold',
  subtitle: 'text-4xl text-gray-700',
};


