import React from 'react';
import './main.css';
import { Link } from 'react-router'


class Test1 extends React.Component  {

    render() {
        return(
          <div>
            <Link to="/">Hejsan</Link>
          </div>
      );

    }

}

export {Test1};
