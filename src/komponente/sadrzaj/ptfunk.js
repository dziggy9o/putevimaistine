import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class InfoTure extends Component{
    render(){
        return(
            <Link to={this.props.info}><i className="tureinfo"><FontAwesomeIcon icon={faInfo} /></i></Link>
        )
    }
}
export default InfoTure;