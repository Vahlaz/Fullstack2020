import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import SingleBlog from './SingleBLog'


test('render content', () => {
    const user = {
        username: 'bart',
        id: 'ihaok',
        token: 'bruh'

    }

    const blogs = [
        { "title": "React patterns", "author": "Michael Chan", "url": "https://reactpatterns.com/", "likes": 7, "user": { "username": "Marge", "name": "Marge", "id": "5f7d80066a3a300aa069bbd8" }, "id": "5f7d80816a3a300aa069bbd9" }
    ]
    const component = render(
        <SingleBlog blog={blogs[0]} user={user} />
    )
    const div = component.container.querySelector('.togglable')
    console.log()
    expect(div).toHaveStyle('display: none')
    expect(div).toHaveTextContent(
        'React patterns'
    )
    expect(component.container).toHaveTextContent(
        'Michael Chan'
    )
    expect(component.container).toHaveTextContent(
        'https://reactpatterns.com/'
    )
})

test('clicking the button shows more information', () => {
    const blogs = [
        { "title": "React patterns", "author": "Michael Chan", "url": "https://reactpatterns.com/", "likes": 7, "user": { "username": "Marge", "name": "Marge", "id": "5f7d80066a3a300aa069bbd8" }, "id": "5f7d80816a3a300aa069bbd9" }
    ]
    const user = {
        username: 'bart',
        id: 'ihaok',
        token: 'bruh'

    }

    const mockHandler = jest.fn()

    const component = render(
        <SingleBlog blog={blogs[0]} user={user} />
    )
    const button = component.getByText('show')
    fireEvent.click(button)

    expect(component.container).toHaveTextContent(
        'https://reactpatterns.com/'
    )
})
