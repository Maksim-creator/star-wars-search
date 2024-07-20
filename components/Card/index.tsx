import React, { useMemo } from "react";
import {
  Text as TextBase,
  View as ViewBase,
  Image as ImageBase,
} from "react-native";
import { styled } from "nativewind";
import { Character } from "@/store/people/entities";
import i18n from "@/i18n";

const View = styled(ViewBase);
const Text = styled(TextBase);
const Image = styled(ImageBase);

interface Props {
  character: Character;
}

const t = i18n.withScope("MainScreen");

export const Card: React.FC<Props> = ({ character }) => {
  const eyeColors = useMemo(() => {
    if (character.eye_color !== "unknown") {
      return character.eye_color.includes("-")
        ? character.eye_color.split("-")
        : character.eye_color.split(",");
    }
    return undefined;
  }, [character.eye_color]);

  return (
    <View className="flex-row bg-white rounded-lg shadow-sm">
      <Image
        source={{
          uri: `https://starwars-visualguide.com/assets/img/characters/${character.url.match(/\/([0-9]*)\/$/)![1]}.jpg`,
        }}
        className="w-[110px] h-[150px] rounded-l-lg"
        resizeMode="contain"
      />
      <View className="py-2 px-2">
        <Text className="font-bold text-lg">{character.name}</Text>
        {character.birth_year !== "unknown" ? (
          <Text className="font-regular text-sm">{character.birth_year}</Text>
        ) : null}
        <View className="pt-1">
          <Text className="font-regular">
            <Text className="font-bold">{t("gender_text")}:</Text>{" "}
            {character.gender}
          </Text>
          {eyeColors && (
            <View className="flex-row items-center gap-2">
              <Text className="font-regular">
                <Text className="font-bold">{t("eye_color_text")}:</Text>{" "}
                {character.eye_color}
              </Text>
              <View className="flex-row gap-x-1 items-center">
                {eyeColors.map((color) => (
                  <View
                    key={color}
                    className="h-3 w-3 rounded-full"
                    style={{
                      backgroundColor: color.trim(),
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
          <Text className="font-regular">
            <Text className="font-bold">{t("height_text")}:</Text>{" "}
            {character.height}
          </Text>
        </View>
      </View>
    </View>
  );
};
