import { styled } from "nativewind";
import {
  ActivityIndicator as ActivityIndicatorBase,
  Animated,
  Text as TextBase,
  TextInput as TextInputBase,
  View as ViewBase,
  Image as ImageBase,
} from "react-native";
import { SafeAreaView as SafeAreaViewBase } from "react-native-safe-area-context";
import { Card } from "@/components/Card";

const SafeAreaView = styled(SafeAreaViewBase);
const ActivityIndicator = styled(ActivityIndicatorBase);
const View = styled(ViewBase);
const Text = styled(TextBase);
const AnimatedText = styled(Animated.Text);
const TextInput = styled(TextInputBase);
const Image = styled(ImageBase);

export {
  SafeAreaView,
  Text,
  AnimatedText,
  View,
  TextInput,
  Card,
  ActivityIndicator,
  Image,
};
