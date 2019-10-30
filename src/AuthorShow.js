import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


class AuthorShow extends React.Component{
    constructor(){
        super()
        this.state = {
            user:{},
            posts: [],
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response=>{
                const user=response.data
                this.setState({user})
                console.log('1')

            })
            console.log('2')
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response=>{
                const posts=response.data
                this.setState({posts})
            })
    }

    render(){
        return(
            
            <div className="authorshow">
                <h3>Author: {this.state.user.name}</h3>
                <h3>Email: {this.state.user.email}</h3>
                <h3>Listing of posts</h3>
                <ul>
                    {this.state.posts.map(post => <li key={post.id}><Link to={`/Posts/${post.id}`}>{post.title}</Link></li>)}
                </ul>
                
                <button><Link to="/Authors">Back</Link></button>
            </div>
        )
    }
}
export default AuthorShow