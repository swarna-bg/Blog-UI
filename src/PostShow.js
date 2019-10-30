import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'



class PostShow extends React.Component{
    constructor(){
        super()
        this.state = {
            post:{},
            user: {},
            comments:[]
        }
    } 
    componentDidMount(){
        const id = this.props.match.params.id
        const _this = this
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response=>{
                const post=response.data
                this.setState({post})
                axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.post.userId}`)
                    .then(response=>{
                    const user=response.data
                    this.setState({user})
                })
                axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.state.post.id}`)
                    .then(response=>{
                    const comments=response.data
                    this.setState({comments})
                })

            })
        
    }

    render(){
        return(
            
            <div className="postshow">
                <h3>Author: {this.state.user.name}</h3>
                <h3>Title: {this.state.post.title}</h3>
                <p><b>Body:</b> {this.state.post.body}</p>
                <h3>Listing of comments-</h3>
                <ul>
                    {this.state.comments.map(comment => <li key={comment.id} >  {comment.name}</li>)}
                </ul>
                <button><Link to="/Posts">Back</Link></button>
            </div>
        )
    }
}
export default PostShow