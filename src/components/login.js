import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
      console.log('start');
      const { history } = this.props;
      history.push({
        pathname: 'products',
        state: { successMessage: 'User logged in successfully' },
      });
      console.log('done');
    }

    render() {
      return <div>
            <p>login</p>
          </div>;
    }
  }

export default Login;