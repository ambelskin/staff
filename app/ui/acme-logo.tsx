import Image from "next/image";
import { lusitana } from '@/app/ui/fonts';

export default function AmbelLogo() {
  return(
    <div>
      <Image 
      src="/logo.jpg" 
      alt="Logo" 
      width={360} 
      height={144} />
    </div>
  )
}
   
