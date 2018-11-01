import React, { Component } from 'react';
import When from '..../searchBar/When';
import Counters from '..../searchBar/Counters';

class ToggleButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
            countersHidden: true
        }
        this.toggleHidden = this.toggleHidden.bind(this);
        this.toggleCounters = this.toggleCounters.bind(this);
    }
    
    toggleHidden() {
        this.setState({ isHidden: !this.state.isHidden });
    }

    toggleCounters() {
        this.setState({ countersHidden: !this.state.countersHidden });
    }

    render() { 
        const { isHidden, countersHidden } = this.state;
        return (
            <div style={{display: 'inline-flex'}}> 
                    <div>
                        <form id ='where'>
                            <input type='search' placeholder='Where' />
                        </form>
                    </div>
                    
                    <div style={{alignSelf: 'center'}}>
                        <button className='toggle_btn' onClick={this.toggleHidden}>
                            When
                        </button>
                        {!isHidden && <When />}
                
                        <button className='toggle_btn' onClick={this.toggleCounters}>
                            Who
                        </button>
                        {!countersHidden && <Counters />}
                    </div>
            </div>
         );
    }
}
 
export default ToggleButtons;
