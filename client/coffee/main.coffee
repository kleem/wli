$ ->
    # create the widgets
    $('body')
        .append(new fk.TextInput(id: 'search_box', input_id: 'search', submit_btn: new fk.Button(label: 'Identify')))
        .append($("<ul class='_box _flex' id='results'></ul>"))
    
    # initialize D3.js
    results = d3.select('#results')
    pretty = d3.format('02%')
    
    # UI callbacks
    $('#search_box').bind 'submit', (event, url) =>
        d3.json 'http://wafi.iit.cnr.it/multilingualweb/wli/api/retrieve+identify/'+url, (data) =>
            results.selectAll('.identifier')
                .data(d3.entries(data), (d) -> d.key)
                .enter()
                    .append('li')
                        .attr('class', 'identifier')
                        .text((d) -> d.key)
                        .append('ul')
                        .selectAll('.lang')
                            .data((d) -> d.value.result)
                            .enter()
                                .append('li')
                                    .attr('class', 'lang')
                                    .text((d) -> d[0] + ' ' + pretty(d[1]))