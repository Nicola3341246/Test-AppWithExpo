import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import ImageViewer from "./components/image";
import Button from "./components/button";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer ImageSource={PlaceholderImage} />
            </View>
            <Button theme="primary" textInsideButton="Choose a foto" />
            <Button textInsideButton="Use this foto" />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    },
    MRwhite: {
        color: "#fff",
    },
});
