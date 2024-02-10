import * as React from 'react';

import { cn } from '@/app/lib/utils';
import { lusitana } from '@/app/ui/fonts';

export interface InputProbs extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProbs> (
    ({
        className,
        type,
        ...props
    },
    ref
    ) => {
        return (
            <input
                type={type}
                className={cn(
                    'rounded-lg text-sm border-gray-200 focus:border-gray-400 focus:ring-gray-400',
                    `${lusitana.className}`,
                    className
                )}
                ref={ref}
                {
                    ...props
                }
            />
        )
    }
)
Input.displayName = 'Input'

export { Input }