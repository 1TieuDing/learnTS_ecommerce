/* eslint-disable prefer-const */
import BookDetail from "@/components/client/book/book.detail"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

const BookPage = () => {
    let { id } = useParams()

    useEffect(() => {
        if (id) {
            console.log("book id = ", id)
        }
    })

    return (
        <div>
            <BookDetail />
        </div>
    )
}

export default BookPage