import api from "./api"

export async function getData() {
    const publicIp = require("react-public-ip");
    const ipv4 = await publicIp.v4();
    console.log(ipv4);

    const response = await api.request({
        method: 'get',
        baseURL: api.baseURL,
        url: 'https://ipvigilante.com/json/' + ipv4,
    })
    console.log(response.data);
    return response.data;
}

export default getData;