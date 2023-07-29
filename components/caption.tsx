import axios from "axios"
import { useState, useEffect } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

type Quote = {
  text: string
  author: string
}

export default function Caption() {
  const [quotes, setQuotes] = useState<Quote[]>([])

  useEffect(() => {
    async function getQuote() {
      return await axios.get("https://type.fit/api/quotes")
    }

    getQuote().then((res) => {
      let randomIndex, responseLength
      responseLength = res.data.length
      randomIndex = Math.floor(Math.random() * responseLength)

      setQuotes(res.data.slice(randomIndex, randomIndex + 20))
    })
    return () => {
      setQuotes([])
    }
  }, [])

  return (
    <>
      <div className="container w-full h-full my-2 mx-auto text-center rounded p-5 md:w-5/6">
        {quotes.length > 0 && (
          <Carousel
            className="w-full h-full p-0"
            autoPlay={true}
            infiniteLoop
            interval={8000}
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}>
            {quotes.map((quote: Quote) => {
              return (
                <span
                  className="text-3xl p-0 dark:text-primio text-black font-PlayfairDisaply py-0 flex gap-2"
                  key={quote.text}>
                  <>
                    {quote.text}
                    <span className="text-sm font-Montserrat italic">{quote.author}</span>
                  </>
                </span>
              )
            })}
          </Carousel>
        )}
        {!quotes.length && (
          <div role="status" className="animate-pulse container px-5 mx-auto">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-1 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          </div>
        )}
      </div>
    </>
  )
}
