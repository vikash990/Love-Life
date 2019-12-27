import axios from 'axios'

export const register=newUser=>{
    return axios.post('routes/register',{
        first_name:newUser.first_name,
        last_name:newUser.last_name,
        email:newUser.email,
        password:newUser.password
    }).then(response=>{
        console.log('Registered')
    })
}
export const login =user=>{
    return axios.post('routes/login',{
        email:user.email,
        password:user.passowrd
    }).then(response=>{
        localStorage.setItem('usertoken',response.data)
        return response.data
    }).catch(err=>{
        console.log(err)
    })

}