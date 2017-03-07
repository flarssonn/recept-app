import React from 'react';
import './header.css';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';


class Footer extends React.Component  {

    render() {
        return(

            <div className="footer">
                <Grid fluid={true}>
                    <Row className="show-grid">
                        <Col xs={12} md={12}>
                            This site was created by: Axel Aringskog, William Dahlberg, Filip Larsson and Victor Olausson
                        </Col>
                    </Row>
                </Grid>
            </div>

        );
    }

}

export {Footer};
