import pic1 from '../imgs/customer1.jpg'
import pic2 from '../imgs/customer2.png'

const CaseStudies:Array<{
    thumbnail: string,
    title: string,
    services: string,
    text: string,
    url:string
}>  = [
    {
        thumbnail: pic1,
        title: 'Fire Barbeque',
        url:'firebbq',
        services:'Copywriting, UI/UX design',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    },
    {
        thumbnail: pic2,
        title: 'Fitness First',
        url:'fitnessfirst',
        services:'Content Creation, SEO, Brand Development',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    }
]



export default CaseStudies