import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';


class LandingPage extends Component{
    render(){
        return(
        
            
         

            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        {/* <img
                            src="https://image.freepik.com/free-vector/pop-art-young-woman-cartoon_18591-52671.jpg"
                            alt="avatar"
                            className="avatar"
                        /> */}
                          <img
                            src="./img/komal.png"
                            alt="avatar"
                            className="avatar"
                        />

                        <div className="banner-text">
                            <h1 className="text-pop-up-top" >Web Developer & Ui/Ux Designer</h1>
     
                            <hr/>

                            <p>HTML/CSS |  Bootstrap | Javascript | React |  Node Js | Express | Mongo DB |  Figma | Adobe XD | Illustrator | Photoshop</p>

                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/komal-ata-8a8b0a159/" target="_blank">
                                    <i className="fa fa-linkedin-square"></i>
                                </a>
                                <a href="https://github.com/komalata005" target="_blank">
                                    <i className="fa fa-github-square"></i>
                                </a>
                                <a href="https://www.facebook.com/Komal.Ata/" target="_blank">
                                    <i className="fa fa-facebook-square"></i>
                                </a>
                                <a href="https://www.behance.net/komalata000602" target="_blank">
                                    <i className="fa fa-behance-square"></i>
                                </a>
                            </div>

                        </div>
                       
                    </Cell>
                </Grid>
            </div>
            
        )
    }
}

export default LandingPage;