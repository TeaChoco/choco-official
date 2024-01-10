import { useState, useEffect } from "react";
import { TOKEN_API_KEY, PASSWORD_API_KEY } from "./Secrets.json";
import axios from "axios";

export default function getLang() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const lang = "th";
                const response = await axios.get(
                    "https://chocobeta-server-php-database-api.teachoco.repl.co/app/lang/language.php",
                    {
                        params: {
                            lang,
                            TOKEN_API_KEY,
                            PASSWORD_API_KEY,
                        },
                    }
                );
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    return data;
}
