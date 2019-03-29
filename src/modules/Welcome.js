import React,{Component} from 'react';
import Panel from './Panel';
class Welcome extends Component {
    
      render(){
        return <Panel head={'welcome'} body={'Hello users'}/>;
      }
    
}
export default Welcome;