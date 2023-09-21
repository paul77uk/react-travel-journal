import './App.css'
import Nav from './Nav'
import data from './data'
import Card from "./Card";

function App() {
  const card = data.map((item) => <Card key={item.id} {...item} />)

  return (
    <>
      <Nav />
      {card}
    </>
  )
}

export default App
