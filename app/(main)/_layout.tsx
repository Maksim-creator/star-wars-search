import { useCallback, useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Keyboard,
  ListRenderItem,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import debounce from "lodash.debounce";
import { useAppDispatch, useAppSelector } from "@/store";
import { getCharacters } from "@/store/people/thunk";
import { Character } from "@/store/people/entities";
import {
  Card,
  Text,
  View,
  SafeAreaView,
  TextInput,
  AnimatedText,
  ActivityIndicator,
} from "@/components";

export default function MainLayout() {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const people = useAppSelector((state) => state.people);

  const animatedValues = useRef(
    "AllianceBook".split("").map(() => new Animated.Value(0)),
  ).current;

  const [term, setTerm] = useState("");

  useEffect(() => {
    const animations = animatedValues.map((animatedValue, index) => {
      return Animated.timing(animatedValue, {
        toValue: 1,
        duration: 500,
        delay: index * 50,
        useNativeDriver: true,
      });
    });

    Animated.stagger(50, animations).start();
  }, [animatedValues]);

  useEffect(() => {
    dispatch(getCharacters({ page: 1 }));
  }, [dispatch]);

  const renderItem: ListRenderItem<Character> = useCallback(
    ({ item }) => <Card character={item} />,
    [],
  );

  const debouncedSearch = useCallback(
    debounce((searchQuery) => {
      dispatch(getCharacters({ search: searchQuery, page: 1 }));
    }, 300),
    [dispatch],
  );

  const handleChange = (value: string) => {
    setTerm(value);
    debouncedSearch(value);
  };

  const keyExtractor = (item: Character) => item.name;

  const onRefresh = useCallback(() => {
    setTerm("");
    dispatch(getCharacters({ isRefreshing: true, page: 1 }));
  }, [dispatch]);

  const onEndReached = useCallback(() => {
    if (people.charactersData?.next && !people.charactersMoreLoading) {
      const splittedLink = people.charactersData.next.split("=");
      const page = splittedLink[splittedLink.length - 1];
      dispatch(getCharacters({ page: parseInt(page), isLoadingMore: true }));
    }
  }, [people.charactersData?.next, dispatch, people.charactersMoreLoading]);

  const ListFooterComponent = useCallback(() => {
    return (
      <View
        className={`w-full justify-center items-center h-${people.charactersData?.next ? 16 : 0}`}
      >
        {people.charactersMoreLoading && <ActivityIndicator />}
      </View>
    );
  }, [people.charactersMoreLoading, people.charactersData?.next]);

  const ListEmptyComponent = useCallback(() => {
    return (
      <View
        style={{ height: Dimensions.get("screen").height / 2 }}
        className="justify-center items-center"
      >
        <Text className="font-bold text-lg">
          There is no characters for that term 😞
        </Text>
      </View>
    );
  }, []);

  if (people.charactersLoading) {
    return <ActivityIndicator className="flex-1" />;
  }

  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      <View className="px-4 flex-1">
        <View className="flex-row">
          {"AllianceBook".split("").map((char, index) => (
            <AnimatedText
              key={`${char}-${index}`}
              className="font-bold text-2xl"
              style={[{ opacity: animatedValues[index] }]}
            >
              {char}
            </AnimatedText>
          ))}
        </View>
        <TextInput
          placeholder="Search some characters..."
          className="border border-gray-400 rounded-lg py-3 px-4 mt-4 mb-3 bg-white"
          value={term}
          onChangeText={handleChange}
        />
        <FlatList
          data={people.charactersData?.results}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          refreshing={people.charactersRefreshing}
          onRefresh={onRefresh}
          keyboardShouldPersistTaps="never"
          onScrollBeginDrag={Keyboard.dismiss}
          onEndReached={onEndReached}
          contentContainerStyle={{
            gap: 16,
            paddingBottom: insets.bottom,
          }}
          ListFooterComponent={ListFooterComponent}
          ListEmptyComponent={ListEmptyComponent}
        />
      </View>
    </SafeAreaView>
  );
}
