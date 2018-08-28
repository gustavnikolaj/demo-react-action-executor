import React from "react";
const { Provider, Consumer } = React.createContext(null);

export const ActionExecutorProvider = Provider;

export function withActionExecutor(WrappedComponent, actions) {
  return class extends React.Component {
    bindActions(actionExecutor) {
      const boundActions = {};

      for (const name of Object.keys(actions)) {
        const Action = actions[name];
        boundActions[name] = (...args) => {
          const instanceAction = new Action(...args);

          return actionExecutor.enqueue(instanceAction);
        };
      }

      return boundActions;
    }

    render() {
      return (
        <Consumer>
          {value => {
            const newProps = {
              ...this.props,
              ...this.bindActions(value)
            };
            return <WrappedComponent {...newProps} />;
          }}
        </Consumer>
      );
    }
  };
}
