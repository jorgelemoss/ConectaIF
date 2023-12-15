/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, TouchableOpacity, View, ScrollView, ImageSourcePropType, Image } from 'react-native';
import BooksJSON from '../../books.json'

export const HeaderRightSingle = () => (
  <View className={styles.headerRight}>
    <TouchableOpacity>
      <Ionicons name="share-social-outline" size={24} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Ionicons name="ellipsis-vertical-outline" size={24} />
    </TouchableOpacity>
  </View>
);

export const HeaderRightCloud = () => (
  <View className={styles.headerRight}>
    <TouchableOpacity>
      <Ionicons name="help-circle-outline" size={24} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Ionicons name="ellipsis-vertical-outline" size={24} />
    </TouchableOpacity>
  </View>
);

interface BookProps {
  title: any;
  thumbnail: any;
}

const Book: React.FC<BookProps> = ({ title, thumbnail }) => (
  <View className={styles.book}>
    <View className={styles.thumbnail}>
      {thumbnail ? (
        <Image source={{ uri: thumbnail }} className={styles.thumbnailImage} />
      ) : (
        <Text>No Thumbnail</Text>
      )}
    </View>
    <View className={styles.bookTitle}>
      <Text>{title}</Text>
      <TouchableOpacity>
        <Ionicons name="ellipsis-vertical-outline" size={16} />
      </TouchableOpacity>
    </View>
  </View>
);

export default function Downloads() {
  return (
    <ScrollView className={styles.container}>
      <View className={styles.main}>
        <Text className={styles.title}>Ficção</Text>
        <View className={styles.booksContainer}>
          {BooksJSON.slice(1, 8).map((book) => {
            return (
              <Book title={book.title} thumbnail={book.cover} />
            )
          })}

        </View>
      </View>
      <View className={styles.main}>
        <Text className={styles.title}>Fantasia</Text>
        <View className={styles.booksContainer}>
          {BooksJSON.slice(4, 10).map((book) => {
            return (
              <Book title={book.title} thumbnail={book.cover} />
            )
          })}

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
  booksContainer: 'flex flex-row flex-wrap justify-between mt-4',
  book: 'h-[200px] w-[100px]',
  thumbnail: 'bg-gray-500 h-[70%] w-[100%] rounded-[8px]',
  thumbnailImage: 'h-full w-full rounded-[8px]',
  bookTitle: 'mt-2 font-bold flex-row justify-between align-center',
};
