import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { isValidTaskDescription } from '../../utils/taskHelpers';
import { createTaskInputStyles } from './TaskInput.styles';

interface TaskInputProps {
  onAddTask: (description: string) => void;
}

/**
 * Component for adding new tasks
 * Features: Input validation, focus states, disabled button when empty
 */
export const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [inputText, setInputText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const styles = createTaskInputStyles();

  const handleAddTask = () => {
    if (isValidTaskDescription(inputText)) {
      onAddTask(inputText);
      setInputText(''); // Clear input after adding
    }
  };

  const handleSubmit = () => {
    handleAddTask();
  };

  const isInputValid = isValidTaskDescription(inputText);

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          isFocused && styles.inputFocused,
        ]}
        value={inputText}
        onChangeText={setInputText}
        placeholder="Add a new task..."
        placeholderTextColor="#9ca3af"
        onSubmitEditing={handleSubmit}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        returnKeyType="done"
        maxLength={200}
      />
      
      <TouchableOpacity
        style={[
          styles.addButton,
          !isInputValid && styles.addButtonDisabled,
        ]}
        onPress={handleAddTask}
        disabled={!isInputValid}
        activeOpacity={0.8}
      >
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};
