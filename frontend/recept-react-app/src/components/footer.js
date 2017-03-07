import React from 'react';
import './header.css';
import {Button} from 'react-bootstrap';
import {ButtonToolbar} from 'react-bootstrap'
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';


class Footer extends React.Component  {

    render() {
        return(

            <div className="footer">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <div className="Creator-label">
                                This site was created by
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className="Creator-pics">
                                
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>

        );
    }

}

export {Footer};
