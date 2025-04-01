import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
  } from 'react-native';
import { Icon } from 'react-native-elements'

interface TaskItemProps {
  item: { id: string; text: string };
  handleEdit: (item: { id: string; text: string }) => void;
  handleDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = React.memo(({ item, handleEdit, handleDelete }) => {

  return (
    <View style={styles.task}>
      <Text style={styles.taskText}>{item.text}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleEdit(item)}>
          <Icon name="edit" color="#4caf50">
            編集
          </Icon>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <Icon name="delete" color="#f44336">
            削除
          </Icon>
        </TouchableOpacity>
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#eee',
  },
  taskText: {
    maxWidth: '80%',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default TaskItem
