const questions = [
    {
      id: 1,
      question:
        "Question 1: Two members of your tribe are having a dispute over a cow. What do you do?",
      questionType: "pick1",
      answers: 
      [
        {
          id: "A",
          answerText: "Sigh and walk away. It’s their problem, not yours.",
          positiveTribes: ["xinxi", "aimo"],
          negativeTribes: ["cymanti", "bardur", "vengir"]
        },
        {
          id: "B",
          answerText: "Politely ask them what the quarrel is about and see if you can help them sort out their differences.",
          positiveTribes: ["imperius", "aimo"],
          negativeTribes: []
        },
        {
          id: "C",
          answerText: "Move in between them, hold out your arms, and force them to stop.",
          positiveTribes: ["quetzali", "polaris"],
          negativeTribes: []
        },
        {
          id: "D",
          answerText: "Starting taking bets on who is going to win",
          positiveTribes: ["yaddak, luxidoor"],
          negativeTribes: []
    
        },
        {
            id: "E",
            answerText: "Whack them over the head with your club. Who ever stays upright, gets to keep the cow.",
            positiveTribes: [ "cymanti", "bardur", "vengir"],
            negativeTribes: [ "xinxi", "aimo"]
          },
          {
            id: "F",
            answerText: "Ask a bystander what is going on and how the fight started",
            positiveTribes: ["zebasi", "aimo", "hoodrick" , "kickoo"],
            negativeTribes: []
            
          },
          {
            id: "G",
            answerText: "Take the cow when neither of them are looking",
            positiveTribes: ["elyrion", "oumaji", "yadakk"],
            negativeTribes: []
            
          },
          {
            id: "H",
            answerText: "You have never seen a cow before and have no idea what the fuss is about.",
            positiveTribes: ["aquarion", "cymanti"],
            negativeTribes: []
            
          } 
        ] 
    },
    {
        id: 2,
        question: 
        "Question 2: Which do you prefer?",
        questionType: "pick1",
        answers: 
        [
            {
            id: "A",
            answerText: "To be in familiar situations.",
            positiveTribes: ["imperius", "aimo" , "queztali" , "xinxi" , "vengir" , "hoodrick" , "oumaji" , "bardur" , "zebasi" , "luxidoor"],
            negativeTribes: [] },
            {
            id: "B",
            answerText: "New experiences.",
            positiveTribes: ["aquarion", "elyrion" ,"polaris" , "cymanti"],
            negativeTribes: []
            }
                  
        ]
    },
    {
        id: 3,
        question:
          "Question 3: The tribe moon festival is tomorrow and you want to make your family’s favorite recipe to help celebrate. The dish is a big hit and everyone admires how ____ the dish is.",
        questionType: "multiple choice",
        answers: 
        [
          {
            id: "A",
            answerText: "Sweet",
            positiveTribes: ["hoodrick", "luxidoor" ,"imperius", "bardur"],
            negativeTribes: []
            },
          {
            id: "B",
            answerText: "Crunchy",
            positiveTribes: ["imperius, polaris"],
            negativeTribes: []
          },
          {
            id: "C",
            answerText: "Subtle",
            positiveTribes: ["quetzali", "kickoo" ,"elyrion"],
            negativeTribes: ["aimo"]
          },
          {
            id: "D",
            answerText: "Sticky",
            positiveTribes: ["Luxidoor, oumaji"],
            negativeTribes: []
          },
          {
            id: "E",
            answerText: "Tangy",
            positiveTribes: ["yadakk", "xinxi"],
            negativeTribes: ["cymanti"]
          },
          {
            id: "F",
            answerText: "Salty",
            positiveTribes: ["aquarion"],
            negativeTribes: []     
          },
          {
            id: "G",
            answerText: "Pungent",
            positiveTribes: ["cymanti" ,"vengir"],
            negativeTribes: []          
          },
          {
            id: "H",
            answerText: "Spicy",
            tpositiveTribes: ["aimo"] ,
            negativeTribes: []         
          },
          {
            id: "I",
            answerText: "Colorful",
            positiveTribes: ["elyrion" ,"luxidoor"] ,
            negativeTribes: []          
          }
        ],
      },
      {
        id: 4,
        question: 
        "Question 4: You need to travel quickly to a battle zone to strike fast, then dash away. Would you chose to ride...",
        questionType: "multiple choice",
        answers: 
        [
            {
            id: "A",
            answerText: "An animal with horns.",
            positiveTribes: ["hoodrick", "vengir" , "yadakk" , "xinxi" , "elyrion"],
            negativeTribes: []
              },
            {
            id: "B",
            answerText: "An animal with tusks.",
            positiveTribes: ["luxidoor", "polaris"],
            negativeTribes: []
            },
            {
            id: "C",
            answerText: "An animal with hooves.",
            positiveTribes: ["imperius", "elyrion" ,"xinxi" , "oumani", "aimo", "hoodrick", "zebasi"],
            negativeTribes: []
            },
            {
            id: "D",
            answerText: "An animal with paws.",
            positiveTribes: ["bardur", "kickoo"],
            negativeTribes: []
            },
            {
            id: "D",
            answerText: "None of the above.",
            positiveTribes: ["queztali", "aquarion" , "cymanti"],
            negativeTribes: []
            }
        ]
       },
        {
            id: 5,
            question: 
            "Question 5: A hairdresser totally butchers your hair. What do you do?",
            questionType: "pick1",
            answers: 
            [
                {
                id: "A",
                answerText: "Smile and tell them your new haircut is lovely, then go home and cry.",
                positiveTribes: ["xinxi", "oumaji"],
                negativeTribes: []
                  },
                {
                id: "B",
                answerText: "Tell them you don't like it and ask them to fix it, but still pay in the end.",
                positiveTribes: ["zebasi", "kickoo", "elyrion" , "imperius"],
                negativeTribes: []
                },
                {
                id: "C",
                answerText: "Say nothing, pay, then write a nasty review on social media.",
                positiveTribes: ["Polaris", "hoodrick" ,"aquarion"],
                negativeTribes: []
                },
                {
                    id: "D",
                    answerText: "Refuse to pay and go elsewhere to have it fixed.",
                    positiveTribes: ["bardur", "vengir", "quetzali", "cymanti"],
                    negativeTribes: []
                },
                {
                    id: "E",
                    answerText: "Fire them. I own the hair salon.",
                    positiveTribes: ["luxidoor", "yadakk"],
                    negativeTribes: []
                },
                {
                    id: "F",
                    answerText: "What’s a hairdresser? I don’t have any hair.",
                    positiveTribes: ["aimo"],
                    negativeTribes: []
                }
                      
            ]
    },
    {
        id: 6,
        question: 
        "Question 6: You agree to an alliance with a neighbor. You lend your ally some resources. When the payment is due, your ally offers to either pay you back in full, or a bit more next turn. Would you rather...",
        questionType: "pick1",
        answers: 
        [
            {
            id: "A",
            answerText: "have those resources now ",
            positiveTribes: ["imperius", "bardur", "kickoo", "zebasi", "luxidoor", "cymanti"],
            negativeTribes: []
            
            },
            {
            id: "B",
            answerText: "Wait a bit for more resources later",
            positiveTribes: ["xinsi", "aimo", "aquarion" ,"vengir", "oumaji","queztali", "hoodrick", "elyrion", "polaris", "yadakk"],
            negativeTribes: []
            }
                  
        ]
    },
    {
        id: 7,
        question: 
        "Question 7: I am very afraid of ...(check all that apply)",
        questionType: "multiplechoice",
        answers: 
        [
            {
            id: "A",
            answerText: "Heights.",
            positiveTribes: ["hoodrick", "aquarion", "kickoo"],
            negativeTribes: ["xinsi", "aimo", "vengir"]
            
            },
            {
            id: "B",
            answerText: "Open spaces.",
            positiveTribes: ["queztali"],
            negativeTribes: ["oumaji" , "kickoo", "yadakk"]
            
            },
            {
            id: "c",
            answerText: "Bugs.",
            positiveTribes: [],
            negativeTribes: ["cymanti"]
            },
            {
            id: "D",
            answerText: "Chaos.",
            positiveTribes: [],
            negativeTribes: ["imperius" ,"zebasi"]
            },
            {
            id: "E",
            answerText: "Getting lost.",
            positiveTribes: ["elyrion"],
            negativeTribes: ["hoodrick"]
            },
            {
            id: "F",
            answerText: "Being poor.",
            positiveTribes: ["luxidoor"],
            negativeTribes: ["aquarion", "oumaji", "vengir"]
            },
            {
            id: "G",
            answerText: "Drowning.",
            positiveTribes: ["polaris"],
            negativeTribes: ["aquarion", "kickoo"]
            }
                  
        ]
    },
    {
        id: 8,
        question: 
        "Question 8: You need a new outfit for the tribe moon festival. You chose...",
        questionType: "pick1",
        answers: 
        [
            {
            id: "A",
            answerText: "something that blends in with what others are wearing",
            positiveTribes: ["imperius", "aimo" , "queztali" , "xinxi" , "vengir" , "hoodrick" , "oumaji" , "bardur" , "zebasi" , "luxidoor"],
            negativeTribes: []
              },
            {
            id: "B",
            answerText: "clothes that stand out",
            positiveTribes: ["aquarion", "elyrion" ,"polaris" , "cymanti"],
            negativeTribes: []
            }
                  
        ]
    },
    {
        id: 9,
        question: 
        "Question 9: In which climate do you feel most comfortable? A place that is...",
        questionType: "pick1",
        answers: 
        [
            {
            id: "A",
            answerText: "warm and dry",
            positiveTribes: ["oumaji" , "zebasi"],
            negativeTribes: []
              },
            {
            id: "B",
            answerText: "warm and wet",
            positiveTribes: ["kickoo", "queztali" ,"luxidoor"],
            negativeTribes: []
            },
            {
            id: "C",
            answerText: "mild and temperate",
            positiveTribes: ["imperius", "hoodrick", "elyrion" ,"cymanti"],
            negativeTribes: []
            },
            {
            id: "D",
            answerText: "cold and dry",
            positiveTribes: ["xinxi", "aimo" ,"yadakk", "polaris" ,"vengir"],
            negativeTribes: []
            },
            {
            id: "E",
            answerText: "cold and wet",
            positiveTribes: ["bardur", "aquarion" ],
            negativeTribes: []
            }
                  
        ]
    },
    {
        id: 10,
        question: 
        "Question 10: You suspect one of your neighbors is stealing fruit from your garden. What do you do?",
        questionType: "pick1",
        answers: 
        [
            {
            id: "A",
            answerText: "Get rid of the garden all together and avoid eye contact with your neighbor.",
            positiveTribes: ["xinxi"],
            negativeTribes: []
              },
            {
            id: "B",
            answerText: "Put a sign out in front of the garden that says, 'Not Your Fruit,' to drop them a hint.",
            positiveTribes: ["hoodrick", "polaris"],
            negativeTribes: []
            },
            {
            id: "C",
            answerText: "Let it go. Life's too short.",
            positiveTribes: ["elyrion", "aimo"],
            negativeTribes: []
            },
            {
            id: "D",
            answerText: "Build a high wall around the garden with locked gate.",
            positiveTribes: ["luxidoor" ,"quetzali"],
            negativeTribes: []
            },
            {
            id: "E",
            answerText: "Pound on your neighbor’s door, demand they leave your garden alone or you’ll smash their windows.",
            positiveTribes: ["bardur", "vengir" , "cymanti" ],
            negativeTribes: []
            },
            {
            id: "F",
            answerText: "The next time you see your neighbor, talk to them about the missing fruit. Tell the neighbor you have plenty. All they have to do is ask if they want something from your garden.",
            positiveTribes: ["zebasi", "kickoo" , "imperius" ],
            negativeTribes: []
        },
      ],
    },
  ];
  
  export default questions;
