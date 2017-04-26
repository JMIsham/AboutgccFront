/**
 * Created by Isham on 4/26/2017.
 */
import React ,{Component} from 'react';
import Chip from 'material-ui/Chip';

class TagChips extends Component{
    handleDelete(){
        this.props.handleDelete(this.props.tag.tag_id);
    }

    render(){
        return(
            <Chip
                onRequestDelete={this.handleDelete.bind(this)}
                style={{margin:'4px'}}
            >
                {this.props.tag.name}
            </Chip>
        );

    }
}
export default TagChips;