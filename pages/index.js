import Head from 'next/head'
import {createClient} from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const space = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN
const client = createClient({
  space: space,
  accessToken: accessToken
})

export async function getHomeData() {
  try {
    const allHomepages = await client.getEntries({
      content_type: 'homepage'
    })
    // console.log('------- allHomepages:', allHomepages)
    return allHomepages.items[0].fields
  } catch (e) {
    console.log('------- error:', e)
  }
}

export async function getStaticProps() {
  return {
    props: {
      homeData: await getHomeData()
    }
  }
}

export default function Home({ homeData }) {  
  return (
    <div>
      <Head>
        <title>Silvio Relli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='m-8 text-center'>
        <p>Hi there!</p>
        <p>{homeData.name}</p>
      </main>
    </div>
  )
}
