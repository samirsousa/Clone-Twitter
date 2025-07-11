import { Sidebar } from "../Sidebar";
import { TwitterForm } from "../TwitterForm"; 
import { Tweet } from "../Tweet";
import {v4} from "uuid";
import { getAvatar } from "./utils/generateImages";
import { getRandomImage } from "./utils/generateImages";
import { useState, useEffect, useLayoutEffect } from "react";
import { faFirstAid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { TrendItem } from "../TrendItem";
import { FollowItem } from "../FollowItem";

function App() {
  const [tweets, setTweets] = useState([]);

   useEffect(() => {
    const interval = setInterval(() => {
     addNewRandomTweets()
    }, 5000)
    return () => clearInterval(interval)
  }, [])
  

  const addNewRandomTweets = () => {
     const RandomTweets = [
      'Acabei de ver um tweet incrível!',
      'O que vocês acham dessa nova atualização do Twitter?',
      'Alguém mais está animado para o próximo jogo?',
      'Estou pensando em mudar meu avatar, sugestões?',
      'A música que estou ouvindo agora é perfeita para relaxar.',
      'Alguém tem dicas de como melhorar meu perfil?',
      'Estou planejando uma viagem, sugestões de destinos?',
      'O que vocês acham do novo recurso de comunidades?',
      'Estou tentando ser mais ativo aqui, dicas?',
      'A série que estou assistindo é tão boa, alguém mais viu?',
      'Estou pensando em começar um podcast, alguém interessado?',
      'A nova atualização do Twitter é incrível, o que vocês acham?',
      'Estou tentando ser mais positivo, alguém tem dicas?',
      'Estou pensando em fazer uma live, alguém interessado?',
      'A música que estou ouvindo agora é perfeita para trabalhar.',
      'Estou tentando ser mais produtivo, alguém tem dicas?',
      'Estou pensando em começar a escrever um blog, alguém interessado?',
      'A série que estou assistindo é tão boa, alguém mais viu?',
     ]
     const randomTweet = RandomTweets[Math.floor(Math.random() * RandomTweets.length)]

     addNewTweet(randomTweet, Math.random() > 0.7)
  }


  const addNewTweet = (content, includeImage = false) => {
  const newTweet = {
    id: v4(),
    name: "User",
    username: `user${Math.floor(Math.random() * 1000)}`,
    avatar: getAvatar(`user${Math.floor(Math.random() * 1000)}@email.com`),
    content,
    time: new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    }),
    image : includeImage ? getRandomImage() : null,
    likes: 0,
    retweets: 0,
    comments: 0,
  }
setTweets( (prevTweets) => [newTweet,...prevTweets] )


  }

  return (
    <div className="flex mx-auto max-w-7xl">
      <Sidebar />
      <main className="flex-grow border-l border-r border-gray-700 max-w-xl">
        <header className="sticky top-0 z-10 bg-twitter-background bg-opacity-80 backdrop-blur-sm">
          <h2 className="px-4 py-3 text-xl font-bold">For You</h2>
        </header>
        <TwitterForm onTweet={(content) => addNewTweet(content, Math.random() > 0.6)}/>
        <div>
          {tweets.map(tweet =>(
           <Tweet key={tweet.id} tweet={tweet}/>
          ))}
        </div>
      </main>
      <aside className='hidden xl:block w-80 px-4'>
        <div className='sticky top-0 pt-2'> 
          <div className='relative'>
            <FontAwesomeIcon icon={faSearch} className='absolute top-3 left-3 text-gray-500'/>
            <input placeholder='Search Twitter' className='w-full bg-gray-800 text-white rounded-full outline-none py-2 pl-10 pr-4'/>
          </div>

         <div className='bg-gray-800 rounded-xl mt-4 p-4'>
          <h2 className='font-bold text-xl mb-4'>Subscribe to Premium</h2>
          <p className='text-gray-500 mb-4'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
          <button className='bg-twitter-blue text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200'>Subscribe</button>
         </div>
         <div className='bg-gray-800 rounded-xl mt-4 p-4'>
          <h2 className='font-bold text-xl mb-4'>Whats happening</h2>
          <TrendItem category="NFL - LIVE" name="Cardinals at Bills"/>
          <TrendItem category="Sports - Trending" name="Kyle Dugger"/>
          <TrendItem category="Sports - Trending" name="Anthony Richardson" tweetCount="12,916"/>
          <TrendItem category="Sports - Trending" name="Bryce Young" tweetCount="5,622" />
          <TrendItem category="Sports - Trending" name="Daboll" tweetCount="1,340" />
         </div>
         <div className='bg-gray-800 rounded-xl mt-4 p-4'>
          <h2 className='font-bold text-xl mb-4'>Who to follow</h2>
          <FollowItem name="Bill Gates" username="BillGates" />
          <FollowItem name="Will Smith" username="WillS" />
          <FollowItem name="Neymar Jr" username="NeymarJr" />
         </div>
        </div>
      </aside>
    </div>
  )
}
export default App;