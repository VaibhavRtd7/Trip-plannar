import { getCall } from "./api"
import {useReducer} from React;

const reducer = (state, action) => {

    switch(action.type) {
    
        case 'FETCH_SUCCESS' :
             return  {
                ...state,
                data : action.payload,
                isLoading : false
             }

        default :
            return state;
    }

}

const AppContext = React.createContext();
const AppProvider = ()  => {

    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect( () => {
        
        const fetchData = async () => {
            try {
                const response = await axios.get(getCall);
                dispatch({type : 'FETCH_SUCCESS' , payload : response.data})
            } catch(err) { 
                console.log("Error :", err)
            } 
        }

        fetchData()
    }, [])

    return <>
       <AppContext.Provider value="Vaibhav">
         {children}
       </AppContext.Provider>
    </>
}

