'use client';
import Link from 'next/link';
import { CalendarIcon, CloseIcon, MenuIcon } from './icons';
import './header.css';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
const links = [['Home','/'],['Portfolio','/portfolio'],['Services','/services'],['Academy','/academy'],['About','/about'],['Contact','/contact']];
export default function Header() {
  const [open,setOpen] = useState(false); const [scrolled,setScrolled] = useState(false); const pathname=usePathname(); const toggle=useRef<HTMLButtonElement>(null);
  useEffect(()=>{const fn=()=>setScrolled(window.scrollY>20); fn(); window.addEventListener('scroll',fn,{passive:true}); return ()=>window.removeEventListener('scroll',fn);},[]);
  useEffect(()=>{ if(!open)return; const fn=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);toggle.current?.focus();}}; document.addEventListener('keydown',fn); return ()=>document.removeEventListener('keydown',fn);},[open]);
  return <header className={`header ${scrolled?'scrolled':''}`}><div className="header-inner"><Link className="wordmark" href="/" onClick={()=>setOpen(false)} aria-label="Makeup by Harshi home"><span className="brand-prefix">MAKEUP BY</span><span className="brand-name">Harshi<span className="brand-dot">.</span></span></Link><button ref={toggle} className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="main-navigation" onClick={()=>setOpen(!open)}>{open ? <CloseIcon /> : <MenuIcon />}</button><nav id="main-navigation" aria-label="Main navigation" className={open?'nav open':'nav'}>{links.map(([name,path])=><Link key={path} href={path} aria-current={pathname===path?'page':undefined} onClick={()=>setOpen(false)}>{name}</Link>)}<Link className="header-book" href="/contact" onClick={()=>setOpen(false)}><CalendarIcon /><span>Check availability</span></Link></nav></div></header>;
}
