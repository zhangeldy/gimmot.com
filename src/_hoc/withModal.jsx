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
            isOpen:this.state.isOpen,
            data: this.state.data,
            onOpen: data => this.setState({ data , isOpen: true}),
            onClose: () => this.setState({ data: null, isOpen: false })
          }}
        />
      );
    }
  };
};

export default withModal;
