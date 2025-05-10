import { useState } from "react";
import { useEffect } from "react";
import Quiz from "./Quiz";
import QuizMenu from "./QuizMenu";
import "./App.css";

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizType, setQuizType] = useState("");  // Store the quiz type (math, geography)

  const quizzes = {
    Mood: [
     	 { question: "Cum ai descrie ziua ta de până acum?", answers: [" Productivă și activă", "Stresantă și aglomerată", " Relaxată și echilibrată", "Obositoare sau lipsită de chef"] },
    	 { question: "Cum ai vrea să te simți după ce mănânci un desert?", answers: ["Să-mi mențin energia", " Să mă răsfăț, am nevoie de ceva special", "Ceva ușor, reconfortant", "Să-mi schimb complet starea"] },
     	 { question: "Care din următoarele momente ți se pare cel mai atrăgător?", answers: ["O pauză scurtă cu o cafea tare și ceva intens", "O după-amiază liniștită cu un desert ușor și aromat", "Un mic moment de răsfăț cu ceva decadent și ciocolatos", " Un snack dulce și natural, fără regrete"] },
    ],
    Evenimente: [
    	 { question: "Ce tip de eveniment este?", answers: ["Petrecere pentru copii", "Nuntă / botez / aniversare formală", "Eveniment corporate sau profesional", "Întâlnire casual cu prietenii"] },
     	 { question: "Ce atmosferă vrei să creezi?", answers: ["Jucăușă, colorată, cu energie", "Elegantă și sofisticată", "Calmă, organizată, fără excese", "Relaxată și prietenoasă, cu opțiuni pentru toți"] },
     	 { question: "Ce așteptări ai de la deserturi?", answers: ["Să fie distractive, accesibile și ușor de mâncat", "Să arate bine și să aibă gusturi rafinate", "Să fie simple, dar cu ingrediente de calitate", "Să acopere diverse gusturi și diete"] },
	 	 { question: "Cum ați dori să arate desertul?", answers: ["Distractiv și colorat", "Elegant, cu plating de revistă", "Nu contează, cât timp e bun", "Să arate bine, dar să fie și accesibil"] },
    ],
	Restrictii: [
		{ question: "Ce tip de restricție alimentară ai?", answers: ["Diabet", "Intoleranță la lactoză", "Evit glutenul", "Stil de viață sănătos, fără restricții stricte"] },
		{ question: "Ce îți dorești de la un desert?", answers: ["Să fie cât mai natural, fără îndulcitori artificiali", "Să aibă gust autentic, chiar dacă e light", "Să aibă ingrediente simple, ușor de înțeles", "Să fie echilibrat – nici prea dulce, nici prea sec"] },
		{ question: "Cât de des consumi deserturi?", answers: ["Zilnic – dar în cantități mici", "Doar ocazional, la evenimente", "Când simt că am nevoie de energie", "Le evit de obicei, dar uneori mă răsfăț"] },
		{ question: "Ce ingrediente ești obișnuit(ă) să eviți sau reduci?", answers: ["Zahăr procesat", "Lactate clasice", "Făină albă", "Nu evit nimic în mod special, dar apreciez alternativele mai sănătoase"] },
		{ question: "Ce rol vrei să aibă desertul în ziua ta?", answers: ["Un răsfăț rapid, dar atent la ingrediente", "Un desert de ocazie, care să impresioneze", "O gustare care să-mi dea energie și să mă țină sătul(ă)", "O alternativă sănătoasă la pofta de dulce"] },
	  ],
	Sarbatori: [
		{ question: "Ce sărbătoare se apropie?", answers: ["Crăciun", "Paște", "Halloween", "1 Iunie / 1 Martie / Valentine's Day"] },
		{ question: "Cum arată vibe-ul ideal pentru tine de sărbători?", answers: ["Cald, familial, cozy", "Festiv, cu muzică și multă lume", "Jucăuș, tematic", "Relaxat, cu oameni dragi și mâncare bună"] },
		{ question: "Cât de tradițional(ă) ești când vine vorba de dulciuri de sărbători?", answers: ["Îmi plac reinterpretările moderne ale clasicelor", "Prefer rețetele de familie, fără experimente", "Încerc mereu ceva nou, n-am superstiții", "Vreau doar să fie bun și să nu stau 3 ore în bucătărie"] },
		{ question: "Care e rolul desertului în sărbătorile tale?", answers: ["Element de decor și deliciu – trebuie să impresioneze", "Răsfăț după masă – ceva memorabil", "Gustare distractivă – pentru copii, prieteni", "Desert simplu, dar de calitate – fără complicații"] },
	],
	Zodii: [
		{ question: "Ce sărbătoare se apropie?", answers: ["♈ Berbec", "♉ Taur", "♊ Gemeni", "♋ Rac","♌ Leu", "♍ Fecioară", "♎ Balanță", "♏ Scorpion", "♐ Săgetător", "♑ Capricorn", "♒ Vărsător", "♓ Pești"] },
	],
  };
  	
  // Function to reset the quiz and return to the menu
  const resetQuiz = () => {
    setSelectedQuiz(null); // Reset selected quiz to show the QuizMenu again
    setQuizType(""); // Reset the quiz type
  };

  useEffect(() => {
  setTimeout(() => {
    window.scrollTo(0, 1); // Triggers a repaint on some mobile browsers
    window.scrollTo(0, 0);
  }, 100);
}, []);

  return (
    <div className="container">
      {!selectedQuiz ? (
        <QuizMenu
          onSelectQuiz={(quizName) => {
            setQuizType(quizName);  // Set the quiz type (math, geography)
            setSelectedQuiz(quizzes[quizName]);  // Set the selected quiz questions
          }}
        />
      ) : (
        <Quiz questions={selectedQuiz} quizType={quizType} onRestart={resetQuiz} />
      )}
    </div>
  );
}

export default App;
