import React from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

interface SnowcoachProps {
  visible: boolean;
  message: string;
  targetPosition: { x: number; y: number; width: number; height: number };
  onClose: () => void;
}

const Snowcoach: React.FC<SnowcoachProps> = ({ visible, message, targetPosition, onClose }) => {
  if (!visible) return null;

  return (
    <Modal transparent visible={visible} animationType="fade">
      <TouchableOpacity style={styles.overlay} onPress={onClose}>
        <View
          style={[
            styles.highlight,
            {
              left: targetPosition.x,
              top: targetPosition.y,
              width: targetPosition.width,
              height: targetPosition.height,
            },
          ]}
        />
        <View
          style={[
            styles.tooltip,
            {
              top: targetPosition.y + targetPosition.height + 10,
              left: targetPosition.x,
            },
          ]}
        >
          <Text style={styles.tooltipText}>{message}</Text>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  highlight: {
    position: "absolute",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 5,
  },
  tooltip: {
    position: "absolute",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    maxWidth: Dimensions.get("window").width * 0.8,
  },
  tooltipText: {
    color: "black",
  },
});

export default Snowcoach;
