import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./Components/CoffeeCard/CoffeeCard";

function App() {
  const coffees = useLoaderData();

  return (
    <>
      <h1 className='text-5xl text-purple-500'>Hot Hot cold coffee: {coffees.length}</h1>

      <div>
        <p className="text-center font-bold">--- Sip & Savor ---</p>
        <h2 className="text-center font-bold font-rancho text-2xl">Our Popular Products</h2>
      <div className="mx-auto grid md:grid-cols-2 gap-4">
      {
        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
      }
      </div>
      </div>
    </>
  )
}

export default App
