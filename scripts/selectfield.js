import { createTextField } from './textfield.js';

export function createSelectField(label, options){
    let field = $('<div id="'+label+'"></div>');
    let labelForField = $('<label for="'+label+'">'+label+'</label>');
    let select = $('<select class="field" name="'+label+'" id="'+label+'"></select>');
    for(let i = 0; i<options.length; i++){
        select.append($('<option value="'+options[i]+'">'+options[i]+'</option>'))
    }
    let deleteButton = $('<button class="deletebutton" id="'+label+'">Delete</button>');
    deleteButton.click(function(event){
        event.preventDefault();
        $(this).parent().remove();
    });
    
    field.append(labelForField).append(select).append(deleteButton);
    return field;
}

export function addNewSelectField(fieldsDiv){
    $('form').hide();
    let newFieldForm = $('<form class="newfieldform"></form>');
    let heading = $('<h2>Choose the name of the field and enter the options: </h2>');
    let nameField = $('<input type="text" class="field" name="nameSelectField" placeholder="Enter the name here..." />');
    let optionsDiv = $('<div></div>');
    let labelForField1 = $('<label for="Option 1">Option 1</label>');
    let option1 = $('<input type="text" class="field" name="Option 1" placeholder="Enter the Option 1 here..." />');
    let labelForField2 = $('<label for="Option 2">Option 2</label>');
    let option2 = $('<input type="text" class="field" name="Option 2" placeholder="Enter the Option 2 here..." />');
    optionsDiv.append($('<div></div>').append(labelForField1).append(option1)).append($('<div></div>').append(labelForField2).append(option2));
    let optionscounter = 2;
    let addnewFieldbutton = $('<button>Add one more option</button>');
    addnewFieldbutton.click(function(event){
        event.preventDefault();
        optionscounter++;
        optionsDiv.append(createTextField('Option '+optionscounter));
    });
    let cancel = $('<button>Cancel</button>');
    cancel.click(function(){
        newFieldForm.remove();
        $('form').show();
    });
    let submit = $('<input type="submit" class="submit" value="Create new Field"/>');
    newFieldForm.append(heading).append(nameField).append(optionsDiv).append(addnewFieldbutton).append(cancel).append(submit);
    $('body').append(newFieldForm);
    newFieldForm.submit(function(event){
        event.preventDefault();
        let name = newFieldForm.find('input[name="nameSelectField"]').val();
        let options = [];
        newFieldForm.find('input[name*="Option"]').each(function(){
            options.push(this.value);
        });
        let newSelectField = createSelectField(name, options);
        $('form').show();
        newFieldForm.remove();
        fieldsDiv.append(newSelectField);
    });
}
