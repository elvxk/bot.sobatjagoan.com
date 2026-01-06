import { Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const navbar = (
  <Navbar
    logo={
      <>
        <img src='https://cdn.elvxk.web.id/sjbot/botsobat.jpg' height={40} width={40} className='rounded-md' />
        <div className='flex flex-col justify-center ms-4 items-start'>
          <span style={{ fontWeight: 800 }}>
            SOBAT JAGOAN
          </span>
          <span className='-mt-1 text-sm'>
            Discord Bot
          </span>
        </div>
      </>
    }
  />

)

export default async function Layoutku({ children }) {
  return (
    <Layout
      darkMode={false}
      sidebar={{
        toggleButton: false,
        autoCollapse: false,
        defaultMenuCollapseLevel: 999,
      }}
      navbar={navbar}
      pageMap={await getPageMap()}
      docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
      editLink={null}
      feedback={{ content: null }}
      copyPageButton={false}
    >
      {children}
    </Layout >
  )
}
