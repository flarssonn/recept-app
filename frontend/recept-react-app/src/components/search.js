import React from 'react';
import './header.css';
import { Button } from 'react-bootstrap';
import { ButtonGroup} from 'react-bootstrap';

class Search extends React.Component  {

    render() {
        return(

            <div className="search">
              <ButtonGroup >
                <Button>Search</Button>


              </ButtonGroup>
            </div>

        );
    }

}

export {Search};
