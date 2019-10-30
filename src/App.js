import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Posts from './Posts.js'
import Authors from './Authors.js'
import PostShow from './PostShow.js'
import AuthorShow from './AuthorShow.js'
import { Nav, NavItem, NavLink, Navbar } from 'reactstrap';
// import Recent from './Recent.js'

function App(props) {
    return (
      <BrowserRouter>
          <div>
            <Navbar color="light" light expand="md">Blog-UI
            <Nav className="ml-auto" navbar>
           
                <NavItem><NavLink href="/posts">Posts</NavLink></NavItem>
                <NavItem><NavLink href="/Authors">Authors</NavLink></NavItem>
           
              
          
            </Nav> </Navbar>
            </div>
            <Route path="/Posts" component={Posts} exact={true}/>
            <Route path="/Posts/:id" component={PostShow}/>
            <Route path="/Authors" component={Authors} exact={true}/>
            <Route path="/Authors/:id" component={AuthorShow}/>
            {/* <Recent  /> */}
            
      </BrowserRouter>
    );
  }



export default App