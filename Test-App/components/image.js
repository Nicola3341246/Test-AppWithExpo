import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ ImageSource }) {
    return <Image source={ImageSource} style={styles.image} />;
}

let styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});
