d3.select('#text_btn').on 'click', submit_text
d3.select('#text_input').on 'keyup', () -> submit_text() if d3.event.keyCode is 13

submit_text = () ->
  text = d3.select('#text_input').node().value
  
  d3.json('http://wafi.iit.cnr.it/multilingualweb/wli/api/identify')
    .post text, (error, data) ->
      throw error if error
      
      console.log data
      redraw data
      
d3.select('#url_btn').on 'click', submit_url
d3.select('#url_input').on 'keyup', () -> submit_url() if d3.event.keyCode is 13

submit_url = () ->
  url = d3.select('#url_input').node().value
  
  d3.json 'http://wafi.iit.cnr.it/multilingualweb/wli/api/retrieve+identify/'+url, (data) ->
    console.log data
    redraw data
    
    
redraw = (data_obj) ->
  data = Object.keys(data_obj).map (k) ->
    data_obj[k].id = k
    return data_obj[k]
  
  identifiers = d3.select('#results').selectAll('.identifier')
    .data data, (d) -> d.id
    
  identifiers.enter().append('li')
    .attr
      class: 'identifier'
    
  identifiers
    .classed('error', (d) -> d.status isnt 'ok')
    .html (d) ->
      if d.status is 'ok'
        return "<span class='identifier_name'>#{d.id}</span><br>#{d.best} (<span class='best'>#{d.best_name}</span>) #{d3.format('%')(d.result[d.best])}"
      else
        return "<span class='identifier_name'>#{d.id}</span>"
    
  identifiers.exit()
    .remove()
    