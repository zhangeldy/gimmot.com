import React from 'react';

const withModal = Component => {
  return class extends React.Component {
    state = {
      isOpen: false,
      data: null,
    };

    render() {
      return (
        <Component
          {...this.props}
          modal={{
            data: this.state.data,
            open: data => this.setState({ data , open: true}),
            close: () => this.setState({ data: null, open: false })
          }}
        />
      );
    }
  };
};

export default withModal;
