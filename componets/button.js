import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../styles/global";

export default function customButton({ text }) {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.btnTex}>{text}</Text>
    </TouchableOpacity>
  );
}
