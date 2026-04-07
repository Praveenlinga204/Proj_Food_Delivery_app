import React, { useState } from 'react'
import Header from '../../Component/Header/Header'
import "./Home.css"
import Exploremenu from '../../Component/Exploremenu/Exploremenu'
import FoodDisplay from '../../Component/FoodDisplay/FoodDisplay'
import Appdownload from '../../Component/Appdownload/Appdownload'

function Home() {
    const [category, setCategory] = useState("All")
    return (
        <div>
            <Header />
            <Exploremenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />
            <Appdownload/>
        </div>
    )
}

export default Home
