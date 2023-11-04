"use client"
import styles from './page.module.css'
import Searchbar from './Home/Searchbar'
import Navbar from './Navbar'
import ReactDOM from 'react-dom';
import NewNote from './NewNote';

export default async function Home() {
  return (
    <main>
      <Navbar />
      <Searchbar />
      <NewNote />
    </main>
  )
} 