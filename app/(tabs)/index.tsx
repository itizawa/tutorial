import Button from "@/components/Buttons";
import ImageViewer from "@/components/ImageViewer";
import { launchImageLibraryAsync } from "expo-image-picker";
import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  const pickImageAsync = async () => {
    let result = await launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={selectedImage || PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button
          theme="primary"
          label="Choose a photo"
          onPress={pickImageAsync}
        />
        <Button theme="secondary" label="Use this photo" />
      </View>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#111",
    alignItems: "center",
  },
  text: {
    color: "#eee",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
