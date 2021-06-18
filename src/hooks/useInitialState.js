import {useContext} from 'react';
import AppContext from "../context/AppContext";

const useInitialState = () => {
    const value = useContext(AppContext);
    if(!value) {
        throw new Error('useInitialState debe estar dentro del proveedor de AppContext');
    }
    return value;
}

export default useInitialState;