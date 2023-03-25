import './App.css';
import Header  from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer'
import data from './data'

export default function App() {
  const cards = data.map(card => {
    return (
      <Card 
        key={card.id}
        {...card}
      />
    )
  })
  return (
    <div className="main-container">
      <Header />
      <div className="content">
        {cards}
      </div>
      <Footer />
    </div>
  )
}
