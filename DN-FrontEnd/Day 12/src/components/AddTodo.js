import { useState } from "react";
import { Input, HStack, Button, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";

const AddTodo = ({ addTodo }) => {
  const toast = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!body) {
      toast({
        title: "No Content.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const todo = {
      id: nanoid(),
      body,
    };
    addTodo(todo);
    setBody("");
  };
  const [body, setBody] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="Next todo.."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
