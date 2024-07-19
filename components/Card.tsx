import React, { useMemo } from "react";
import { styled } from "nativewind";
import {
  Image as ImageBase,
  Text as TextBase,
  View as ViewBase,
} from "react-native";
import { Character } from "@/store/people/entities";

const View = styled(ViewBase);
const Text = styled(TextBase);
const Image = styled(ImageBase);

interface Props {
  item: Character;
  index: number;
}

export const Card: React.FC<Props> = ({ item, index }) => {
  const eyeColors = useMemo(() => {
    if (item.eye_color !== "unknown") {
      return item.eye_color.split("-");
    }
    return undefined;
  }, [item.eye_color]);

  return (
    <View className="flex-row bg-white rounded-lg shadow-sm">
      <Image
        source={{
          uri: `https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`,
        }}
        className="w-[110px] h-[150px] rounded-l-lg"
        resizeMode="contain"
      />
      <View className="py-2 px-2">
        <Text className="font-bold text-lg">{item.name}</Text>
        {item.birth_year !== "unknown" ? (
          <Text className="font-regular text-sm">{item.birth_year}</Text>
        ) : null}
        <View className="pt-1">
          <Text className="font-regular">Gender: {item.gender}</Text>
          {eyeColors && (
            <View className="flex-row items-center gap-2">
              <Text className="font-regular">Eye color: {item.eye_color}</Text>
              <View className="flex-row gap-x-1 items-center">
                {eyeColors.map((color) => (
                  <View
                    key={color}
                    className="h-3 w-3 rounded-full"
                    style={{
                      backgroundColor: color,
                      shadowColor: color,
                      shadowRadius: 2,
                      shadowOpacity: 0.3,
                      shadowOffset: { width: 0, height: 0 },
                    }}
                  />
                ))}
              </View>
            </View>
          )}
          <Text className="font-regular">Height: {item.height}</Text>
        </View>
      </View>
    </View>
  );
};
