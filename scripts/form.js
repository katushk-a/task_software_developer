import { createTextField, addNewTextField } from './textfield.js';
import { createSelectField, addNewSelectField } from './selectfield.js';
import { createTable } from './table.js';

export function createForm(){
    let form = $('<form id="form"></form>');
    let heading = $('<h1>Fill in the form:</h1>');
    let submit = $('<input type="submit" class="submit" value="Submit"/>');
    let fields = $('<div></div>');
    let nameField = createTextField("Name");
    let genderField = createSelectField("Gender", ["male", "female"]);
    fields.append(nameField).append(genderField);
    let addingButtonsDiv = $('<div></div>');
    let addTextButton = $('<button>Add new Text Field</button>');
    addTextButton.click(function(event){
        event.preventDefault();
        if(!$('#table').length){
            addNewTextField(fields);
        }else{
            alert("WARNING! You already generated a table! If you want to add new fields to the form, you have to reload it. For that, please click the 'Reload the form' button.");
        }
    });
    let addSelectButton = $('<button>Add new Select Field</button>');
    addSelectButton.click(function(event){
        event.preventDefault();
        if(!$('#table').length){
            addNewSelectField(fields);
        }else{
            alert("WARNING! You already generated a table! If you want to add new fields to the form, you have to reload it. For that, please click the 'Reload the form' button.");
        }
    });
    addingButtonsDiv.append(addTextButton).append(addSelectButton);
    form.append(heading).append(fields).append(addingButtonsDiv).append(submit);  
    form.submit(function(event){
        event.preventDefault();
        let formData = $(this).serializeArray();
        console.log(formData);
        let table = createTable(formData);
        let reload = $('#reload').length ? $('#reload') : $('<button id="reload" >Reload the form</button>');
        reload.click(function() {
            location.reload();
         });
        $('body').append(table).append(reload);
    });
    return form;
}