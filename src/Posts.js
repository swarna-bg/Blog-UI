import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { setPosts } from './actions/posts'
import { connect } from 'react-redux'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle,Row,Col
  } from 'reactstrap';


  


class Posts extends React.Component{
   
    componentDidMount(){
        if (this.props.posts.length === 0){
            axios.get(`https://jsonplaceholder.typicode.com/posts`)
                .then(response => {
                    const posts=response.data
                    console.log(posts)
                this.props.dispatch(setPosts(posts))
                })
        }
        

    }
    // load = () => {
    //     this.setState(prev => ({
    //         newPosts: prev.posts.slice(0,prev.newPosts.length+10)
            
    //     }))
   // }

   render(){
       return (
           <div className="container">
           <h2>Posts List {this.props.posts.length}</h2>
           <div>
                <Row>
                {this.props.posts.map(post=>{
                    return(
                        <Col sm="4" key={post.id}>
                        <Card>
                        <CardImg top width="100%" src="https://picsum.photos/200/300" alt="Card image cap" />
                        <CardBody>
                        <CardTitle> Title:{post.title}</CardTitle>
                        
                        <CardText> Body:{post.body}</CardText>
                        <Link to={`posts/${post.id}`}> Read More</Link>
                    </CardBody>
                    </Card>
                    </Col>
                    )
                })}
                </Row>
            </div>
            </div>
       ) 
    }
}

const mapStatetoProps=(state)=>{
    return {
        posts:state.posts
    }
}
export default connect(mapStatetoProps) (Posts)