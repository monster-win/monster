window.onload = function(){

    // Ссылка для последней страницы
    var utm = window.location.search.replace( '?', ''); 
	var link = "http://geschenkpromo.club/click.php?key=j7k8olel9wjusk74hu5x&";
	var final = link + utm;
    let a_href = final;

    let step = 0;

    showQuestion();
    document.onclick = function(event) {
        event.stopPropagation();
        if(event.target.classList.contains('answers__item') || event.target.classList.contains('image_btn')){
            step++;
            showQuestion(step);
        }
    }


    function showQuestion(questionNumber){
        let question = '';
        for (let key in quiz[step]['q']){
            question += `<div class="question__item">${quiz[step]['q'][key]}</div>`;
        }
        document.querySelector(".question").innerHTML = question;
        let answer = '';
        if(step == 0){
            answer += `<div class="answers__item">${quiz[step]['a'][1]}</div>`;
        }
        if(step == 4){
            console.log('asf');
        for (let key in quiz[step]['a']){
                answer += `<a href="${a_href}"><div class="answers__last">${quiz[step]['a'][key]}</div></a>`;
            }
        }
        if(step > 0 && step < 4){
            for (let key in quiz[step]['a']){
                answer += `<div class="answers__item">${quiz[step]['a'][key]}</div>`;
            }
        }
        document.querySelector(".answers").innerHTML = answer;
    }

    function showStart(){
        let content__text = 'Wir wählen 500 Teilnehmer zufällig aus, denen wir einen Kühlschrank mit neuen Getränken völlig kostenlos zusenden werden. Sie müssen nur eine kurze Umfrage beantworten und ein Formular  auf der Webseite ausfüllen!';
        document.querySelector(".content").innerHTML = `<div class="content__title">Freunde!</div>` +
        `<div class="content__text">${content__text}</div>` + `<div class="btn">[eq]</div>`;
    }
}

