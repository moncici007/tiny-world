import Projects from '../components/projects';
import Layout from '../components/layout';

const projects = [
  {
      name: "ETH_Daddy",
      preview: "",
      url: ""
  },
  {
      name: "AI_NFT_GENERATOR",
      preview: "",
      url: "https://ai-nft-generator.moncici.xyz/"
  }
]

export default function Home() {

  return (
    <>
      <Layout home='Public'>
        <Projects projects={projects}></Projects>
      </Layout>
    </>
  )
}
