import axios from 'axios';

export default {
    request: async (options) => {
        const response = await axios(options)

        return response
    }
}
