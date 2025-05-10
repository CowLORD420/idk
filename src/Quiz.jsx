import { useState } from "react";

import Buttons from "./Buttons";
import TortCiocoZmeura from './assets/Tort Ciocolata Amara si Zmeura.jpg';
import TortCireseVanilie from './assets/Tort Iaurt cu Cirese si Vanilie.jpg';
import CupcakeCafea from './assets/Cupcake Cafea Intensa.jpg';
import MiniAfineLamaie from './assets/Mini Prajitura cu Afine si Lamaie.jpg';
import MiniCheesecake from './assets/Mini Cheescake cu Fructe de Padure.jpg';
import CupcakeFructe from './assets/Cupcake cu Fructe de Padure.jpg';
import CupcakeCioco from './assets/Cupcake Ciocolata Neagra.jpg';
import CupcakeCitrice from './assets/Cupcake Citrice Fine.jpg';
import MiniTartaMere from './assets/Mini Tarta cu Mere.jpg';
import MiniBranzaVanilie from './assets/Mini Prajitura cu Branza si Vanilie.jpg';
import MiniNegresa from './assets/Mini Negresa cu Nuci.jpg';
import MiniMorcovi from './assets/Mini Prajitura cu Scortisoara si Morcovi.jpg';
import MiniArahide from './assets/Mini Batoane cu Unt de Arahide.jpg';
import CupcakeBanane from './assets/Cupcake Banane si Seminte.png';
import CupcakeCocos from './assets/Cupcake cu Cocos si Caise.jpg';
import CupcakeMar from './assets/Cupcake Mar si Scortisoara.jpg';
import TortMorcovNuca from './assets/Tort Morcov Nuca si Crema de Branza.jpg';
import TortFructe from './assets/Tort Fructat cu Vanilie.jpg';


function Quiz({ questions, quizType, onRestart }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showingQuestion, setShowingQuestion] = useState(true); // fade-in or fade-out
  const [showResult, setShowResult] = useState(false);  
  const [answerCounts, setAnswerCounts] = useState(new Array(questions[0].answers.length).fill(0));

  const handleButtonClick = (choiceIndex) => {
    // Start fade-out
    setShowingQuestion(false);

    setTimeout(() => {
      // Update answer counts
      setAnswerCounts((prev) => {
        const updated = [...prev];
        updated[choiceIndex]++;
        return updated;
      });

      // Move to next or show results
      if (currentQuestion + 1 >= questions.length) {
        setShowResult(true);
      } else {
        setCurrentQuestion((prev) => prev + 1);
        setShowingQuestion(true); // Trigger fade-in of next question
      }
    }, 500); // Match fade-out duration
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswerCounts(new Array(questions[0].answers.length).fill(0));
    setShowResult(false);
    setShowingQuestion(true);
    onRestart();
  };

  if (showResult) {
    const max = Math.max(...answerCounts);
    const mostChosenIndex = answerCounts.indexOf(max);

    let resultMessage = "";
    let resultImage = null;

    if (quizType === "Mood") {
      if (mostChosenIndex === 0) {
        resultMessage = "Cupcake Cafea Intensă";
        resultImage = CupcakeCafea;
      } else if (mostChosenIndex === 1) {
        resultMessage = "Tort Ciocolată Amară și Zmeură";
        resultImage = TortCiocoZmeura;
      } else if (mostChosenIndex === 2) {
        resultMessage = "Mini Cheesecake cu Fructe de Pădure";
        resultImage = MiniCheesecake;
      } else {
        resultMessage = "Cupcake Măr și Scorțișoară";
        resultImage = CupcakeMar;
      }
    } else if (quizType === "Evenimente") {
        if (mostChosenIndex === 0) {
            resultMessage = "Cupcake Banane și Semințe + Mini Prăjitură cu Afine";
            resultImage = [CupcakeBanane, MiniAfineLamaie]
          } else if (mostChosenIndex === 1) {
            resultMessage = "Tort Fructe și Vanilie + Mini Cheesecake cu Fructe de Pădure";
            resultImage = [TortFructe, MiniCheesecake];
          } else if (mostChosenIndex === 2) {
            resultMessage = "Cupcake Cafea Intensă + Mini Tartă cu Mere";
            resultImage = [CupcakeCafea, MiniTartaMere];
          } else {
            resultMessage = "Mini Negresă cu Nuci + Cupcake Măr și Scorțișoară";
            resultImage = [MiniNegresa, CupcakeMar];
        }
    } else if (quizType === "Sarbatori") {
      if (mostChosenIndex === 0) {
          resultMessage = "Tort Fructe și Vanilie";
          resultImage = TortFructe;
        } else if (mostChosenIndex === 1) {
          resultMessage = "Tort Morcov, Nucă și Cremă de Brânză";
          resultImage = TortMorcovNuca;
        } else if (mostChosenIndex === 2) {
          resultMessage = "Cupcake Cocos & Caise + Mini Prăjitură cu Afine și Lămâie";
          resultImage = [CupcakeCocos, MiniAfineLamaie];
        } else {
          resultMessage = "Mini Negresă cu Nuci + Mini Tartă cu Mere și Scorțișoară";
          resultImage = [MiniNegresa, MiniTartaMere];
      } 
      
    } else if (quizType === "Zodii") {
      if (mostChosenIndex === 0) {
          resultMessage = "Cupcake Cafea Intensă - Energic, direct, mereu pe fugă. Ai nevoie de ceva intens, cu cofeină și personalitate.";
          resultImage = CupcakeCafea;
        } else if (mostChosenIndex === 1) {
          resultMessage = " Tort Fructe și Vanilie - Iubești confortul, eleganța și un desert care se respectă. Gust delicat, dar cu substanță.";
          resultImage = TortFructe;
        } else if (mostChosenIndex === 2) {
          resultMessage = "Mini Prăjitură cu Afine și Lămâie - Jucăuș, fresh, cu o notă surprinzătoare – exact ca tine. O combinație care nu plictisește.";
          resultImage = MiniAfineLamaie; 
        }  else if (mostChosenIndex === 3) {
          resultMessage = "Cupcake Măr și Scorțișoară - Nostalgic, cald, cozy. Ca o îmbrățișare comestibilă. Clar desertul de duminică seara.";
          resultImage = CupcakeMar;
        } else if (mostChosenIndex === 4) {
          resultMessage = "Tort Ciocolată Amară și Zmeură - Dramă, spectacol și ciocolată intensă. Vrei desert care impresionează? Ai primit.";
          resultImage = TortCiocoZmeura; 
        }  else if (mostChosenIndex === 5) {
          resultMessage = " Mini Cheesecake cu Fructe de Pădure - Echilibru, rafinament și atenție la detalii. Nimic prea dulce, dar totul perfect calculat.";
          resultImage = MiniCheesecake;
        } else if (mostChosenIndex === 6) {
          resultMessage = " Cupcake Cocos & Caise - Estetică, armonie și gust exotic, dar blând. Fără haos, fără compromisuri.";
          resultImage = CupcakeCocos; 
        }  else if (mostChosenIndex === 7) {
          resultMessage = "Mini Negresă cu Cacao și Nuci - Intens, profund și cu un twist. Desert misterios, nu pentru oricine.";
          resultImage = MiniNegresa;
        } else if (mostChosenIndex === 8) {
          resultMessage = "Mini Batoane cu Unt de Arahide - Portabil, energic, puțin rebel. Gust care merge bine în orice aventură.";
          resultImage = MiniArahide; 
        } else if (mostChosenIndex === 9) {
          resultMessage = "Mini Prăjitură cu Morcov și Nucă - Serios, clasic, eficient. Gust consistent, fără floricele inutile.";
          resultImage = MiniMorcovi;
        } else if (mostChosenIndex ===  10) {
          resultMessage = "Cupcake Banane și Semințe - Nonconformist, sănătos-ish, cu textură interesantă. Gândești altfel, mănânci la fel.";
          resultImage = CupcakeBanane; 
        } else {
          resultMessage = "Mini Prăjitură cu Brânză și Vanilie - Visător, moale, dulce subtil. Desert care nu strigă, dar lasă urme.";
          resultImage = MiniBranzaVanilie;
      } 
      
    } else if (quizType === "Restrictii") {
      if (mostChosenIndex === 0) {
        resultMessage = "Cupcake Cocos & Caise sau Tort Ciocolată Amară și Zmeură (cu lapte vegetal)";
        resultImage = [CupcakeCocos, TortCiocoZmeura];
      } else if (mostChosenIndex === 1) {
        resultMessage = "Tort Iaurt, Cireșe și Vanilie sau Mini Tartă cu Mere și Scorțișoară";
        resultImage = [TortCireseVanilie, MiniTartaMere];
      } else if (mostChosenIndex === 2) {
        resultMessage = "Tort Iaurt, Cireșe și Vanilie sau Mini Tartă cu Mere și Scorțișoară";
        resultImage = [TortCireseVanilie, MiniTartaMere]; 
      }  else if (mostChosenIndex === 3) {
        resultMessage = " Mini Batoane cu Unt de Arahide sau Cupcake Banane și Semințe";
        resultImage = [MiniArahide, CupcakeBanane];
      }
    }
    

    return (
      <div className="result">
        <h1 className="question">MatchASweet vă recomandă:</h1>
        <h2 className="rezultat">{resultMessage}</h2>
        <div className="result-images">
          {Array.isArray(resultImage) ? (
            resultImage.map((imgSrc, idx) => (
              <img key={idx} src={imgSrc} alt={`Result ${idx + 1}`} className="result-image" />
            ))
          ) : (
            <img src={resultImage} alt="Quiz Result" className="result-image" />
          )}
        </div>
        <button onClick={resetQuiz}>Reia quiz-ul sau alege altu!</button>
      </div>
    );
  }

  return (
    <>
      <div className={`question-container ${showingQuestion ? "fade-in" : "fade-out"}`}>
        <h1 className="question">{questions[currentQuestion].question}</h1>
      </div>
      <div className={`buttons ${showingQuestion ? "fade-in" : "fade-out"}`} key={currentQuestion}>
        {questions[currentQuestion].answers.map((answer, index) => (
          <Buttons key={index} choice={answer} onClick={() => handleButtonClick(index)} />
        ))}
      </div>
    </>
  );
}

export default Quiz;
