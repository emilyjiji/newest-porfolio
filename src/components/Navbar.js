import { Fragment, React } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import './Navbar.css';

// const navigation = [
//     { name: 'Dashboard', href: '#', current: true },
//     { name: 'Projects', href: '#', current: false },
//     { name: 'Contact', href: '#', current: false },
//   ];

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

export default function Navbar() {
    return (
      <nav className="nav">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className='title'>Home</div> 
      <div className='menu'>Menu</div>
    </nav>
    );
}