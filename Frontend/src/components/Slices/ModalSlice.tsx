import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, Modal, TouchableWithoutFeedback } from "react-native";
import { StyledView } from "../../shared/styled";

const { height, width } = Dimensions.get("window");

interface ModalSliceProps {
  visible: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  modalWidth?: number; // Ancho del modal, se puede especificar desde el componente hijo
  backgroundColor?: string; // Color de fondo, se puede especificar desde el componente hijo
}

const ModalSlice: React.FC<ModalSliceProps> = ({
  visible,
  onClose,
  children,
  modalWidth = 60, // Valor por defecto de 60px si no se pasa
  backgroundColor = "white", // Valor por defecto blanco si no se pasa
}) => {
  const [showModal, setShowModal] = React.useState<boolean>(visible);
  const animatedValue = useRef(new Animated.Value(-modalWidth)).current; // Comienza fuera de la pantalla a la izquierda

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.timing(animatedValue, {
        toValue: 0, // Se mueve a la posición '0' (donde el modal es visible)
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: -modalWidth, // Se mueve de vuelta fuera de la pantalla
        duration: 300,
        useNativeDriver: true,
      }).start(() => setShowModal(false));
    }
  };

  useEffect(() => {
    toggleModal();
  }, [visible]);

  return (
    <Modal transparent visible={showModal} animationType="none">
      {/* Fondo negro con opacidad que cubre toda la pantalla */}
      <TouchableWithoutFeedback onPress={onClose}>
        <StyledView className="flex-1 bg-black opacity-80" />
      </TouchableWithoutFeedback>

      {/* Contenedor del modal */}
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "#1a1a1a",
          width: modalWidth, // Usamos el valor de modalWidth pasado como prop
          height: height, // Altura completa
          transform: [
            {
              translateX: animatedValue, // Animación para mover el modal horizontalmente
            },
          ],
        }}
      >
        {children}
      </Animated.View>
    </Modal>
  );
};

export default ModalSlice;
