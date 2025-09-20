import "./index.css";
import Search from "./components/Search";

export default function App() {
  return (
    <div className="bg-red-500 text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        GitHub User Search
      </h1>
      <Search />
    </div>
  );
}
