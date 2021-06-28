import {
  Badge,
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const TodoList = ({ todos, deleteTodo }) => {
  if (!todos.length) {
    return (
      <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
        No todos left!
      </Badge>
    );
  }
  return (
    <VStack
      divider={<StackDivider />}
      borderColor="grey.100"
      borderWidth="2px"
      p="4"
      borderRadius="lg"
      width="100%"
      maxWidth={{
        base: "90vw",
        sm: "80vw",
        lg: "50vw",
        xl: "40vw",
      }}
      alignItems="stretch"
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound="true"
            alignSelf="flex-end"
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
};

export default TodoList;
