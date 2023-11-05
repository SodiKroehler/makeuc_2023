import styles from './page.module.css'
import Searchbar from './Home/Searchbar'
import ReactDOM from 'react-dom';
import Navbar from './../components/Navbar'

export default async function Home() {
  return (
    <main>
      <Navbar />
      <Searchbar />
    </main>
  )
} 