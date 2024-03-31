

const TodoComputed = ({computedItemsLeft, clearCompleted}) => {
  return (
    <section className="py-4 px-4 flex justify-between bg-white rounded-b-md transition-all duration-1000 dark:bg-gray-800 ">
    <span className="text-gray-500 transition-all duration-1000 dark:text-gray-400">{computedItemsLeft} items left</span>
    <button className="text-gray-500 transition-all duration-1000 dark:text-gray-400" onClick={()=>clearCompleted()}>Clear Complete</button>
  </section>
  )
}

export default TodoComputed
