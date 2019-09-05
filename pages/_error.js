import React from 'react'
import { Result, Button } from 'antd';
const NotFound = ()=> (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button href='/index' type="primary">Back Home</Button>}
  />
)
const ServerError = ()=> (
  <Result
    status="500"
    title="500"
    subTitle="Sorry, the server is wrong."
    extra={<Button type="primary">Back Home</Button>}
  />
)
export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    let {statusCode} = this.props;
    return  <div>
      {statusCode = 404 ? <NotFound /> : <ServerError/>}
    </div>
  }
}