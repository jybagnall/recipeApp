import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  favMealIds: [],
  addFav: (id) => {},
  removeFav: (id) => {},
});

export default function FavoritesContextProvider({ children }) {
  const [favMealIds, setFavMealIds] = useState([]);

  function addFav(id) {
    setFavMealIds((curIds) => {
      if (curIds.includes(id)) {
        return curIds; // ✅ 중복 방지
      }
      return [...curIds, id];
    });
  }

  function removeFav(id) {
    setFavMealIds((curIds) => curIds.filter((curId) => curId !== id));
  }

  const value = {
    favMealIds,
    addFav,
    removeFav,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
