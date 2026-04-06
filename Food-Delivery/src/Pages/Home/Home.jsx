import React, { useState } from 'react'
import Header from '../../Component/Header/Header'
import "./Home.css"
import Exploremenu from '../../Component/Exploremenu/Exploremenu'
import FoodDisplay from '../../Component/FoodDisplay/FoodDisplay'

function Home() {
    const [category, setCategory] = useState("All")
    return (
        <div>
            <Header />
            <Exploremenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />
        </div>
    )
}

export default Home
