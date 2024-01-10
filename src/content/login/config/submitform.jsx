import { TOKEN_API_KEY, PASSWORD_API_KEY } from "../../../hook/Secrets.json";
import l from "./../../../lang/lang";
import Swal from "sweetalert2";
import axios from "axios";

export default async function submitForm(event, value) {
    console.log(event, value);
    const fetchData = async () => {
        const response = await axios.get(
            `https://chocobeta-server-php-database-api.teachoco.repl.co/app/log/${event.content}.php`,
            {
                params: {
                    ...value,
                    register: {},
                    TOKEN_API_KEY,
                    PASSWORD_API_KEY,
                },
            }
        );
        return response.data;
    };
    const data = await fetchData();
    console.log(data);
    if (data.swal) {
        const swalContent = {
            title: l(`swal.${data.swal.title}`),
        };
        if (data.status >= 500) {
            swalContent.icon = "error";
        } else if (data.status >= 300 && data.status < 500) {
            swalContent.icon = "warning";
        } else if (data.status >= 200 && data.status < 300) {
            swalContent.icon = "success";
        } else if (data.status >= 300 && data.status < 400) {
            swalContent.icon = "info";
        }
        if (data.swal.text) {
            swalContent.text = l(`swal.${data.swal.text}`);
        }
        Swal.fire(swalContent);
    }
    return data;
}
