import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Project extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background: 'http://localhost:3000/img/appoweb.png)'}}>Company Portfolio</CardTitle>
                    <CardText>Company Portfolio
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>LiveDemo <a href="https://appoweb-softs.netlify.app/
"></a></Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://appoweb-softs.netlify.app/) center / cover'}}>React Project #2</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://spectrum.imgix.net/communities/102b08e1-f26e-4cda-b252-03258776bc14/react.png.0.1901592707012414?w=256&h=256&expires=1542672000000&ixlib=js-1.2.0&s=f09efeeb327b5aaf99a1c4ba63527b92) center / cover'}}>React Project #3</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>



                </div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://pbs.twimg.com/media/ClJkUf0UoAAH41n.jpg) center / cover'}}>Angular Project #1</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://pbs.twimg.com/media/ClJkUf0UoAAH41n.jpg) center / cover'}}>Angular Project #2</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://pbs.twimg.com/media/ClJkUf0UoAAH41n.jpg) center / cover'}}>Angular Project #3</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>



                </div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://cdn-images-1.medium.com/max/800/1*qiTJR-sO5ULMV1YqCItT8w.jpeg) center / cover'}}>Vue Project #1</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://cdn-images-1.medium.com/max/800/1*qiTJR-sO5ULMV1YqCItT8w.jpeg) center / cover'}}>Vue Project #2</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://cdn-images-1.medium.com/max/800/1*qiTJR-sO5ULMV1YqCItT8w.jpeg) center / cover'}}>Vue Project #3</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>



                </div>
            )
        }
        else if(this.state.activeTab === 3){
            return(
                <div className="projects-grid">
                
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://3.bp.blogspot.com/-NLgOIL0vKJg/W0yrvqx8ZsI/AAAAAAAABfg/l7fFkNQf5S02YIanj4H9KKWiZJNmSlKigCLcBGAs/s1600/mongodb.png) center / cover'}}>MongoDB Project #1</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://3.bp.blogspot.com/-NLgOIL0vKJg/W0yrvqx8ZsI/AAAAAAAABfg/l7fFkNQf5S02YIanj4H9KKWiZJNmSlKigCLcBGAs/s1600/mongodb.png) center / cover'}}>MongoDB Project #2</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://3.bp.blogspot.com/-NLgOIL0vKJg/W0yrvqx8ZsI/AAAAAAAABfg/l7fFkNQf5S02YIanj4H9KKWiZJNmSlKigCLcBGAs/s1600/mongodb.png) center / cover'}}>MongoDB Project #3</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>



                </div>
            )
        }
    }

    


    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

             
                <Grid className="projects-grid">
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
                    
                

            </div>
        )
    }
}

export default Project;