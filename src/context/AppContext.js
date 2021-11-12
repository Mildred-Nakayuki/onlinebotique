import { createContext, useContext, useState } from "react";
import Data from "../Library/stock";

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};

export function AppContextProvider({ children }) {
  const [data, setData] = useState(Data);

  //function to filter data when user check the category checkbox
  const filterData = (category) => {
      console.log(category);
    let newData = Data.filter((item) => item.category.toLocaleLowerCase() === category.toLocaleLowerCase());
    category === "all" ? setData(Data) : setData(newData);
  };

  //function to filter data when user search for a product
  const searchData = (search) => {
    let newData = Data.filter((item) =>
      item.product.toLowerCase().includes(search.toLowerCase())
    );
    setData(newData);
  };

  const contextValue = {
    data,
    filterData,
    searchData,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
