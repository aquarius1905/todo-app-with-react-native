import React from 'react'
import { StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native'

interface TaskInputProps {
  taskText: string;
  setTaskText: (text: string) => void;
  handleSaveTask: () => void;
  isEditing: string;
}

const TaskInput: React.FC<TaskInputProps> = ({ taskText, setTaskText, handleSaveTask, isEditing }) => {
  return (
    <View>
      <TextInput
        placeholder="タスクを入力"
        style={styles.input}
        onChangeText={setTaskText}
        value={taskText}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveTask}>
        <Text style={styles.saveButtonText}>{isEditing ? '編集' : '追加'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: '#ccceee',
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  saveButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  saveButtonText: {
    color: 'white',
    textAlign: 'center',
  }
});

export default TaskInput
