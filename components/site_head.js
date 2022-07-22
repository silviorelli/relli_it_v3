import Head from 'next/head'

export default function SiteHead({name, profileImage}) {
  return (
    <Head>
      <title>{name}'s homepage</title>
      <meta name="description" content={`${name}'s homepage`}/>
      <meta name="keywords" content={name}/>
      <meta name="author" content={name}/>
      <meta name="twitter:card" content={name} />
      <meta name="twitter:title" content={name} />
      <meta name="twitter:description" content={`${name}'s homepage`} />
      <meta name="twitter:image" content={`https:${profileImage.fields.file.url}`} />
      <meta property="og:site_name" content={`${name}'s homepage`} />
      <meta property="og:title" content={name} />
      <meta property="og:url" content="https://www.relli.it" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={`${name}'s homepage`} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={`https:${profileImage.fields.file.url}`} />
    </Head>
  )
}
