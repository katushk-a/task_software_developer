export function createTextField(label){
    let field = $('<div id="'+label+'"></div>');
    let labelForField = $('<label for="'+label+'">'+label+'</label>');
    let input = $('<input type="text" class="field" name="'+label+'" placeholder="Enter '+label+' here..." />');
    let deleteButton = $('<button class="deletebutton" id="'+label+'">Delete</button>');
    deleteButton.click(function(event){
        event.preventDefault();
        $(this).parent().remove();
    });
    field.append(labelForField).append(input).append(deleteButton);
    return field;
}

export function addNewTextField(fieldsDiv){
    $('form').hide();
    let newFieldForm = $('<form class="newfieldform"></form>');
    let heading = $('<h2>Choose the name of the field: </h2>');
    let nameField = $('<input type="text" class="field" name="nameTextField" placeholder="Enter the name here..." />');
    let cancel = $('<button>Cancel</button>');
    cancel.click(function(){
        newFieldForm.remove();
        $('form').show();
    });
    let submit = $('<input type="submit" class="submit" value="Create new Field"/>');
    newFieldForm.append(heading).append(nameField).append(cancel).append(submit);
    $('body').append(newFieldForm);
    newFieldForm.submit(function(event){
        event.preventDefault();
        let name = newFieldForm.find('input[name="nameTextField"]').val();
        let newTextField = createTextField(name);
        $('form').show();
        newFieldForm.remove();
        fieldsDiv.append(newTextField);
    });
}