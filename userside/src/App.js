import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// maincontainer
import Login from './containers/maincontainer/Login';
import Signup from './containers/maincontainer/Signup';
import Activate from './containers/maincontainer/Activate';
import ResetPassword from './containers/maincontainer/ResetPassword';
import ResetPasswordConfirm from './containers/maincontainer/ResetPasswordConfirm';
import Facebook from './containers/maincontainer/Facebook';
import Google from './containers/maincontainer/Google';

// subcontainer
import {Home} from './containers/subcontainer/Home';
import {News} from './containers/subcontainer/News';
import AllPosts from './containers/subcontainer/AllPosts';
import AddPost from './containers/subcontainer/AddPost';
import {Team} from './containers/subcontainer/Team';
import {About} from './containers/subcontainer/About';
import {LinkUser} from './containers/subcontainer/LinkUser';
import {Acts} from './containers/subcontainer/Acts';




// crimedata

import {Dw_IPC} from './containers/crimes/maincontainer/Dw_IPC';
import {Dw_SC} from './containers/crimes/maincontainer/Dw_SC';
import {Dw_ST} from './containers/crimes/maincontainer/Dw_ST';
import {Dw_Child} from './containers/crimes/maincontainer/Dw_Child';
// import {Pa_IPC} from './containers/crimes/maincontainer/Pa_IPC';
// import {Pa_SLL} from './containers/crimes/maincontainer/Pa_SLL';
import {PKID} from './containers/crimes/maincontainer/PKID';
import {Dw_W} from './containers/crimes/maincontainer/Dw_W';

import {Footer} from "../src/components/Footer";

import { Provider } from 'react-redux';
import store from './store';

import Layout from './hocs/Layout';

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>

                    {/* maincontainer */}
                    <Route exact path='/' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/facebook' component={Facebook} />
                    <Route exact path='/google' component={Google} />
                    <Route exact path='/reset-password' component={ResetPassword} />
                    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                    <Route exact path='/activate/:uid/:token' component={Activate} />

                    {/* subcontainer */}
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/news' component={News} />
                    <Route exact path='/allposts' component={AllPosts} />
                    <Route exact path='/addpost' component={AddPost} />
                    <Route exact path='/team' component={Team} />
                    <Route exact path='/about' component={About} />   
                    <Route exact path='/linkuser' component={LinkUser} />  
                    <Route exact path='/acts' component={Acts} />  


                         {/* Crimes */}
                    <Route exact path='/dw-ipc' component={Dw_IPC} /> 
                    <Route exact path='/dw-sc' component={Dw_SC} />
                    <Route exact path='/dw-st' component={Dw_ST} /> 
                    <Route exact path='/dw-child' component={Dw_Child} />
                    <Route exact path='/pkid' component={PKID} /> 
                    <Route exact path='/dw-w' component={Dw_W} />                


                    {/* <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} /> */}
                </Switch>
            </Layout>
        </Router>
                <Footer/>
    </Provider>

);

export default App;