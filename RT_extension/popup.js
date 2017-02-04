$(document).ready(function(){
    function d(c){
        console.log(c)
    }
    $('#rt').click(function(){
        var mov = $('input:text').val()
    //open new link with movie title name
        var movUpdate = mov.replace(/ /g,'_')
        var link = "http://www.rottentomatoes.com/m/" + movUpdate
        chrome.tabs.create({"url":link,"active":false})

        })

    chrome.storage.onChanged.addListener(function(changes, areaName) { //updates the ratings
    // Do whatever you want with the changes.
    console.log('changed!')
    chrome.storage.local.get("keyName",function(items) {
        console.log(items)
        console.log(items.keyName)
        var criticsscore = items.keyName[0]
        var audiencescore = items.keyName[1]
        $('#criticsscore').html('Critics ' + criticsscore)
        $('#audiencescore').html('Audience ' + audiencescore)
        $('#title').html(items.keyName[2])
    // Do something with items.keyName
});
});    

    chrome.storage.local.get("keyName",function(items) {//initialize the application
        console.log(items)
        console.log(items.keyName)
        var critics = items.keyName[0]
        var people = items.keyName[1]
        $('#criticsscore').html('Critics ' + critics)
        $('#audiencescore').html('Audience ' + people)
        $('#title').html(items.keyName[2])

    // Do something with items.keyName
});
})