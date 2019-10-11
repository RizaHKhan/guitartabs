//this will establish the base connection for us to send requests to

import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: `http://localhost:3000/`
    })
}