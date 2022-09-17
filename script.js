 /* 
TODO implement a function that clears all the content
prior to generate new content
*/

function clearAll(){

    //this codes are there to clear the screen so that other selections take place
    
      const memeContainer = document.querySelector(".meme-content");
      const jokeContainer = document.querySelector(".joke-content");
      const quoteContainer = document.querySelector(".quote-content");
      const riddleContainer = document.querySelector(".riddle-content");
      
      memeContainer.innerHTML ="";
      jokeContainer.innerHTML ="";
      quoteContainer.innerHTML ="";
      riddleContainer.innerHTML ="";
      
    }
    
    /*TODO
    show a random meme in the correct location
    never show more than 1 meme at a time
    */
    function showMeme(){
      // value is an string representing an image URL
      const randomMemeUrl = getRandomData('memes');
      const container = document.querySelector(".memes-content");
      //creating a new image element tag
      const newImg = document.createElement("img");
      newImg.setAttribute("src", randomMemeUrl);
      const isImg = container.querySelector("img")
      
       // this if statement is to help replace the image than mk place for new selection
       
       clearAll()
       container.appendChild(newImg);
      
    }
    
    /* TODO
    show a random joke in the correct location
    never show more than 1  joke at a time
    */
    
    function showJoke(){
      //value is the string representing the jokes
      const randomJokesText = getRandomData('jokes');
      const newP = document.createElement("p");
      newP.textContent = randomJokesText;
      clearAll();
      document.querySelector(".joke-content").appendChid(newP);
    }
    
    /* TODO
    show a random quote in the correct location
    never show more than 1  quote at a time
    */
    
    function showQuote(){
    const randomQuote = getRandomData("quotes");
     const quote = document.createElement("p");
     const author = document.createElement("p";)
     quote.textContent = randomQuote.quote;
     author.TextContent = randomQuote.author;
     clearAll();
     const container = document.querySelector(".quote-content")
     container.appendChild(quote);
     container.appendChild(author);
      
    }
    
    /* TODO
    show a random idle in the correct location
    never show more than 1 idle at a time
    */
    
    function showRiddle(){
    const randomRiddle = getRandomData("riddles");
     const {question, answer} = randomRiddle;
      
     const questionElem = document.createElement("p");
     questionElem.textContent=question;
     
      
     const answerElem = document.createElement("p");
     answerElem.textContent=answer;
     answerElem.setAttribute("id", "riddle-answer");
     answerElem.hidden= true;
      
     const container = document.querySelector(".riddle-content");
     container.appendChild(questionElem);
      
     clearAll();
     container.appendchild(questionElem);
     container.appendChild(answerElem);  
      
    }
    
    /* TODO
    show the answer it can only display the answer once...
    */
    
    function revealAnswer(){
    const riddleContainer = document.querySelector(".riddle-content");
     const riddle = riddleContainer.querySelector("p");
     const answer = document.querySelector("#riddle-answer");
     if(riddle && answer.hidden){
       answer.hidden=false;
     } else if(riddle){
       alert("The answer is already revealed!");
     }else{
       alert("There is no riddle to reveal the answer to!")
     }
      
    }
    
      
    }
    
    
    
     //on internet sorry didnt copy the URL     
          
    const memes= ["https://i.pinimg.com/originals/12/e8/cc/12e8cceb9e7ea2f2eddf8a885d26e5ac.jpg", 
                 "https://i.pinimg.com/originals/78/10/59/78105984e2548a2dccca0042e6b32b17.jpg", 
                 "https://tse2.mm.bing.net/th?id=OIP.Xmc-PhIiNTdWlpNLe_hEaQHaHa&pid=Api&P=0",
                 "https://tse2.mm.bing.net/th?id=OIP.n6fCFoW_QJLbUG7en877fAHaEc&pid=Api&P=0",
                 "https://tse1.mm.bing.net/th?id=OIP.qjAtjphIJeqceIppV0rsNAHaJK&pid=Api&P=0",
                 "https://tse1.mm.bing.net/th?id=OIP.jiAZHd20oyg5FwdrTezvVwHaFh&pid=Api&P=0", 
                 "https://tse2.mm.bing.net/th?id=OIP.95V62taouCggp-qKcegOzQHaFz&pid=Api&P=0", 
                 "https://tse2.mm.bing.net/th?id=OIP.nsr6ipNrycKdjkOCEU7CIwHaFj&pid=Api&P=0", 
                 "https://tse3.mm.bing.net/th?id=OIP.QvcyGkIPn8zs3Gg1IHnVdgHaJH&pid=Api&P=0", 
                 "https://tse2.mm.bing.net/th?id=OIP.ec7tE9dXWi5u-dzmI9EFDgHaF7&pid=Api&P=0", 
                 "https://tse1.mm.bing.net/th?id=OIP.2oEyfrlcWjAKrrHEWKu38AHaEK&pid=Api&P=0", 
                 "https://tse3.mm.bing.net/th?id=OIP.-x1Rp-67M71x6ohi7jlhIAHaIx&pid=Api&P=0", 
                 "https://tse3.mm.bing.net/th?id=OIP.7hw1a_NNPVeyeE7mkX4kgQHaGK&pid=Api&P=0", 
                 "https://tse3.mm.bing.net/th?id=OIP.6bLNMMscMO23eUbBsXiIoQAAAA&pid=Api&P=0", 
                 "https://3.bp.blogspot.com/-0BB0AMeVetQ/Wc-XvHyngrI…6L3DUahwxFL4OsQNiD27BfzNhGebNwCLcBGAs/s1600/5.jpg", 
                 "https://tse1.mm.bing.net/th?id=OIP.FTdPbtwHwrZ3UrMHgcINVAHaEK&pid=Api&P=0", 
                 "https://tse1.mm.bing.net/th?id=OIP.JueWISur0ay6lfLHrFywVwHaD4&pid=Api&P=0", 
                 "https://3.bp.blogspot.com/-0BB0AMeVetQ/Wc-XvHyngrI/AAAAAAAB_E4/dFL6L3DUahwxFL4OsQNiD27BfzNhGebNwCLcBGAs/s1600/5.jpg"];
    
    
    // on internet sorry didnt copy the URL
    
    const jokes =["I just read in the news that tons of Americans are sending their old clothes to poor people in Africa, Seems like a waste of time in my opinion, I have never seen an African with a 52 inch waist.", 
                "As a billionaire I tried enter a club for billionaires, but was refused the entrance. Is it because I'm a black billionaire?!, asked I furiously.No,it's because you're a Zimbabwean billionaire", 
                "So a teacher asks his class the question...What's your opinion on donating food to foreign countries? The African student says, What's food? The Indian student says, What's donating? The American student says, What's foreign countries? And the Chinese student says, What's my opinion?", 
                "As a hardworking American I'm proud to finally say I'm a millionaire Unfortunately, nobody in the states is accepting payment with Zimbabwean dollars. ", "Why do Congolese wear only new clothes?There are no second hands.", 
                "An Iranian, Iraqi, Libyan, Somalian, Sudanese, Syrian and a Yemenite walk into a bar in america.Just kidding, they can't.", 
                "What is Ugandan Knuckles' favourite food? Do you know da milky way?", 
                "A woman has twins, and gives them up for adoption. One of them goes to a family in Egypt and is named Amal The other goes to a family in Spain, they name him Juan Years later; Juan sends a picture of himself to his mum. Upon receiving the picture, she tells her husband that she wished she also had a picture of Amal. Her husband responds, But they are twins. If you've seen Juan, you've seen Amal", "Egyptian alcoholics are the hardest to talk to...They are always in denial.", "What do you call an African who plays 10 pin bowling online? Ebola.", 
                "Yesterday while I was talking with my girlfriend about Ebola, I asked her what she would do if I had Ebola...Ebola what, Cheerios?"];
     
     //https://www.goalcast.com/quotes-from-favorite-authors/
     
     const quotes=[{author:"HARPER LEE",
                   quote:"You never really understand a person until you consider things from his point of view. Until you climb inside of his skin and walk around in it."
                },
                   {author:"ERNEST HEMINGWAY ", 
                   quote:"There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self."
                },
                   {author:"JOHN KEATS ", 
                   quote:"I was never afraid of failure; for I would sooner fail than not be among the greatest."
                },
                   {author:"HENRY DAVID THOREAU", 
                   quote:"If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them."
                },
                   {author:"OSCAR WILDE", 
                   quote:"It is what you read when you don’t have to that determines what you will be when you can’t help it."
                },
                   {author:"F. SCOTT FITZGERALD", 
                   quote:"Tomorrow we will run faster, stretch out our arms farther..."
                },
                   {author:"DALE CARNEGIE", 
                   quote:"Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all."
                }, 
                   {author:"JANE AUSTEN",
                   quote:"There is a stubbornness about me that never can bear to be frightened at the will of others. My courage always rises at every attempt to intimidate me."
                },
                   {author:"MAYA ANGELOU", 
                   quote:"If you’re always trying to be normal you will never know how amazing you can be."
                },
                   {author:"J. K. ROWLING", quote:"It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all – in which case, you fail by default."
                }
            ];
    
    // https://www.rd.com/list/challenging-rddles/
    
    const riddles =[{answer:"An echo.",
                    question:"I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I? "
                },
                    {answer:"A giraffe.", 
                    question:"The height of my legs—usually around 6 feet—is taller than most humans. What animal am I?"
                },
                    {answer:"An elephant.", 
                    question:"I’m an animal you might love, but I’m too big to be your pet. I have an extremely long trunk, and it’s said I never forget. What am I?"
                },
                    {answer:"A candle",
                    question:"You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy."
                },
                    {answer:"A map" , 
                    question:"I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? "
                },
                    {answer:"The letter 'R'", 
                    question:"What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?"
                },
                    {answer:"A football", 
                    question:"The annual tradition each and every Thanksgiving Day is watching the great team sport the Lions and Cowboys play. What is it?"
                },
                    {answer:"Your nose!", 
                    question:"What smells the best every Thanksgiving dinner?"
                }, 
                   {answer:"All the people were married." ,
                    question:"You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?"
                },
                   {answer:"Heroine", 
                   question:"What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word? "
                }
            ];
    
    
    function rn(len){
      return Math.floor(Math.random()*len);
      
    }
      