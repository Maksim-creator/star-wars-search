import { useCallback, useEffect } from "react";
import {
  ActivityIndicator as ActivityIndicatorBase,
  FlatList,
  ListRenderItem,
  View as ViewBase,
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
const View = styled(ViewBase);

export default function MainLayout() {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const people = useAppSelector((state) => state.people);

  useEffect(() => {
    dispatch(getCharacters({ page: 1 }));
  }, [dispatch]);

  const renderItem: ListRenderItem<Character> = useCallback(
    (props) => <Card {...props} />,
    [],
  );

  const keyExtractor = (_: Character, index: number) => index.toString();

  const onRefresh = useCallback(() => {
    dispatch(getCharacters({ isRefreshing: true }));
  }, [dispatch]);

  const onEndReached = useCallback(() => {
    if (people.charactersData?.next) {
      const splittedLink = people.charactersData.next.split("=");
      const page = splittedLink[splittedLink.length - 1];
      dispatch(getCharacters({ page: parseInt(page) }));
    }
  }, [people.charactersData?.next, dispatch]);

  const ListFooterComponent = useCallback(() => {
    return (
      <View
        className={`w-full justify-center items-center h-${people.charactersData?.next ? 24 : 0}`}
      >
        {people.charactersMoreLoading && <ActivityIndicator />}
      </View>
    );
  }, [people.charactersMoreLoading, people.charactersData?.next]);

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
        onEndReached={onEndReached}
        contentContainerStyle={{
          gap: 16,
          paddingHorizontal: 14,
          paddingBottom: insets.bottom,
        }}
        ListFooterComponent={ListFooterComponent}
      />
    </SafeAreaView>
  );
}
