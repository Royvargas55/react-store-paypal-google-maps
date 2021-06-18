import { useState } from "react";
import addressState from "../addressState";

const useGoogleAddress = () => {
    const [map, setMap] = useState({});
    setMap(addressState.results[0].geometry.location);
    return map;
};

export default useGoogleAddress;