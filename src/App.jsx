import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat  bg-contain">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibolb tracking-[0.3em]">
            Todo
          </h1>
          <button>
            <MoonIcon />
          </button>
        </div>

        <form className="flex gap-4 overflow-hidden rounded-md  bg-white py-4 pl-4 mt-8">
          <span className="ml-2 inline-block h-5 w-5 rounded-full border-2"></span>
          <input
            className="w-full text-gray-400 outline-none"
            type="text"
            placeholder="Create a New Todo... "
          />
        </form>
      </header>

      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md [&>article]:px-4">
          <article className="flex gap-4 py-4  border-b-gray-400 border-b">
            <button className="ml-2 inline-block h-5 w-5 rounded-full border-2"></button>

            <p className="text-gray-500 grow">Proyecto Portfolio</p>

            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <article className="flex gap-4 py-4  border-b-gray-400 border-b">
            <button className="ml-2 inline-block h-5 w-5 rounded-full border-2"></button>

            <p className="text-gray-500 grow">Proyecto Portfolio</p>

            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <article className="flex gap-4 py-4  border-b-gray-400 border-b">
            <button className="ml-2 inline-block h-5 w-5 rounded-full border-2"></button>

            <p className="text-gray-500 grow">Proyecto Portfolio</p>

            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-500">5 items left</span>
            <button className="text-gray-500">Clear Complete</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto px-4 mt-8">
        <div className="bg-white p-4 rounded-md flex justify-center gap-4">
          <button className="hover:text-blue-500">All</button>
          <button className="hover:text-blue-500">Active</button>
          <button className="hover:text-blue-500">Completed</button>
        </div>
      </section>

      <section className="text-center mt-8">
        {" "}
        Drag and drop to reorder list{" "}
      </section>
    </div>
  );
};
export default App;
