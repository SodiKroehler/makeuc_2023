import Image from 'next/image'
import styles from './page.module.css'
import HomePage from './components/HomePage'


export default async function Home() {
  return (
    <main>
      <HomePage />
    </main>
  )
}
