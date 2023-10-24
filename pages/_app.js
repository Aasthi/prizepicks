import '@/styles/globals.css'
import { Provider } from "react-redux";
import { store } from "../store/configure";
import Layout from '@/components/layout';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
