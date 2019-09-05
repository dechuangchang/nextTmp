import App, {Container} from 'next/app'
import { Provider } from 'react-redux';
import configureStore from '../js/store/configureStore';
const store = configureStore();
import React from 'react'
import '../less/common.less'
export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return (
      
        <Provider store={store}>
          {
            pageProps.statusCode ? null:
            <p>Next.js</p>
          }
          <Component {...pageProps} />
        </Provider>
      
    )
  }
}