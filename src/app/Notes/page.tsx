import Image from 'next/image'
import styles from './page.module.css'
import Notes from './../components/Notes'


export default async function MainNotesPage() {
  return (
    <main>
      <Notes />
    </main>
  )
}
