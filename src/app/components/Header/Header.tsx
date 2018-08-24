import * as React from 'react';

interface HeaderProps {
  title: string
}

interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}

export default Header;
