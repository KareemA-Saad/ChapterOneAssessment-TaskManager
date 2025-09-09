import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Task } from '../../types/Task';
import { createTaskItemStyles } from './TaskItem.styles';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

/**
 * Component for displaying individual tasks
 * Features: Checkbox, task text, delete button, visual states
 */
export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  const styles = createTaskItemStyles();

  const handleToggle = () => {
    onToggle(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <View style={[
      styles.container,
      task.completed && styles.containerCompleted,
    ]}>
      {/* Checkbox */}
      <TouchableOpacity
        style={[
          styles.checkbox,
          task.completed && styles.checkboxChecked,
        ]}
        onPress={handleToggle}
        activeOpacity={0.7}
      >
        {task.completed && (
          <Text style={styles.checkboxText}>✓</Text>
        )}
      </TouchableOpacity>

      {/* Task Text */}
      <View style={styles.content}>
        <Text style={[
          styles.text,
          task.completed && styles.textCompleted,
        ]}>
          {task.description}
        </Text>
      </View>

      {/* Delete Button */}
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={handleDelete}
        activeOpacity={0.7}
      >
        <Text style={styles.deleteButtonText}>×</Text>
      </TouchableOpacity>
    </View>
  );
};
