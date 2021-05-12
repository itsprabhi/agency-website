import React from 'react'

function FAQ() {

    const questions = [
        {
            question:'',
            answer:''
        },
        {
            question:'',
            answer:''
        },
        {
            question:'',
            answer:''
        }
    ]
    return (
        <div className = 'faq'>
            <div className = 'faq-txt'>
                <h1>
                    FAQ
                </h1>
            </div>
            {questions.map(question => {
                return (
                    <div className = 'faq-cards'>
                        <h4>
                            {question.question}
                        </h4>
                        <div className = 'faq-card-txt'>
                            <p>
                                {question.answer}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FAQ
