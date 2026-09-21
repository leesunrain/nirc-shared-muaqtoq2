import './style.css';
export const metadata={
  title:'NIRC Run Pulse',
  description:'NIRC LT1 LT2 & Race HR',
  manifest:'/manifest.webmanifest',
  applicationName:'NIRC Run Pulse',
  appleWebApp:{capable:true,title:'NIRC Run Pulse',statusBarStyle:'default'},
  icons:{icon:[{url:'/icon-192.png',sizes:'192x192',type:'image/png'},{url:'/icon-512.png',sizes:'512x512',type:'image/png'}],apple:'/icon-192.png'}
};
export default function RootLayout({children}){return <html lang="ko"><body>{children}</body></html>}
