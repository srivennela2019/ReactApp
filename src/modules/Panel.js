import React,{Component} from 'react';
class Panel extends Component {
    render(){
      return <div className='panel panel-primary'>
              <div className='panel-heading'>{this.props.head}</div>
              <div className='panel-body'>{this.props.body}</div>
          </div>;
    }
}
export default Panel;