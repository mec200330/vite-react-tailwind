import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
  const { id, title, completed } = todo;
  return (
    <article className="flex gap-4 py-4  border-b-gray-400 border-b  ">
      <button
        className={` h-5 w-5 flex-none ml-2 rounded-full border-2 ${completed ? " bg-gradient-to-r from-indigo-600 via-purple-500 to bg-pink-500 grid  place-items-center" : " inline-block"}`}
        onClick={() => updateTodo(id)}
      >
        {completed && <IconCheck />}
      </button>

      <p
        className={`text-gray-500 dark:text-gray-400 grow ${completed && "line-through"}`}
      >
        {title}
      </p>

      <button className="flex-none" onClick={() => removeTodo(id)}>
        <IconCross />
      </button>
    </article>
  );
};

export default TodoItem;
