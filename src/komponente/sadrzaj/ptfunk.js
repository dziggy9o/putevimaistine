import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class InfoTure extends Component{
    render(){
        return(
            <i className="tureinfo"><Link to={this.props.info}><FontAwesomeIcon icon={faInfo} /></Link></i>
        )
    }
}
export default InfoTure;