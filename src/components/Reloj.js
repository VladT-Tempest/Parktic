import React, {useEffect, useState} from 'react';

const Reloj = () => {

    const [value, setValue] = useState(new Date().toLocaleString());
    
    useEffect(() => {
        const interval = setInterval(() => setValue(new Date().toLocaleString()),1000)
    });

    return(
    <footer>
        <span className="d-flex justify-content-center">{value}</span>
    </footer>
    );
}

export default Reloj