/* eslint-disable no-unused-expressions */
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ImageSourcePropType,
  Image
} from 'react-native';

import BooksJSON from 'books.json'
import { Link } from 'expo-router';

export const HeaderRightCollection = () => (
  <View className={styles.headerRight}>
    <TouchableOpacity>
      <Ionicons name="help-circle-outline" size={24} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Ionicons name="ellipsis-vertical-outline" size={24} />
    </TouchableOpacity>
  </View>
);

const NavTags = () => (
  <View className={styles.navTags}>
    <TouchableOpacity>
      <Text>Fantasia</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text>Ficção</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text>História</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text>Romance</Text>
    </TouchableOpacity>
  </View>
);

interface BookProps {
  title: any;
  thumbnail: ImageSourcePropType;
  onPress: () => void;
}

const Book = ({ title, thumbnail, onPress }: BookProps) => (
  <TouchableOpacity className={styles.book} onPress={onPress}>
    <View className={styles.thumbnail}>
      {thumbnail ? (
        <Image source={thumbnail} className={styles.thumbnailImage} />
      ) : (
        <Text>No Thumbnail</Text>
      )}
    </View>
    <View className={styles.progress}>
      <View className={styles.progressBar} />
      <Ionicons className={styles.progressIcon} name="checkmark-done-outline" size={24} />
    </View>
    <View>
      <Text className={styles.bookTitle}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default function Collection() {

  return (
    <ScrollView className={styles.container}>
      <NavTags />
      <View className={styles.main}>
        <Text className={styles.title}>Tag atual</Text>
        <View className={styles.booksContainer}>
          {BooksJSON.map((book) => (
            <Link
              href={{
                pathname: '/(tabs)',
              }}
              asChild>
              <Book
                title={book.title}
                thumbnail={{ uri: book.cover }}
                key={book.id}
                onPress={() => {
                  console.log('Book clicked:', book.title);
                }}
              />
            </Link>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = {
  button: 'items-center bg-indigo-500 rounded-[28px] shadow-md p-4',
  headerRight: 'flex-row items-center gap-4',
  buttonText: 'text-white text-lg font-semibold text-center',
  container: 'flex-1 p-4',
  main: 'flex-1 max-w-[960] my-4',
  title: 'text-[20px] font-bold',
  subtitle: 'text-4xl text-gray-700',
  navTags: 'flex-row items-center justify-between bg-gray-200 rounded-[4px] p-2',
  booksContainer: 'flex flex-row flex-wrap justify-between mt-4',
  book: 'h-[200px] w-[100px] mb-6',
  bookTitle: 'truncate h-[40px] text-sm font-bold',
  thumbnail: 'bg-gray-500 h-[70%] w-[100%] rounded-[8px]',
  thumbnailImage: 'h-full w-full rounded-[8px]',
  progress: 'flex flex-row justify-between items-center mt-2',
  progressBar: 'bg-gray-500 h-[4px] w-[70%]',
  progressIcon: 'align-self-end',
};