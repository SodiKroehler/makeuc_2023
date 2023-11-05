"use client"
import styles from './page.module.css'
import Searchbar from './Home/Searchbar'
import ReactDOM from 'react-dom';
import NewNote from './NewNote';
import Navbar from './Navbar';

export default async function Home() {
  return (
    <main>
      <Navbar />
      <Searchbar />
      <NewNote />
    </main>
  )
} 