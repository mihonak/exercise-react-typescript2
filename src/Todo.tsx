import { VFC } from "react";
import { TodoType } from "./types/todo";

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "*" : "-";
  return <p>{`${completeMark} ${title}(user ID:${userId})`}</p>;
};
