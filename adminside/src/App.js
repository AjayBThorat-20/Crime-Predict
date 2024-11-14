import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';


// subcontainer
import {DisplayHomeCard} from './containers/maincontainer/DisplayHomeCard';
import {CreateHomeCard} from './containers/maincontainer/CreateHomeCard';
import {AddCrimes} from './containers/maincontainer/AddCrimes';
import {LinkUsers} from './containers/maincontainer/LinkUsers';
import {About} from './containers/maincontainer/About';
import {Vission} from './containers/maincontainer/Vission';
import {Team} from './containers/maincontainer/Team';


// crimedata

import {Dw_IPC} from './containers/crimes/maincontainer/Dw_IPC';
import {Dw_SC} from './containers/crimes/maincontainer/Dw_SC';
import {Dw_ST} from './containers/crimes/maincontainer/Dw_ST';
import {Dw_Child} from './containers/crimes/maincontainer/Dw_Child';
import {PKID} from './containers/crimes/maincontainer/PKID';
import {Dw_W} from './containers/crimes/maincontainer/Dw_W';

// Background
import {AboutBg} from './containers/BackGrounds/BgPages/AboutBg';
import {VissionBg} from './containers/BackGrounds/BgPages/VissionBg';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <h3 className="m-3 d-flex justify-content-center">
        React js tut
      </h3> */}


      <Navigation />
      <div className="container">
                 <Switch >
                    {/* subcontainer */}
                    <Route exact path='/' component={DisplayHomeCard} />
                    <Route exact path='/createhomecard' component={CreateHomeCard} />
                    <Route exact path='/addcrimes' component={AddCrimes} />
                    <Route exact path='/contactus' component={LinkUsers} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/vission' component={Vission} />
                    <Route exact path='/team' component={Team} />


                    {/* Crimes */}
                    <Route exact path='/dw-ipc' component={Dw_IPC} /> 
                    <Route exact path='/dw-sc' component={Dw_SC} />
                    <Route exact path='/dw-st' component={Dw_ST} /> 
                    <Route exact path='/dw-child' component={Dw_Child} />
                    {/* <Route exact path='/pa-ipc' component={Pa_IPC} /> 
                    <Route exact path='/pa-sll' component={Pa_SLL} /> */}
                    <Route exact path='/pkid' component={PKID} /> 
                    <Route exact path='/dw-w' component={Dw_W} />


                    {/* Backgroungs */}
                    <Route exact path='/aboutbg' component={AboutBg} />
                    <Route exact path='/vissionbg' component={VissionBg} />
                                       


                </Switch>
                </div>
         <Footer/>
     </div>
  </BrowserRouter>
  );
}

export default App;