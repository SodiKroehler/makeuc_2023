"use client"
import styles from './page.module.css'
import Searchbar from './Home/Searchbar'
import Navbar from './Navbar'

export default async function Home() {
  return (
    <main>
      <Navbar />
      <Searchbar />
    </main>
  )
} 