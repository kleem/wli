$ ->
    $('body').append(new fk.TextInput(id: 'search_box', input_id: 'search', submit_btn: new fk.Button(label: 'Identify')))
    
    $('#search_box').bind 'submit', (event, text) =>
        console.log(text)
        