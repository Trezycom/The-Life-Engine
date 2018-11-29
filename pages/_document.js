// Module imports
import Document, { Head, Main, NextScript } from 'next/document'





export default class MyDocument extends Document {
  render () {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </html>
    )
  }
}
