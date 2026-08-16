import React, { useEffect, useState } from "react";
import { getHealthStatus } from "./services/api";

interface HealthData {
    status: string;
    service: string;
}

export const App: React.FC = () => {
    const [data, setData] = useState<HealthData | null>(null);

    useEffect(() => {
        getHealthStatus()
            .then((res) => setData(res))
            .catch((err) => console.error("API Error:", err));
    }, []);

    return (
        <div>
            <h1>DevSecOps Portal</h1>
            {data ? <p>Service: {data.service}</p> : <p>Loading...</p>}
        </div>
    );
};
export default App;