/*List of all handles to <div> tags in the HTML page*/
var homepage = document.querySelector(".homePage");
var add_question = document.querySelector(".addQuestion");
var remove_question = document.querySelector(".removeQuestion");
var view_list = document.querySelector(".viewList");

/*List of all the event listeners */
document.addEventListener("DOMContentLoaded",landing_page);
homepage.addEventListener("click", landing_page);
add_question.addEventListener("click", add_questions);
remove_question.addEventListener("click", delete_questions);
view_list.addEventListener("click", display_questions);

/*Q7: Persistent Storage: Code to store the list of questions in localstorage of browser
      Right now, we start with an empty array. 
      For this question, you are supposed to edit the code to fetch the saved list of questions and populate list_array.
*/
let list_array =  []; // internal array of all questions in list

/*End of Q7 */

/*
Class template for accepting a new question with title, description etc.
*/
class ListItem {
    constructor(questionTitle, questionDescription, questionCategory, questionComplexity){
        this.questionTitle = questionTitle.value;
        this.questionDescription = questionDescription.value;
        this.questionCategory = questionCategory.value;
        this.questionComplexity = questionComplexity.value;
    }
}

/*
Landing Page
Hide all the unnecessary <div> of the SPA Application.
Display a Welcome Message.
*/
function landing_page(){
    /*Q1: Code to get a handle to all the <div> elements in the HTML page.
      Hide all the unnecessary <div> tags by setting e.g., list.style.display=none.
    */
    var addQuestionForm = document.getElementById("addQuestionForm");
    var list = document.getElementById("list");
    var removeQuestionForm = document.getElementById("removeQuestionForm");
    var homepage_div = document.getElementById("homepage");
    
    










    /* End of Q1 */
    
    /*Q1: Create a new paragraph element using Javascript function. 
    Set the innerHTML of the paragraph to a welcome message. 
    Style it to your satisfaction (e.g., center it using padding left, padding top, center, etc.)
    Append it to the homepage_div*/
    homepage_div.innerHTML = "";
   




    homepage_div.append(heading); //assuming that the new paragraph element you created has the name "heading".
    /* End of Q1 */
}

/* Add Questions
Hide all the unnecessary <div> of the HTML page.
Get inputs from the user, create a ListItem and add it to the list_array.
*/
function add_questions(){
    /*Q1: Code to get a handle to all the <div> elements in the HTML page.
      Hide all the unnecessary <div> tags by setting e.g., list.style.display=none.
    */
    var addQuestionForm = document.getElementById("addQuestionForm");
    var list = document.getElementById("list");
    var homepage_div = document.getElementById("homepage");
    var remove_question = document.getElementById("removeQuestionForm");
    
  










    /* End of Q1 */

    addQuestionForm.style.paddingLeft = "40%";
    addQuestionForm.style.paddingTop = "10%";
    addQuestionForm.style.height = "50%";
    
    /*Q2: Get a handle to addQuestion HTML element and create an event listener
    that calls the target function as add_question_func() below*/
   

    /*End of Q2 */

    // Resets the form fields to empty after adding question to list
    document.getElementById("questionTitle").value = null;
    document.getElementById("questionDescription").value = null;
    document.getElementById("questionCategory").value = null;
    document.getElementById("questionComplexity").value = null;
}

// Adds a new question to list
function add_question_func(){
    /*Get a handle to all the HTML fields on the question add page 
    */
    var questionTitle = document.querySelector(".questionTitle");
    var questionDescription = document.querySelector(".questionDescription");
    var questionCategory = document.querySelector(".questionCategory");
    var questionComplexity = document.querySelector(".questionComplexity");
    
    /*End of Q2 */

    /*Q8: Perform field validation (sanity check) on the HTML page.
          This can be coded later.
    */
   
   
   
    /*End of Q8 */

    /*Q2: Create a new ListItem based on the fields (e.g., questionTitle, questionDescription, etc.)
          Add it to the list_array
    */
   

    /* End of Q2 */

    /*Q7: Write code to save list_array to persistent storage 
          This can be coded later.
    */
    
    /*End of Q7 */
}


/* Delete Questions
Hide all the unnecessary <div> of the HTML page.
Get the ID as an input from the user, search the list_array and delete the item.
*/
function delete_questions(){
    /*Q1: Code to get a handle to all the <div> elements in the HTML page.
      Hide all the unnecessary <div> tags by setting e.g., list.style.display=none.
    */
    var removeQuestionForm = document.getElementById("removeQuestionForm");
    var list = document.getElementById("list");
    var homepage_div = document.getElementById("homepage");
    var add_question = document.getElementById("addQuestionForm");

   









    /* End of Q1 */
    removeQuestionForm.style.paddingLeft = "40%";
    removeQuestionForm.style.paddingTop = "10%";
    removeQuestionForm.style.height = "50%";
    
    /*Q4: Get a handle to removeQuestion HTML element and create an event listener
    that calls the target function remove_question_func() below*/

    
    /*End of Q4 */

    // Resets the form fields to empty after adding question to list
    document.getElementById("questionTitleRemove").value = null;
    
}


function remove_question_func(){
    /*Q8: Perform field validation (sanity check) on the list_array to check if it is not empty.
    */
   



    /*End of Q8 */

    /*Q4: Get the value of id (to be deleted) from the HTML page. 
          Search through the list_array and identify the index to be deleted.
    */
    var questionTitle = document.querySelector(".questionTitleRemove");
   
    







    /*End of Q4 */
    
    /* Q4: Delete the item from the list_array.
           Hint: You can use the splice function for this.
    */
   


    /* End of Q4 */


     /*Q7: Write code to save list_array to persistent storage 
          This can be coded later.
    */

    /*End of Q7 */
}

/* Display Questions
Hide all the unnecessary <div> of the HTML page.
Create a new HTML table element in Javascript. 
Iterate through the list_array, add each element in the array to the Table element.
Finally, append the Table element to the "list_table_dom", where list_table_dom = document.getElementById("list");
*/
function display_questions(){
    /*Q1: Code to get a handle to all the <div> elements in the HTML page.
      Hide all the unnecessary <div> tags by setting e.g., list.style.display=none.
    */
    var addQuestionForm = document.getElementById("addQuestionForm");
    var homepage_div = document.getElementById("homepage");
    var removeQuestionForm = document.getElementById("removeQuestionForm");
    var list_table_dom = document.getElementById("list");

   
    /*End of Q1 */

    /*Q3: Create a new table element and insert the first row (i.e., table header).
          Hint: Use the insertCell function to do this.
          You can also set the style (e.g., backgroundColor, color etc.)        
    */
    
          



    /*End of Q3 */

    /*Q3: create a new local variable that has the list of latest questions (i.e., list_array)*/
   

    /*End of Q3 */

    /*Q3: Iterate through latest_list_array and create the table.
          To create an empty row, use the function insertRow()
          Later, if you want to add 2 elements to this row, use insertCell(0), insertCell(1).
          Lookup the syntax and complete the code.
    */
    





    /*End of Q3 */

    /*Finally, add the newly created table to the list_table_dom */
    list_table_dom.innerHTML = "";
    list_table_dom.append(new_list);
    
    
}