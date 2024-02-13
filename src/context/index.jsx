import { createContext, useState } from "react";



export const GlobalContext = createContext(null);

export default function GlobalState({children}){

  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}&key=9c9b0123-bfc3-44b7-8015-d686e01b820e`);

      const data = await res.json();
      if(data?.data?.recipes){
        setRecipeList(data?.data?.recipes)
        setLoading(false)
        setSearchParam('')
      }

      
    }
    catch(e) {
      console.log(e);
    }
  }

console.log(loading, recipeList);

  return (<GlobalContext.Provider value={{searchParam, loading, recipeList, setSearchParam, handleSubmit}}>
    {children}
    </GlobalContext.Provider>
  )
} 