import axios from 'axios'

export const setAuthor=(users)=>{
    return {
        type:'SET_AUTHORS',
        payload:users

    }
}

export const startSetPosts=()=>{
    return(dispatch)=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response =>{
                const users=response.data
                dispatch(setAuthor(users))
            })

            }
    }
