import { useEffect } from "react"

const RandomQuotes = () => {

    const quotes = ["The purpose of our lives is to be happy.", "The purpose of our lives is to be happy.", "Get busy living or get busy dying.", "You only live once, but if you do it right, once is enough.",  "Many of life’s failures are people who did not realize how close they were to success when they gave up."]

    const randomIndex = Math.floor(Math.random() * quotes.length)

   
        const quote = quotes[randomIndex] 
   

    

  return (
    <div><button >Generate quote</button><br/>
        {quote}</div>
  )
}

export default RandomQuotes