import React, {useState} from 'react'

type Props = {
    questions:{
        question:string,
        answer:string
    }[]
}

type AccordianCardProps = {
    question:string,
    answer:string
}

const AccordianCard:React.FC<AccordianCardProps> = ({question,answer}) => {

    const [accordionSwitch, setAccordianSwitch] = useState(false)

    const onAccordianChange = () => {
        setAccordianSwitch(!accordionSwitch)
    }

    return(
        <div className="faq-card">
            <div className="faq-ques" onClick = {onAccordianChange}>
                <h2>
                    {question}
                </h2>
            </div>
            <div className={`faq-ans ${accordionSwitch}`}>
                <p>
                    {answer}
                </p>
            </div>
        </div>
    )
}

const Accordian:React.FC<Props> = ({questions}) => {
    
    return (
        <div className = 'accordian'>
            <div className="page-heading">
                <h1>
                    FAQ
                </h1>
            </div>
            <div className="accordian-card-container">
                {questions.map(card => {
                    return (
                        <AccordianCard question = {card.question} answer = {card.answer} />
                    )
                })}
            </div>
        </div>
    )
}

export default Accordian
