import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['OnePouch', 'Dragon Ball'])

    const onAddCategory = (newCategory) => {
        
        if(categories.includes(newCategory)) return;
        
        setCategories([newCategory, ...categories]);
        // setCategories(['Valorant', ...categories ])
           
    }

  return (
<>
    <h1>GifExpertApp</h1>
    <AddCategory 
        // setCategories={setCategories} 
        onNewCategory={value => onAddCategory(value)}
        />

    {
        categories.map( (category) => (
                <GifGrid 
                    key={category}
                    category={category}/>
            ))
    }
</>
  )
}

export default GifExpertApp