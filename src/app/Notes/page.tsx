import Image from 'next/image'
import styles from './page.module.css'
import Notes from './../components/Notes'
import Navbar from '../components/Navbar'

export default async function MainNotesPage() {
  return (
    <main>
      <Navbar />
      <Notes />
    </main>
  )
}
