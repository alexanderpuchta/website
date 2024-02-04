import { lusitana } from "@/app/ui/fonts"
import { EmailIcon, GithubIcon, InstagramIcon, LinkedInIcon } from "@/app/ui/icons"
import { fetchLinks } from '@/app/lib/data';
import Link from "next/link"

export async function Contact() {

    const links = await fetchLinks()
  
    return (
        <div className="flex flex-col gap-2">
            <strong className={`${lusitana.className} text-xl`}>Contact information</strong>
            {
                links.map((contact) => (
                    <Link
                        key={contact.id}
                        href={contact.href}
                    >
                        <div className="flex flex-row gap-2">
                            {
                                contact.type === "EMAIL" ? <EmailIcon/> :
                                    contact.type === "GITHUB" ? <GithubIcon/> :
                                        contact.type === "INSTAGRAM" ? <InstagramIcon/> :
                                            contact.type === "LINKEDIN" ? <LinkedInIcon/> :
                                                <EmailIcon/>
                            }
                            <p className={`${lusitana.className}`}>
                                {
                                    contact.text
                                }    
                            </p>
                        </div>
                    </Link>
                ))
            }
        </div>
    ) 
}