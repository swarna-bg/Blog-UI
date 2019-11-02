import React from 'react'
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, } from 'reactstrap';

 export default function Home(props){
    return (
        <div>
           
        <Card inverse>
          <CardImg width="25%" src="https://www.discoverwalks.com/blog/wp-content/uploads/2019/02/set_square_near_a_laptop_unsplash.jpg" alt="Card image cap" />
          <CardImgOverlay>
             
            <CardTitle color="dark" className="text-center">Welcome to Blog-UI</CardTitle>
            <CardText color="dark" className="text-center">Click on Posts or Authors to explore....</CardText>
           
            
          </CardImgOverlay>
        </Card>
       
      </div>
    )
}