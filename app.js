const fetchData = async () => {
    console.log('Hi I am working')
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '984bc4d8c9msh3a1deb5453c3f3bp1fe804jsnaf25c7f93d74',
            'X-RapidAPI-Host': 'wiki-briefs.p.rapidapi.com'
        }
    };
    
    var topicName = document.getElementById('topic').value;


    var response = await fetch(`https://wiki-briefs.p.rapidapi.com/search?q=${topicName}&topk=3`, options)
    var data = await response.json()

    console.log(data.summary)

    document.getElementById('wikiimage').src = data.image;
    document.getElementById('wikipara').innerText=data.summary


}


if(window.navigator.onLine ===false){
    document.getElementById("wikiimage").src="offline-internet-icon.svg"
}