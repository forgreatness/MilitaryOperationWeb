import { useState } from 'react';

// export const useLocalStorage = (keyName, defaultValue) => {
//     const [storedValue, setStoredValue] = useState(() => {
//         try {

//         } catch (err) {
//             return defaultValue;
//         }
//     });


// }

export function useLocalStorage(keyName, defaultValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = window.localStorage.getItem(keyName);

            if (value) {
                return JSON.parse(value);
            } else {
                window.localStorage.setItem(keyName, JSON.stringify(defaultValue));

                return defaultValue;
            }
        } catch (err) {
            return defaultValue;
        }
    });

    const setValue = (newValue) => {
        try {
            window.localStorage.setItem(keyName, JSON.stringify(newValue));
        } catch (err) {
            console.log(err);
        }
        setStoredValue(newValue);
    };

    return [storedValue, setValue];
}


/*
SUMMARY
    - we start out with a function called useLocalStorage()
    - the function takes 2 parameters (keyName, defaultValue)
    - inside the function we invoke the useState hook
        ==> tranditionally we passed in object or value as useState default parameters
        ==> this time however, we passed in call back
    - insdie this callback()
        ==> we obtain the localstorage value using the passed in keyName from useLocalStorage function
        ==> if there are value then we return that value as storedValue
        ==> else we set it using default and return default
        ==> if there are error then we return defaultvalue
    - Inside the useLocalStorage we have aother arrow function called setValue
    - setvalue()
        ==> try to get the localstorage value by keyname
        ==> then set the storedValue to that new value
    - The function return the setValue as a function to set localstorage value and the state storedvalue,
    
    Output: storedValue from localstorage, and a function setValue to set value in localstorage and changes the value of storedValue
*/