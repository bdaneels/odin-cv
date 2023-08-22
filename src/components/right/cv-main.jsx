import WorkExperience from './experience'
import '/src/App.css'

export default function CVPage ({profDescription}){
    return(
        <div className='pt-56 w-full h-full'>
            <h2 className='text-center underline underline-offset-4 mb-6'>Function</h2>
            <div className='flex flex-col items-center'>
                <span> {profDescription ? profDescription : 'Professional Description'}</span>

            </div>
        <WorkExperience></WorkExperience>    
        </div>
    )
}