import React from 'react'
import axios from 'axios'



class Recent extends React.Component{
    constructor(){
        super()
        this.state={
            posts:[],
            newPosts: []
        }
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                const posts=response.data
                this.setState({posts,newPosts: posts.slice(posts.length-5,posts.length)})
            })

    }

    render(){
        console.log('recent')
        return(
            <div className="recent">
                <h3>Listing Recent Posts- {this.state.newPosts.length}</h3>
                <ul>
                    {this.state.newPosts.map(post => <li key={post.id}> {post.title}</li>)}
                </ul>
            </div>
        )
    }
}
export default Recent