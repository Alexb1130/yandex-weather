import { ReactNode } from 'react';
interface Props {
    icon: ReactNode;
    title: string;
}

export const WeatherFact = ({ icon, title }: Props) => (
    <span className='flex-inline'>
        {icon}
        <span className='ml-8'>{title}</span>
    </span>
)