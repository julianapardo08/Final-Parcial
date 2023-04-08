import { createContext, useContext, useEffect, useReducer} from "react";

const ContextGlobalDentist = createContext();

const themes = {
  dark: {
      theme: true
  },
  light: {
      theme: false
  }
}

const initialApiState = [{}]
const intialThemeState = themes.light
const initialFavState = JSON.parse(localStorage.getItem('favs')) || []



const apiReducer = (state, action) => {
  switch(action.type){
      case 'GET_DENTISTS':
          return action.payload
      default:
          throw new Error
  }
}

const themeReducer = (state, action) => {
  switch(action.type){
      case 'SWITCH_DARK':
          return themes.dark
      case 'SWITCH_LIGHT':
          return themes.light
      default:
          throw new Error
  }
}


const favReducer = (state, action) => {
  switch(action.type){
      case 'ADD_FAV':
          return [...state, action.payload]
      default:
          throw new Error
  }
}

const ContextProvider = ({ children }) => {
  const [apiState, apiDispatch] = useReducer(apiReducer, initialApiState)
  const [themeState, themeDispatch] = useReducer(themeReducer, intialThemeState)
  const [favState, favDispatch] = useReducer(favReducer, initialFavState)
  
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  // const [infoCardDentist, SetInfoCardDentist] = useState({})
  const url = `https://jsonplaceholder.typicode.com/users`

  useEffect(() => {
    localStorage.setItem('dentistsFavs', JSON.stringify(favState))
}, [favState])

useEffect(() => {
  const tipeTheme = themeState.theme ? 'dark' : 'light';
  localStorage.setItem('theme', tipeTheme);
  document.documentElement.setAttribute('base-theme', tipeTheme)
  }, [themeState.theme])


useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(dataDentist => apiDispatch({type: 'GET_DENTISTS', payload: dataDentist}))
}, [])


  return (
    <ContextGlobalDentist.Provider value={{apiState, themeState, themeDispatch, favState, favDispatch}}>
      {children}
    </ContextGlobalDentist.Provider>
  );
};
export default ContextProvider

export const useContextGlobalDentist = () => useContext(ContextGlobalDentist)