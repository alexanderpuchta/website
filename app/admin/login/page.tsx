import { lusitana } from '@/app/ui/fonts';
import { Input } from '@/app/ui/text-input';
import { Button } from '@/app/ui/button';

export default function Page() {
    return (
        <div className='flex flex-col items-center p-6'>
            <div className='flex flex-col w-1/3'>
                <div className='flex flex-col gap-6'>
                    <span className={lusitana.className}>
                        Login
                    </span>

                    <div className='flex flex-col gap-4'>
                            <Input/>
                            <Input/>
                    </div>

                    <Button
                        className={lusitana.className}
                    >
                        Jetzt einloggen
                    </Button>

                    <Button
                        size="sm"
                        className={lusitana.className}
                    >
                        Jetzt einloggen
                    </Button>

                    <Button
                        size="lg"
                        className={lusitana.className}
                    >
                        Jetzt einloggen
                    </Button>

                    <Button
                        size="icon"
                        className={lusitana.className}
                    >
                    </Button>

                    <Button
                        variant="destructive"
                        className={lusitana.className}
                    >
                        Jetzt einloggen
                    </Button>

                    <Button
                        variant="outline"
                        className={lusitana.className}
                    >
                        Jetzt einloggen
                    </Button>

                    <Button
                        variant="secondary"
                        className={lusitana.className}
                    >
                        Jetzt einloggen
                    </Button>

                    <Button
                        variant="link"
                        className={lusitana.className}
                    >
                        Jetzt einloggen
                    </Button>
                </div>
            </div>
        </div>
    )
}