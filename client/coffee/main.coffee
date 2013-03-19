refresh_results = (data) ->
    $('#results').empty()
    
    for identifier, response of data
        identifier_node = $("<li></li>")
        $('#results').append(identifier_node)
        identifier_node.append($("<div class='identifier_name'>#{identifier}</div>"))
        
        if response.status == 'exception'
            identifier_node.append($("<div>An exception occurred.</div>"))
            continue
        
        identifier_node.append($("<div>Best: <span class='best'>#{response.best}</span> (#{Math.round(response.result[response.best]*100)}%)</div>"))
        all_node = $("<div></div>")
        identifier_node.append(all_node)
        
        all_node.append($("<span>All: </span>"))
        
        for lang, value of response.result
            all_node.append($("<span>#{lang}(#{Math.round(value*100)}%) </span>"))

$ ->
    # create the widgets
    $('body')
        .append(new fk.TextInput(id: 'url_box', input_id: 'url_input', label: 'http://', submit_btn: new fk.Button(label: 'Identify')))
        .append(new fk.TextInput(id: 'text_box', input_id: 'text_input', label: 'Text:', submit_btn: new fk.Button(label: 'Identify')))
        .append($("<ul class='_box _flex' id='results'></ul>"))
    
    # UI callbacks
    $('#url_box').bind 'submit', (event, url) =>
        $.ajax
            url: 'http://wafi.iit.cnr.it/multilingualweb/wli/api/retrieve+identify/'+url
            method: 'GET'
            dataType: 'json'
            success: refresh_results
    
    $('#text_box').bind 'submit', (event, text) =>
        $.ajax
            url: 'http://wafi.iit.cnr.it/multilingualweb/wli/api/identify'
            method: 'POST'
            dataType: 'json'
            data: text
            success: refresh_results
            