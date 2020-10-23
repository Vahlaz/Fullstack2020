import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import SingleBlog from "./SingleBLog"
import Buttons from "./blogButtons"
import CreateBlog from "./createBlog"

describe("Content rendering", () => {
	test("render content", () => {
		const user = {
			username: "bart",
			id: "ihaok",
			token: "bruh",
		}

		const blogs = [
			{
				title: "React patterns",
				author: "Michael Chan",
				url: "https://reactpatterns.com/",
				likes: 7,
				user: {
					username: "Marge",
					name: "Marge",
					id: "5f7d80066a3a300aa069bbd8",
				},
				id: "5f7d80816a3a300aa069bbd9",
			},
		]
		const component = render(<SingleBlog blog={blogs[0]} user={user} />)
		const div = component.container.querySelector(".togglableContent")

		expect(div).toHaveStyle("display: block")
		expect(div).toHaveTextContent("React patterns")
		expect(div).toHaveTextContent("Michael Chan")
		expect(div).not.toHaveTextContent("https://reactpatterns.com/")
	})

	test("clicking the button shows more information", () => {
		const blogs = [
			{
				title: "React patterns",
				author: "Michael Chan",
				url: "https://reactpatterns.com/",
				likes: 7,
				user: {
					username: "Marge",
					name: "Marge",
					id: "5f7d80066a3a300aa069bbd8",
				},
				id: "5f7d80816a3a300aa069bbd9",
			},
		]
		const user = {
			username: "bart",
			id: "ihaok",
			token: "bruh",
		}

		const component = render(<SingleBlog blog={blogs[0]} user={user} />)
		const div = component.container.querySelector(".togglableContent")
		const bruh = component.container.querySelector(".bruh")
		expect(div).toHaveStyle("display: block")
		expect(bruh).toHaveStyle("display: none")
		expect(div).not.toHaveTextContent("likes:")

		const button = component.getByText("show")
		fireEvent.click(button)

		expect(bruh).toHaveStyle("display: block")
		expect(bruh).toHaveTextContent("https://reactpatterns.com/")
		expect(bruh).toHaveTextContent("likes:")
	})
})

describe("button clicking", () => {
	const blogs = [
		{
			title: "React patterns",
			author: "Michael Chan",
			url: "https://reactpatterns.com/",
			likes: 7,
			user: {
				username: "Marge",
				name: "Marge",
				id: "5f7d80066a3a300aa069bbd8",
			},
			id: "5f7d80816a3a300aa069bbd9",
		},
	]
	const user = {
		username: "bart",
		id: "ihaok",
		token: "bruh",
	}
	test("clicking button calls handler twice", () => {
		const mockHandler = jest.fn()
		const component = render(
			<Buttons.LikeButton blog={blogs[0]} blogs={blogs} bruh={mockHandler} />
		)
		const button = component.getByText("like")

		console.log(mockHandler.mock)
		fireEvent.click(button)
		fireEvent.click(button)
		expect(mockHandler.mock.calls).toHaveLength(2)
	})
})

describe("form submitting", () => {
	test("submitting blog calls handler with correct content", () => {
		const mockHandler = jest.fn()
		const component = render(<CreateBlog test={mockHandler} />)
		const form = component.container.querySelector("form")
		const title = component.container.querySelector("#title")
		fireEvent.change(title, {
			target: { value: "Oootkokattonu" },
		})

		const author = component.container.querySelector("#author")
		fireEvent.change(author, {
			target: { value: "bart simpso" },
		})
		const url = component.container.querySelector("#url")
		fireEvent.change(url, {
			target: { value: "ihaok.net" },
		})
		fireEvent.submit(form)
		console.log(mockHandler.mock.calls[0])
		expect(mockHandler.mock.calls).toHaveLength(1)
		expect(mockHandler.mock.calls[0][0]).toBe("Oootkokattonu")
		expect(mockHandler.mock.calls[0][1]).toBe("bart simpso")
		expect(mockHandler.mock.calls[0][2]).toBe("ihaok.net")
	})
})
