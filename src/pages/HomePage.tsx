import Areas from "../components/Areas";
import Categories from "../components/Categories";
import Landing from "../components/Landing";

export default function HomePage() {
  return (
    <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <Landing />
      <Categories />
      <Areas />
    </div>
  );
}
