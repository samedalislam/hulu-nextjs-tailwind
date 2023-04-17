import Header from "@/components/Header"
import Nav from "@/components/Nav"
import Results from "@/components/Results"
import requests from "@/utils/requests"
import Head from "next/head"

const Home = ({results}) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAP1BMVEUAAAAYwW4e9owd8okVrmMWt2gc64Uc54MUp18JSysNajwLVzEd7oce84oXvmwCDggb2nwOckEGLxsHPCIFKhh8cQg5AAAAYklEQVR4AeWPxQGAMAwAgbrr/qviDuGLXTWeFH+jrFCFrxwIZZQ/wUFIKRXswKjuMNYBDhPUgw60pX1QABx0SUipWz8ONElWH3hM/mYHa5DB3Qe3H3viEFNKufvk9hOLb9EAgpcFVKd3Wj4AAAAASUVORK5CYII=" />
        <title>Hulu | Stream TV and Movies Live and Online</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Navbar */}
      <Nav />
      {/* Results */}
      <Results results={results} />
    </div>
  )
}
export default Home


export async function getServerSideProps (context) {
  const genre = context.query.genre
  const res = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}}`)
  const results = await res.json()

  return {
    props: {results: results.results}
  }
}