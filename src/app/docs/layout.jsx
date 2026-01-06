import 'nextra-theme-docs/style.css'
import Layoutku from '@/components/Layoutku'

export default async function RootLayout({ children }) {
  return (
    <Layoutku>
      {children}
    </Layoutku>
  )
}

