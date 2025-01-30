import { useState , useEffect } from "react"

function Technology() {
   const [News, setNews] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
      const FetchNews = async () => {
        const API_KEY5=import.meta.env.VITE_API_KEY
        const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=technology&country=in&lang=en&apikey=${API_KEY5}`)
        if (!response.ok) {
          alert("Error")
        }
        const data = await response.json()
        setNews(data)
        setLoading(false)
      }
      FetchNews()
    }, [])
  return (
    <>
     {Loading ? (
        <div className="flex justify-center items-center text-center h-screen w-screen">
          <h1 className="text-red-950 font-bold text-2xl">Loading ...</h1>
        </div>
      ) : (

        <div className=" m-2 absolute top-15">
          {News.articles.map((n, index) => (
            <div className="shadow-md drop-shadow-2xl bg-slate-100 mb-4 rounded border-red-950 p-2" key={index}>
              <h2 className="text-red-950 text-lg font-bold">{n.title}</h2>
              <img src={n.image} />
              <p className="text-lg font-light">{n.content}</p>
              <p>Published on:-{new Date(n.publishedAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>

      )}
    </>
  )
}

export default Technology
