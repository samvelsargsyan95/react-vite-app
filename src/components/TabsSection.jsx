import Button from './Button/Button'

export default function TabsSection({ active, onClick }) {
    return (
        <section className='mb-2'>
            <Button 
                isActive={active === 'main'} 
                className='me-2'
                onClick={() => onClick('main')} 
            >Main</Button>

            <Button 
                isActive={active === 'feedback'} 
                onClick={() => onClick('feedback')}
            >FeedBack</Button>
        </section>
    )
}