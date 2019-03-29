import React,{Component} from 'react';
import Panel from './Panel';
class Detail extends Component{
  render(){
      return <Panel head={'Detailspage'} body={JSON.stringify(this.props.match.params)}/>
  }
}
export default Detail;