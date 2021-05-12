import jim from '../imgs/jim.jpg'
import jane from '../imgs/jane.jpg'
import mike from '../imgs/mike.jpg'
import harvey from '../imgs/harvey.jpg'
import jessica from '../imgs/jessica.jpg'
import pam from '../imgs/pam.jpg'


const Team:Array<{
    name: string,
    credential: string,
    img: string,
}>  = [
    {
        name: 'Jane Doe',
        credential:'CEO',
        img:jane
    },
    {
        name: 'Mike Spector',
        credential:'CTO',
        img:mike
    },
    {
        name: 'Jessica Litt',
        credential:'Account Manager',
        img:jessica
    },
    {
        name: 'Jim Scott',
        credential:'Web Developer',
        img:jim
    },
    {
        name: 'Pam Ross',
        credential:'Branding Expert',
        img:pam
    },
    {
        name: 'Harvey Peralta',
        credential:'UI/UX Designer',
        img:harvey
    }
]

export default Team