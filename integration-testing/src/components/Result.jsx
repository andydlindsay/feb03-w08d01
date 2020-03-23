import React from 'react';
import { statusCheck } from '../helpers/helpers';

const Result = (props) => {
  const { status } = props;
  const message = statusCheck(status);
  
  return(
    <footer data-testid="result_footer">
      <h2>{ message }</h2>
    </footer>
  );
}

export default Result;
