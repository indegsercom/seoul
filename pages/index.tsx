import Head from 'next/head'
import Story from 'pages/story/Story'

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Story />
    </div>
  )
}

export default HomePage
