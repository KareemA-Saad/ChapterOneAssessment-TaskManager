import React from 'react';
import { FlatList, View } from 'react-native';
import { Task } from '../../types/Task';
import { sortTasksByDate } from '../../utils/taskHelpers';
import { EmptyState } from '../ui/EmptyState';
import { TaskItem } from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

/**
 * Component for displaying the list of tasks
 * Features: FlatList for performance, empty state, sorted by date
 */
export const TaskList: React.FC<TaskListProps> = ({ 
  tasks, 
  onToggleTask, 
  onDeleteTask 
}) => {
  // Sort tasks by creation date (newest first)
  const sortedTasks = sortTasksByDate(tasks);

  const renderTaskItem = ({ item }: { item: Task }) => (
    <TaskItem
      task={item}
      onToggle={onToggleTask}
      onDelete={onDeleteTask}
    />
  );

  const renderEmptyState = () => (
    <EmptyState
      title="No tasks yet"
      subtitle="Add your first task above to get started!"
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={sortedTasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingBottom: 24, // Extra padding at bottom
        }}
        style={{ flex: 1 }}
        ListEmptyComponent={renderEmptyState}
        // Performance optimizations
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        windowSize={10}
        initialNumToRender={10}
        // Android specific fixes
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      />
    </View>
  );
};
