import { ImageResponse } from 'next/og';
export const alt='Makeup by Harshi — Bridal & Occasion Makeup, Ahmedabad';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function OpenGraph(){return new ImageResponse(<div style={{width:'100%',height:'100%',background:'#f8f5f0',color:'#342a27',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',border:'24px solid #e9dfd2'}}><div style={{fontSize:22,letterSpacing:8}}>MAKEUP BY</div><div style={{fontSize:130,fontFamily:'serif',margin:'20px 0'}}>Harshi.</div><div style={{fontSize:25}}>BRIDAL & OCCASION MAKEUP · AHMEDABAD</div></div>,size)}
