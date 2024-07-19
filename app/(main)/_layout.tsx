import { useCallback, useEffect } from "react";
import {
  ActivityIndicator as ActivityIndicatorBase,
  FlatList,
  ListRenderItem,
} from "react-native";
import {
  SafeAreaView as SafeAreaViewBase,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { styled } from "nativewind";
import { useAppDispatch, useAppSelector } from "@/store";
import { getCharacters } from "@/store/people/thunk";
import { Character } from "@/store/people/entities";
import { Card } from "@/components/Card";

const SafeAreaView = styled(SafeAreaViewBase);
const ActivityIndicator = styled(ActivityIndicatorBase);

export default function MainLayout() {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const people = useAppSelector((state) => state.people);

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  const renderItem: ListRenderItem<Character> = useCallback(
    (props) => <Card {...props} />,
    [],
  );

  const keyExtractor = (item: Character) => item.name;

  const onRefresh = useCallback(() => {
    dispatch(getCharacters({ isRefreshing: true }));
  }, [dispatch]);

  if (people.charactersLoading) {
    return <ActivityIndicator className="flex-1" />;
  }

  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      <FlatList
        data={people.charactersData?.results}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        refreshing={people.charactersRefreshing}
        onRefresh={onRefresh}
        contentContainerStyle={{
          gap: 16,
          paddingHorizontal: 14,
          paddingBottom: insets.bottom,
        }}
      />
    </SafeAreaView>
  );
}
