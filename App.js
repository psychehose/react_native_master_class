import React from "react";
import { Image, Text } from "react-native";
import AppLoading from "expo-app-loading";
import { useState } from "react";

import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset, useAssets } from "expo-asset";

export default function App() {
  // preLoad만 가능
  const [assets] = useAssets([]);
  const [loaded] = Font.useFonts(Ionicons.font);

  if (!assets || !loaded) {
    return <AppLoading />;
  }

  return null;
}

// 이 방식은 preFetch도 가능

// const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

// const loadImages = (images) =>
//   images.map((image) => {
//     if (typeof image === "string") {
//       return Image.prefetch(image);
//     } else {
//       return Asset.loadAsync(image);
//     }
//   });

// export default function App() {

// const [ready, setReady] = useState(false);
// const onFinish = () => setReady(true);
// const startLoading = async () => {
//   const fonts = loadFonts([Ionicons.font]);

//   await Promise.all(...fonts);
// };

// if (!ready) {
//   return (
//     <AppLoading
//       startAsync={startLoading}
//       onFinish={onFinish}
//       onError={console.error}
//     />
//   );
// }
// return null;
// }
