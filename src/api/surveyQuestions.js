var surveyQuestions = [
  {
      // Question 1 - project
      question: "For which project are you collecting samples?",
      answers: [
          {
              content: "ASG",
              next: 2
          },
          {
              content: "DToL or other project",
              next: 12
          }
      ]
  },
  {
      // Question 2 - Country
      question: "Is the sample being collected from outside the UK?",
      answers: [
          {
              content: "Yes, from outside the UK",
              action: "Nagoya & general import licence for animal products",
              next: 3
          },
          {
              content: "No, from inside the UK",
              next: 3
          }
      ]
  },
  {
      // Question 3
      question: "Is the sample a Scleractinian coral –listed on Appendix II of CITES (samples are CITES exempt and do not need a CITES permit)",
      answers: [
          {
              content: "Yes",
              next: 5
          },
          {
              content: "No",
              next: 4
          }
      ]
  },
  {
      // Question 4
      question: "Is the species listed under any other CITES appendix?",
      answers: [
          {
              content: "Yes",
              action: "Direct user to type of permit required here",
              next: 5
          },
          {
              content: "No",
              next: 5
          }
      ]
  },
  {
      // Question 5
      question: "Have the samples already been obtained( have permit)/ cultivated or from a private collection",
      answers: [
          {
              content: "Yes",
              action: "labelling scheme should apply –direct  the collector to label scheme",
              next: 6
          },
          {
              content: "No",
              next: 6
          }
      ]
  },
  {
      // Question 6
      question: "Have the samples been obtained from the wild",
      answers: [
          {
              content: "Yes",
              action: "individual CITES permits required as labelling scheme does not apply",
              next: 7
          },
          {
              content: "No",
              next: 7
          }
      ]
  },
  {
      // Question 7
      question: "Is the sample alive or dead?",
      answers: [
          {
              content: "Alive",
              action: "check with CITES re alive /dead conditions, conditions may differ per country",
              next: 8
          },
          {
              content: "Dead",
              action: "check with CITES re alive /dead conditions, conditions may differ per country",
              next: 8
          }
      ]
  },
  {
      // Question 8
      question: "Has Sanger paid you for the sample?",
      answers: [
          {
              content: "Yes",
              action: "the samples will require wildlife trade regulation checks Yes/No (???)",
              next: 9
          },
          {
              content: "No",
              next: 9
          }
      ]
  },
  {
      // Question 9
      question: "Do you have a CITES export permit",
      answers: [
          {
              content: "Yes",
              next: 10
          },
          {
              content: "No",
              action: "You will need a CITES export permit prior to an import licence being obtained by Sanger and samples being shipped",
              next: 10
          }
      ]
  },
  {
      // Question 10
      question: "Is the species locally or internationally protected?",
      answers: [
          {
              content: "Yes",
              action: "Please check websites XXXX, YYYY, ZZZZ",
              next: 11
          },
          {
              content: "No",
              next: 11
          }
      ]
  },
  {
      // Question 11
      question: "Has the sample been collected from a marine protected area or heritage site or private land?",
      answers: [
          {
              content: "Yes",
              action: "You need to obtain the necessary permission permits",
              next: 999999
          },
          {
              content: "No",
              next: 999999
          }
      ]
  },
  {
      // Question 12 - First part of DToL/faculty section
      question: "Where does the sample come from?",
      answers: [
          {
              content: "UK",
              next: 14
          },
          {
              content: "Europe",
              next: 13
          },
          {
              content: "Overseas",
              next: 13
          }
      ]
  },
  {
      // Question 13
      question: "Is this sample protected under CITES, (please note it also covers some species protected under EU regs) or the EU regulation?",
      answers: [
          {
              content: "Yes",
              action: "Please obtain relevant CITES permit",
              next: 15
          },
          {
              content: "No",
              next: 15
          }
      ]
  },
  {
      // Question 14
      question: "Is the sample located in England, Ireland, Scotland or Wales?",
      answers: [
          {
              content: "England",
              next: 15
          },
          {
              content: "Ireland",
              next: 15
          },
          {
              content: "Scotland",
              next: 15
          },
          {
              content: "Wales",
              next: 15
          }
      ]
  },
  {
      // Question 15
      question: "Is the sample a wild bird species?",
      answers: [
          {
              content: "Yes",
              action: "Wild bird legislation",
              next: 18
          },
          {
              content: "No",
              next: 16
          }
      ]
  },
  {
      // Question 16
      question: "Is the sample a plant species?",
      answers: [
          {
              content: "Yes",
              action: "Plants do not need a posession licence",
              next: 18
          },
          {
              content: "No",
              next: 17
          }
      ]
  },
  {
      // Question 17
      question: "Is it an animal sample that has been collected from the wild?",
      answers: [
          {
              content: "Yes",
              action: "Most possession licences refer to those collected from the wild – both Sanger and party will need permits",
              next: 18
          },
          {
              content: "No",
              next: 18
          }
      ]
  },
  {
      // Question 18
      question: "Is the species protected under EU, UK or country legislation?",
      answers: [
          {
              content: "Yes",
              action: "you need to obtain relevant permit if don’t know need to seek advice from authority/sanger",
              next: 20
          },
          {
              content: "No",
              next: 20
          },
          {
              content: "Don't know",
              next: 19
          }
      ]
  },
  {
      // Question 19
      question: "Is the sample an animal, bird, tree or marine species?",
      answers: [
          {
              content: "Yes",
              action: "direct to relevant legislation",
              next: 20
          },
          {
              content: "No",
              next: 20
          }
      ]
  },
  {
      // Question 20
      question: "Has the sample been collected from a protected site such as a Marine Protected Area or Site of Special Scientific Interest (SSSI) or Heritage Site Area, can you provide details, have you obtained collection permission?",
      answers: [
          {
              content: "Yes",
              action: "Obtain relevant permits for collecting from a protected site",
              next: 21
          },
          {
              content: "No",
              next: 21
          }
      ]
  },
  {
      // Question 21
      question: "Has the sample been collected from a private land? Private landowners include National Trust, RSPB etc.",
      answers: [
          {
              content: "Yes",
              action: "Obtain relevant permits for collecting from private land",
              next: 22
          },
          {
              content: "No",
              next: 22
          }
      ]
  },
  {
      // Question 22
      question: "Is the sample alive or dead",
      answers: [
          {
              content: "Alive",
              action: "Check with health inspectorate for pathogens especially for shellfish for advice and permits",
              next: 23
          },
          {
              content: "Dead",
              next: 999999
          }
      ]
  },
  {
      // Question 23
      question: "Was the species one that you require a licence for trapping/ killing?",
      answers: [
          {
              content: "Yes",
              action: "Permit for trapping/killing details",
              next: 24
          },
          {
              content: "No",
              next: 24
          }
      ]
  },
  {
      // Question 24
      question: "Does it carry pathogens or an invasive species?",
      answers: [
          {
              content: "Yes",
              action: "Check you have pathogen/invasive species permission from relevant authorities",
              next: 25
          },
          {
              content: "No",
              next: 25
          }
      ]
  },
  {
      // Question 25
      question: "Have you obtained the sample from a live vertebrate?",
      answers: [
          {
              content: "Yes",
              action: "Need to check ASPA requirements",
              next: 999999
          },
          {
              content: "No",
              next: 999999
          }
      ]
  }
];

export default surveyQuestions;
