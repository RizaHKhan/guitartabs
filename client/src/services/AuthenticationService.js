//Hitting the register endpoint

import Api from '@/services/Api'

export default {
    register(credentials) {
        return Api().post('register', credentials)
    }
}

//we can call this as follows:
// AuthenticationService.register({
   //email: 'khanriza@gmail.com',
   //password: '1234'


// })