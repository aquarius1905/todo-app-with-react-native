import TaskInput from '@/components/TaskInput';
import TaskItem from '@/components/TaskItem';
import React, { useState } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';

export default function HomeScreen() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState<{ id: string; text: string }[]>([]);
  const [isEditing, setIsEditing] = useState('');

  const handleSaveTask = () => {
    if (!taskText.trim()) return;
    if(isEditing) {
      setTasks(
        tasks.map(
          task => (task.id === isEditing ? { ...task, text: taskText } : task)
        )
      );
      setIsEditing('');
    } else {
      const newTask = {
        id: Date.now().toString(),
        text: taskText,
      };
      setTasks([...tasks, newTask]);
    }

    setTaskText('');
  };
  const handleDelete = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleEdit = (item: { id: string; text: string }) => {
    setTaskText(item.text);
    setIsEditing(item.id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todoアプリ</Text>
      <TaskInput
        taskText={taskText}
        setTaskText={setTaskText}
        handleSaveTask={handleSaveTask}
        isEditing={isEditing}
        />
      <FlatList data={tasks}
        renderItem={({ item }: { item: { id: string; text: string } }) => (
        <TaskItem
          item={item}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 40,
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

