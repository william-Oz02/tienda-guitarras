import { useState } from "react"
import Guitars from "./components/Guitars"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { db } from "./data/db"

function App() {
    
    const [data, setData] = useState(db)
    const [cart, setCart] = useState([])

    function addToCart(item){
        const itemExist = cart.findIndex(guitar => guitar.id === item.id)

        if(itemExist >= 0){
            const updatedCart = [...cart]
            updatedCart[itemExist].quantity++
            setCart(updatedCart)
        }else{
            item.quantity = 1
            setCart(prevCart => [...prevCart, item])
        }
        
    }

    return (
        <>
            <Header 
                cart={cart}
            />

            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">
                    {data.map((guitar) => (
                        <Guitars key={guitar.id}
                           guitar={guitar}
                           setCart={setCart}
                           cart={cart}
                           addToCart={addToCart}
                        />
                    ))}
                </div>
            </main>

            <Footer/>       
        </>
    )
}

export default App