import Link from "next/link";
import classes from './main-header.module.css'
export default function MainHeader() {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>
            <Link href={'/'}>NextEvents</Link>
        </div>
        <nav>
            <ul>
                <li className={classes.navigation}>
                    <Link href={'/events'}>All Events</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
