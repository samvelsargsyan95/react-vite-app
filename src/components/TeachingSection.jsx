import WayToTeach from "./WayToTeach"
import { ways } from '../data'

export default function TeachingSection() {
    return (
        <section className="mb-35">
            <h3 className="mb-2">Our approach to learning</h3>
        
            <ul>
                { ways.map((way, index) => <WayToTeach key={index} { ...way } />) }
                {/* { ways.map((way) => <WayToTeach title={ way.title } description={ way.description } />) } */}
            </ul>
        </section>   
    )
}