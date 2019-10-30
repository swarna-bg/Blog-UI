import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { setAuthor } from './actions/authors'
import { connect } from 'react-redux'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Row,Col
  } from 'reactstrap';
  


class Authors extends React.Component{
   
    componentDidMount(){
        if (this.props.users.length===0){
            axios.get(`https://jsonplaceholder.typicode.com/users`)
                .then(response => {
                    const users=response.data
                    console.log(users)
                this.props.dispatch(setAuthor(users))
                })
        }
        

    }
    // load = () => {
    //     this.setState(prev => ({
    //         newPosts: prev.posts.slice(0,prev.newPosts.length+10)
            
    //     }))
   // }

    render(){
        return(
            <div className="container">
                <h2>Listing Authors--{this.props.users.length}</h2>
                <div>
                <Row>
                {this.props.users.map(user=>{
                    return(
                        <Col sm="4" key={user.id}>
                        <Card>
                        <CardImg top width="100%" src="https://picsum.photos/200/300" alt="Card image cap" />
                        <CardBody>
                        <CardTitle> Author name:{user.name}</CardTitle>
                        <CardSubtitle>Username:{user.username}</CardSubtitle>
                        <CardText> Email:{user.email}</CardText>
                        <Link to={`Authors/${user.id}`}> Read More</Link>
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
        users:state.users
    }
}
export default connect(mapStatetoProps) (Authors)