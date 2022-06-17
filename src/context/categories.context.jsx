import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';



export const CategoriesContext = createContext({
    categoriesMap:[],
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap ,setCategoriesMap]=useState({});
    
    // this was used to upload data to firestore >>>>no need to run it again data is already on store 
    // useEffect(()=>{
    //     addCollectionAndDocuments('categories',SHOP_DATA);
    // },[])


    // getting data from firebase
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    },[]);
    const value = {categoriesMap};


return <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
}