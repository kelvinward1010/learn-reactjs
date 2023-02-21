import React, { useEffect, useState } from 'react'


const lessons = [
    {
        id: 1,
        name: 'One'
    },
    {
        id: 2,
        name: 'Two'
    },
    {
        id: 3,
        name: 'Three'
    },
]


function ChatFake() {

    const [lessonID, setLessonId] = useState(1)

    useEffect(() => {

        const hanleComment = ({detail}) => {
            console.log(detail)
        }
        window.addEventListener(`lesson-${lessonID}`, hanleComment)
        return() => {
            window.removeEventListener(`lesson-${lessonID}`, hanleComment)
        }
    },[lessonID])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonID === lesson.id 
                                ? 'red'
                                : 'black'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ChatFake