import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import { Component } from "react";

export default class About extends Component {
  static async getInitialProps() {
    const res = await fetch("http://api.github.com/users/Akataya");
    const data = await res.json();

    return { user: data };
  }

  // componentDidMount() {
  //   fetch("http://api.github.com/users/Akataya")
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ user: data });
  //     });
  // }

  render() {
    const { user } = this.props;

    return (
      <Layout title="About">
        <p>{user.name}</p>
        <img src={user.avatar_url} alt="Aiya" height="200px" />
      </Layout>
    );
  }
}
