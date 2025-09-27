import { useLocation } from "react-router-dom";

export function LinkOne() {
    const location = useLocation(); //useLocation hook provides a location object which we can use to obtained state from the router, or the navigation when it was invoke. As well as what pathname this component is in.

    console.log("I am linkone and this is my state ", location.state);

    return (
        <div>
            Inside Link One
        </div>
    )
}

export function LinkTwo() {
    const location = useLocation();

    console.log("I am in Link2 component and this is the navigated state ", location.state);

    return (
        <div>
            Inside Link2 
        </div>
    )
}