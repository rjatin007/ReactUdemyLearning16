import React, { Component } from 'react';
import { Route , NavLink } from 'react-router-dom';
import './Blog.css';
import Posts from '../Blog/Posts/Posts';
import NewPost from '../../containers/Blog/NewPost/NewPost';
class Blog extends Component {
   
  
    
    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li> <NavLink to="/" exact 
                            activeClassName="my-active"
                            activeStyle={{
                                color: '#fa923f',
                                textDecoration:'underline'

                            }} >Home</NavLink></li>
                            <li> <NavLink to={{
                                pathname : '/new-post',
                                hash : '#submit',
                                search : '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route exact path="/" render={()=>(<Posts/>)}/> */}
                <Route exact path="/" component={Posts}/>
                <Route exact path="/new-post" component={NewPost}/>
            </div>
        );
    }
}

export default Blog;
