var generate = $(".submit-btn");
var emptyParagraph = $(".emptyParagraph");





generate.on("click", submitForm);

function submitForm() {
  var userName = $(".name-input").val();

  // var userAge = document.getElementById("age").value;

  var userAge = $('input[name="age"]:checked').val();


  var interestChoice = document.getElementById("interests").value;
  console.log(interestChoice);

  emptyParagraph.append(`<p>Hi, ${userName}, here are you volunteer opportunity reccomendations: </p>`);

  if (userAge === "Under 18") {
    if (interestChoice === "education") {
    emptyParagraph.append("Zooniverse, Upchieve");
    }
    else if (interestChoice === "LGBTQ-rights") {
      emptyParagraph.append("None available at this time");
    }
    else if (interestChoice === "disability") {
      emptyParagraph.append("Be My Eyes, Best Buddies");
    }
    else if(interestChoice==="general"){
      emptyParagraph.append("Amnesty Decoders, Red Cross, Why Hunger");
    }
  }
  else if (userAge === "Above 18") {
    if (interestChoice === "education") {
    emptyParagraph.append(`${organizationEducation}`);
    }
    else if (interestChoice === "LGBTQ-rights") {
      emptyParagraph.append(`${organizationLGBTQ}`);
    }
    else if (interestChoice === "disability") {
      emptyParagraph.append(`${organizationAssistance}`);
    }
    else if(interestChoice==="general") {
      emptyParagraph.append(`${organizationHumanitarian}`)
    }
  }
}
 



// find organizations with the user's interest, skill and age
// function findMatches(ar1, ar2, ar3, n1, n2, n3) {
//   var array1 = 0;
//   var array2 = 0;
//   var array3 = 0;

//   while (array1 < n1 && array2 < n2 && array3 < n3)
//   {
//     if (ar1[i] == ar2[j] && ar2[j] == ar3[k])
//     {
//       emptyParagraph.append(ar1);
//       array1++;
//       array2++;
//       array3++;
//     }
//     else if (ar1[i] < ar2[j]) {
//       array1++;
//     }
//     else if (ar2[j] < ar3[k]) {
//       array2++;
//     }
//     else {
//       array3++;
//     }
// }



// var interests = [
//   "Education",
//   "LGBTQ Rights",
//   "Disability Assistance",
//   "General Humanitarian Help"
// ];

// var skills= [
//   "Communication",
//   "Writing",
//   "Tech Skills",
// ];

var organizationEducation=[
  "Smithsonian Digital Volunteers",
  "Zooniverse",
  "Project Gutenberg",
  "Upchieve",
];

var organizationLGBTQ= [
  "The Trevor Project"
];

 var organizationAssistance= [
  "Be My Eyes",
  "Best Buddies"
 ];

 var organizationHumanitarian= [
   "Amnesty Decoders",
  "Crisis Text Line",
   "Catchafire",
  "Red Cross",
   "United Nations Volunteer",
   "Why Hunger",
 ];
 
// var organizationCommunication = [
//   "Catchafire",
//   "Crisis Text Line",
//   "Zooniverse",
//   "Be My Eyes",
//   "Red Cross",
//   "Best Buddies",
//   "Upchieve",
//   "Why Hunger",
//   "The Trevor Project"
// ];

// var organizationWriting = [
//   "Smithsonian Digitial Volunteers",
//   "Zooniverse",
//   "The Trevor Project",
//   "Why Hunger",
//   "Project Gutenberg"
//   "Catchafire",
//   "United Nations Volunteers",
// ];

// var organizationTech = [
//   "Amnesty Decoders",
//   "Zooniverse"
// ];

var organizationUnderAge = [
  "Amnesty Decoders",
  "Zooniverse",
  "Be My Eyes",
  "Red Cross",
  "Best Buddies",
  "Upchieve",
  "Why Hunger",
];

// var organizationOverAge = [
//    "Amnesty Decoders",
//   "Zooniverse",
//   "Be My Eyes",
//   "Red Cross",
//   "Best Buddies",
//   "Upchieve",
//   "Why Hunger",
//   "United Nations Volunteer",
//   "The Trevor Project",
//   "Catchafire",
//   "Smithsonian Digital Volunteers",
//   "Crisis Text Line",
//   "Project Gutenberg",
// ];



  //var age = getElementById('age');
  // var interestOptions = getToggledValue('interestOptions');
  // var skillOptions = getToggledValue('skillOptions');

  // var ageValue = document.forms[0].ddlViewBy.value;
  // console.log(ageValue);

//   
  
//   }
//   if (interestOptions === "Education" && skillOptions === "Writing") {
    
//   }
//   if (interestOptions === "Education" && skillOptions === "Tech Skills") {
   
//   }
//   if (interestOptions === "LGBTQ" && skillOptions === "Communication") {
    
//   }
//   if (interestOptions === "LGBTQ" && skillOptions === "Writing") {
    
//   }
//   if (interestOptions === "LGBTQ" && skillOptions === "Tech skills") {
    
//   }
//   if (interestOptions === "Disability Asistance" && skillOptions === "Communication") {
    
//   }
//   if (interestOptions === "Disability Asistance" && skillOptions === "Writing") {
   
//   }
//   if (interestOptions === "Disability Asistance" && skillOptions === "Tech Skills") {
    
//   }
//   if (interestOptions === "General Humanitarian Help" && skillOptions === "Communication") {
   
//  }
//   if (interestOptions === "General Humanitarian Help" && skillOptions === "Writing") {
    
//   }
//   if (interestOptions === "General Humanitarian Help" && skillOptions === "Tech Skills") {
   
