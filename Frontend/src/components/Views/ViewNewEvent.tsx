import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { StyledView, StyledText, StyledTextInput, StyledScrollView, StyledTouchableOpacity } from '../../shared/styled';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import MapView, { Marker } from 'react-native-maps';
import IconCalendar from '../Icons/IconCalendar'; 
import IconTime from '../Icons/IconTime';
import { StateSliceUp } from "../../types/types";
import InvitesModal from '../Modals/InvitesModal';

const ViewNetEvent: React.FC = () => {

  const [modalState, setModalState] = useState<StateSliceUp>(StateSliceUp.NONE)
  const openModal = () => setModalState(StateSliceUp.OPEN)
  const closeModal = () => setModalState(StateSliceUp.CLOSE)

  const [eventTitle, setEventTitle] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventDate, setEventDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [eventTime, setEventTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [location, setLocation] = useState<{ latitude: number; longitude: number }>({
    latitude: 20.914409,
    longitude: -97.677454,
  });
  const [selectedGuests, setSelectedGuests] = useState('');

  const handleDateChange = (_: any, selectedDate: Date | undefined) => {
    setShowDatePicker(false);
    if (selectedDate) setEventDate(selectedDate);
  };

  const handleTimeChange = (_: any, selectedTime: Date | undefined) => {
    setShowTimePicker(false);
    if (selectedTime) setEventTime(selectedTime);
  };

  const handleLocationChange = (latitude: number, longitude: number) => {
    setLocation({ latitude, longitude });
  };

  const handleCreateEvent = () => {
    console.log({
      eventTitle,
      eventType,
      eventDate,
      eventTime,
      location,
      selectedGuests,
    }); 
  };

  return (
    <StyledScrollView contentContainerStyle={styles.scrollContainer}>
      <StyledView className='flex-1 p-5 gap-y-8 mb-16'>

        {/* Título del evento */}
        <StyledTextInput
          className='rounded-lg h-14 text-base text-white px-3 bg-InputColor'
          value={eventTitle}
          onChangeText={setEventTitle}
          placeholder="Event Name"
          placeholderTextColor={"#999999"}
        />

        {/* Tipo de evento */}
        <StyledView className='rounded-lg overflow-hidden bg-InputColor'>
            <Picker
                selectedValue={eventType}
                onValueChange={setEventType}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione un tipo" value="" />
                <Picker.Item label="Sport" value="Sport" />
                <Picker.Item label="Meeting" value="Meeting" />
                <Picker.Item label="Cultural" value="Cultural" />
                <Picker.Item label="Educational" value="Educational" />
                <Picker.Item label="Social" value="Social" />
                <Picker.Item label="Work" value="Work" />
                <Picker.Item label="Tourism" value="Tourism" />
                <Picker.Item label="Health" value="Health" />
                <Picker.Item label="Finalcial" value="Finalcial" />
                <Picker.Item label="Other" value="Other" />
            </Picker>
        </StyledView>

        {/* Fecha del evento */}
        <StyledView  className='bg-InputColor h-14 rounded-lg justify-between items-center flex-row px-3'>
          <StyledText className='text-white text-base'>{eventDate.toLocaleDateString()}</StyledText>
          <StyledTouchableOpacity onPress={() => setShowDatePicker(true)}>
            <IconCalendar />
          </StyledTouchableOpacity>
        </StyledView>
        {showDatePicker && (
          <DateTimePicker
            value={eventDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}


        {/* Hora del evento */}
        <StyledView className='bg-InputColor h-14 rounded-lg justify-between items-center flex-row px-3'>
          <StyledText className='text-white text-base   '>{eventTime.toLocaleTimeString()}</StyledText>
          <StyledTouchableOpacity onPress={() => setShowTimePicker(true)}>
            <IconTime />
          </StyledTouchableOpacity>
        </StyledView>
        {showTimePicker && (
          <DateTimePicker
            value={eventTime}
            mode="time"
            display="default"
            onChange={handleTimeChange}
          />
        )}

        {/* Ubicación del evento */}
        <StyledView className='rounded-lg bg-InputColor overflow-hidden'>
            <MapView
            style={styles.map}
            initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
            onPress={(e) =>
                handleLocationChange(
                e.nativeEvent.coordinate.latitude,
                e.nativeEvent.coordinate.longitude
                )
            }>
            <Marker coordinate={location} />
            </MapView>
        </StyledView>

        {/* Invitados */}
        <StyledTouchableOpacity onPress={openModal} className='rounded-lg overflow-hidden h-14 justify-center px-3 bg-InputColor'>
            <StyledText className='text-[#999999] text-base'>Selecciona Invitados</StyledText>
        </StyledTouchableOpacity>

        <InvitesModal visible={modalState} onClose={closeModal} />

      </StyledView>
    </StyledScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {    
    flexGrow: 1,
    paddingBottom: 20,
    marginTop: 20
  },
  picker: {
    color: "#fff",
    height: 56,
  },
  map: {
    height: 200,
    width: '100%',
  },
});

export default ViewNetEvent
