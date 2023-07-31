import axios from "axios"
import { useState, useEffect } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

type Quote = {
  text: string
  author: string
  quote?: string
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

      const modifiedQuotes = res.data.slice(randomIndex, randomIndex + 20).map((quote: Quote) => {
        return {
          quote: quote.text,
          author: quote.author.replace(", type.fit", " "),
        }
      })

      setQuotes(modifiedQuotes)
    })
    return () => {
      setQuotes([])
    }
  }, [])

  return (
    <>
      <div className="container w-full h-full mx-auto text-center rounded my-5 p-1 md:w-5/6">
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
                <div
                  key={quote.text + quote.author}
                  className="flex gap-2 text-xl md:text-3xl text-center justify-center items-center p-0 dark:text-primio text-black font-PlayfairDisaply py-0">
                  {quote.quote}
                  <span className="text-xs font-Montserrat italic relative top-2">
                    {quote.author ? quote.author : " "}
                  </span>
                </div>
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
