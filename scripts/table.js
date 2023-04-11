export function createTable(formData){
    if($('#table').length){
        let data = $('<tr></tr>');
        for(let i of formData){
            let value = i['value'] == '' ? ' - ' : i['value'];
            data.append($('<td>'+value+'</td>'));
        }
        $('#table').append(data);
    }
    else{
        let table = $('<table id="table"></table>');
        let headings = $('<tr></tr>');
        let data = $('<tr></tr>');
        for(let i of formData){
            console.log(i['name']);
            headings.append($('<th>'+i['name']+'</th>'));
            let value = i['value'] == '' ? ' - ' : i['value'];
            data.append($('<td>'+value+'</td>'));
        }
        table.append(headings).append(data);
        return table;
    }
}