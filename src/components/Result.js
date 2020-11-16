import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {
  function renderActionsNeeded(key, index) {
    return (
      <p key={index}
        dangerouslySetInnerHTML={{
        __html: key
      }}>
      </p>
    );
  }

  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
      {props.actionsNeeded.map(renderActionsNeeded)}
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  actionsNeeded: PropTypes.array.isRequired
};

export default Result;
