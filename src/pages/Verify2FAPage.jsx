import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

export default function Verify2FAPage() {
    const { verify2FACode } = useAuth();
    const [code, setCode] = useState("");

    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = await verify2FACode(code);

        if (isValid) {
            navigate('/profile');
        } else {
            alert("Invalid code, Please try again.");
        }
    };

    const handleCodeInputChange = (e) => {
        // Current Target refers to target the handler is attached to and the e.target refers to the element which capture the event
        e.preventDefault(); // base on the above information the preventDefault always refer to e.target 

        let newCodeValue = e.target.value ?? "";

        if (newCodeValue) {
            setCode(newCodeValue);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={code} onChange={handleCodeInputChange} placeholder='Enter verification code here' />
            <button type="submit">Verify</button>
        </form>
    );
}