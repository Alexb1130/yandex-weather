import Image from 'next/image';

interface Props {
    iconName: string;
    title: string;
    alt?: string;
}

export const WeatherFact = ({ iconName, title, alt = '' }: Props) => (
    <span className='flex-inline'>
        <Image width={24} height={24} src={`/svg/${iconName}.svg`} alt={alt} />
        <span className='ml-8'>{title}</span>
    </span>
)