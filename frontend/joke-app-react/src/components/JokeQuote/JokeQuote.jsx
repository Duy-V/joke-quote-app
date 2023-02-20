import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import JokeQuoteStyle from "./JokeQuoteStyle.css";
import ButtonStyle from "../Button/ButtonStyle.css";
import Button from "../Button/Button";
import { useCookies } from "react-cookie";
import Modal from "../Modal/Modal";
// import Button from "./Button.jsx";

const URL = "http://localhost:3000/jokeQuote";

function JokeQuote() {
  const [cookies, setCookie, removeCookie] = useCookies(["votedQuotes"]);
  const [quotes, setQuotes] = useState([]);
  const [votedQuotes, setVotedQuotes] = useState(cookies?.votedQuotes || []);
  const [randomQuote, setRandomQuote] = useState(null);
  const [openModal, setOpenModal] = useState(null);
  //fetch data from db.json
  const fetchQuotes = async () => {
    const res = await axios.get(URL);
    if (cookies?.votedQuotes) {
      let ids = cookies.votedQuotes.map((quote) => quote.id);
      const newQuotes = res.data.filter((item) => !ids.includes(item.id));
      setQuotes(newQuotes);
    } else {
      setQuotes(res.data);
    }
  };
  // function handle get random one quote
  function getRandomQuote(param) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * param.length);
    // get random item
    const result = param[randomIndex];
    return result;
  }
function handleVotedQuote () {
  if (cookies?.votedQuotes?.length === 4) {
    setOpenModal("modal");
    return;
  }
  if (!randomQuote) return;
  setVotedQuotes([...votedQuotes, randomQuote]);

}
  // function handling voting of joke quote
  function handleLikeQuote() {
    handleVotedQuote()
    setQuotes((prev) => prev.filter((item) => item.id !== randomQuote.id));
    randomQuote.liked = true
    setRandomQuote(null);
  }
  function handleDislikeQuote() {
    handleVotedQuote()
    setQuotes((prev) => prev.filter((item) => item.id !== randomQuote.id));
    randomQuote.disliked = true
    setRandomQuote(null);
  }

  function handleRemoveCookie() {
    removeCookie("votedQuotes");
    window.location.reload();
  }

  // call api get data when we refresh page
  useEffect(() => {
    fetchQuotes();
  }, []);

  useEffect(() => {
    if (quotes.length >= 1 && randomQuote === null) {
      const randomQuote = getRandomQuote(quotes);
      setRandomQuote(randomQuote);
    }
  }, [quotes, randomQuote]);

  useEffect(() => {
    setCookie("votedQuotes", votedQuotes);
    console.log(votedQuotes)
  }, [votedQuotes]);

  return (
    <div className="joke">
      <p>{randomQuote?.content}</p>
      <hr className="line-1"></hr>
      {cookies?.votedQuotes?.length ===4 ? (<Modal onClick={handleRemoveCookie} modal={openModal}/>): ( <div>
        <Button handleLikeQuote={handleLikeQuote} handleDislikeQuote={handleDislikeQuote} />
      </div>)}
    </div>
  );
}

export default JokeQuote;
