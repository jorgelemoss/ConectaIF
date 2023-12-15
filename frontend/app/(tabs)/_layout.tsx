import { HeaderRightCollection } from './collection';
import { HeaderRightSingle, HeaderRightCloud } from './downloads';
import { Tabs, useRouter } from 'expo-router'
import { AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';

import { Text, TouchableOpacity, View } from 'react-native';

export default function AppLayout() {

  const router = useRouter();

  const BackButton = () => (
    <TouchableOpacity onPress={router.back}>
      <View className={styles.backButton}>
        <Feather name="chevron-left" size={16} color="#007AFF" />
        <Text className={styles.backButtonText}>Back</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarLabel: "Início",
          tabBarActiveTintColor: '#32a852',
          headerTintColor: '#32a852',
          tabBarIcon: () => <AntDesign name="home" size={26} />
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Procurar",
          tabBarLabel: "Procurar",
          tabBarActiveTintColor: '#32a852',
          headerTintColor: '#32a852',
          tabBarIcon: () => <AntDesign name='search1' size={26} />,
          headerLeft: () => <BackButton />
        }}
      />
      <Tabs.Screen
        name="collection"
        options={{
          title: "Coleção",
          tabBarLabel: 'Coleção',
          tabBarActiveTintColor: '#32a852',
          headerTintColor: '#32a852',
          tabBarIcon: () => <MaterialIcons name='collections-bookmark' size={26} />,
          headerLeft: () => <BackButton />,
          headerRight: () => <HeaderRightCollection />,
        }}
      />
      <Tabs.Screen
        name="downloads"
        options={{
          title: 'Downloads',
          tabBarLabel: 'Downloads',
          tabBarActiveTintColor: '#32a852',
          headerTintColor: '#32a852',
          tabBarIcon: () => <AntDesign name='clouddownloado' size={26} />,
          headerLeft: () => <BackButton />,
          headerRight: () => <HeaderRightSingle />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Configurações',
          tabBarLabel: "Config.",
          tabBarActiveTintColor: '#32a852',
          headerTintColor: '#32a852',
          tabBarIcon: () => <Feather name='settings' size={26} />,
          headerLeft: () => <BackButton />,
          headerRight: () => <HeaderRightCloud />,
        }}
      />
    </Tabs>
  )
}


const styles = {
  backButton: 'flex-row',
  backButtonText: 'text-blue-500 ml-1',
  headerRight: 'flex-row items-center gap-4',
};
