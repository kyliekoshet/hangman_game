import { useState, useEffect } from 'react'
import './App.css'
import HangmanScene from './HangmanScene'
import { Container, Row, Col, Card, Button, Form, Alert, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [language, setLanguage] = useState('english')
  const [word, setWord] = useState('')
  const [mistakes, setMistakes] = useState(0)
  const [gameStatus, setGameStatus] = useState('playing')
  const [guessedLetters, setGuessedLetters] = useState(new Set())
  const [showModal, setShowModal] = useState(false)

  const [scores, setScores] = useState(() => {
    const savedScores = localStorage.getItem('hangmanScores')
    return savedScores ? JSON.parse(savedScores) : { wins: 0, losses: 0 }
  })

  const getScores = () => {
    const savedScores = localStorage.getItem('hangmanScores')
    return savedScores ? JSON.parse(savedScores) : { wins: 0, losses: 0 }
  }


  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')

  async function fetchNewWord(language) {
    try {
        let response;
        let validWord = false;
        let wordArray;

        // Keep trying until we get a valid word
        while (!validWord) {
            try {
                if (language === "spanish") {
                    response = await fetch('https://random-word-api.herokuapp.com/word?lang=es');
                } else {
                    response = await fetch('https://random-word-api.herokuapp.com/word');
                }

                wordArray = await response.json();

                if (wordArray && wordArray.length > 0) {
                    const word = wordArray[0];
                    if (/^[a-zA-Z]+$/.test(word)) {
                        validWord = true;
                        return word.toUpperCase();
                    }
                }
            } catch (apiError) {
                console.warn("API fetch failed, attempting backup word bank.");
                break; // Exit loop and use backup words
            }
        }
    } catch (error) {
        console.error('Unexpected error fetching word:', error);
    }
    
    alert('Error fetching word. Only English words are available.');
    const backupWords = ["hangman", "error", "fetching", "word", "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon", "mango", "nectarine", "orange", "pear", "quince", "raspberry", "strawberry", "tangerine", "watermelon"];
    return backupWords[Math.floor(Math.random() * backupWords.length)].toUpperCase();
}

  const startNewGame = async () => {
    const newWord = await fetchNewWord(language)
    if (newWord) {
      setWord(newWord)
      setMistakes(0)
      setGameStatus('playing')
      setGuessedLetters(new Set())
    }
  }

  useEffect(() => {
    startNewGame()
  }, [language])

  const handleGuess = (letter) => {
    if (gameStatus !== 'playing') return;

    const newGuessedLetters = new Set([...guessedLetters, letter]);
    setGuessedLetters(newGuessedLetters);

    if (!word.includes(letter)) {
      const newMistakes = mistakes + 1;
      setMistakes(newMistakes);

      if (newMistakes >= 8) {
        setGameStatus('lost');
        updateScore('losses');
      }
    } else {
      const isWin = word.split('').every(letter => newGuessedLetters.has(letter));
      if (isWin) {
        setGameStatus('won');
        updateScore('wins');
      }
    }
  };

  const updateScore = (result) => {
    const scores = getScores()
    const newScores = {
      wins: result === 'wins' ? scores.wins + 1 : scores.wins,
      losses: result === 'losses' ? scores.losses + 1 : scores.losses
    }
    localStorage.setItem('hangmanScores', JSON.stringify(newScores))
    setScores(newScores)
  }

  const isGameOver = gameStatus !== 'playing'
  const hasWon = gameStatus === 'won'

  return (
    <Container fluid className="p-4 body-container">
      <Row className="title-row">
        <Col>
          <h1 className='hangman-title'>Hangman</h1>
        </Col>
        <Col className="title-col-extras">
          <div className="language-select-container">
            <h2>Language:</h2>
            <Form.Select onChange={(e) => {
              setLanguage(e.target.value);
              document.getElementById('livesLostCount').innerText = e.target.value === 'spanish' ? `Vidas Restantes: ${8 - mistakes}` : `Lives Left: ${8 - mistakes}`;
              document.getElementById('winsCount').innerText = e.target.value === 'spanish' ? `Victorias: ${scores.wins}` : `Wins: ${scores.wins}`;
              document.getElementById('lossesCount').innerText = e.target.value === 'spanish' ? `Derrotas: ${scores.losses}` : `Losses: ${scores.losses}`;
            }}>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
            </Form.Select>
          </div>
          <Button className="new-game-btn" onClick={startNewGame} id='newGameButton'>New Game</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 id='livesLostCount'>{language === 'spanish' ? `Vidas Restantes: ${8 - mistakes}` : `Lives Left: ${8 - mistakes}`}</h2>
        </Col>
        <Col>
          <h2 id='winsCount'>{language === 'spanish' ? `Victorias: ${scores.wins}` : `Wins: ${scores.wins}`}</h2>
        </Col>
        <Col>
          <h2 id='lossesCount'>{language === 'spanish' ? `Derrotas: ${scores.losses}` : `Losses: ${scores.losses}`}</h2>
        </Col>
      </Row>
      <Row className="game-row">
        <Col>
          <HangmanScene mistakes={mistakes} />
        </Col>
        <Col>
          <Container fluid className="letter-container">
            {alphabet.map(letter => (
              <Button
                key={letter}
                variant="outline-primary"
                className="letter-btn"
                disabled={guessedLetters.has(letter) || gameStatus !== 'playing'}
                onClick={() => handleGuess(letter)}
              >
                {letter}
              </Button>
            ))}
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="word-display">
            {word.split('').map((letter, index) => (
              <span key={index} className={`word-letter ${guessedLetters.has(letter) ? 'revealed' : ''}`}>
                {guessedLetters.has(letter) ? letter : ' '}
              </span>
            ))}
          </div>
        </Col>
      </Row>
      {isGameOver && (
        <Modal show={true} centered>
          <Modal.Header>
            <Modal.Title>{hasWon ? (language === 'spanish' ? "¡Ganaste! 🎉" : "You Won! 🎉") : (language === 'spanish' ? "¡Perdiste! 😔" : "You Lost! 😔")}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {hasWon 
              ? (language === 'spanish' ? "¡Felicidades! ¡Has adivinado la palabra correctamente!" : "Congratulations! You've guessed the word correctly!") 
              : (language === 'spanish' ? "¡Perdiste! Tu palabra era: " + word : "You Lost! Your word was: " + word)}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={startNewGame}>
              {language === 'spanish' ? "Jugar de nuevo" : "Play Again"}
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  )
}

export default App


