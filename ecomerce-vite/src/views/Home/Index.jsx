import { useEffect, useState } from "react"
import Card from "../../components/card"
import Layout from "../../components/Layout"

function Home() {
  const [items,setItems]=useState(null)
  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(response=>response.json())
      .then(data=>setItems(data))
  },[])
  return (
    <Layout >
      <h1 className="text-5xl font-bold dark:text-white mb-9"> 
        Home
      </h1>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.map((item)=>(
            <Card
            key={item.id}
            data={item}
            />
          ))
        }
      </div>
      <Card/>
    </Layout>
  )

}

export default Home