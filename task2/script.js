document.getElementById("record").addEventListener('click', () => { //when the user click on button the event will start 

    const texts = document.querySelector('.texts');
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new window.SpeechRecognition();
    recognition.lang = "ar"; //set the recognition language in arabic 
    recognition.interimResults = true; //

    let p = document.createElement('p'); //create a pargraph

    recognition.addEventListener('result', (e) => { //listener to the result
        const text = Array.from(e.results)
            .map(result => result[0])//map on the first element in the list 
            .map(result => result.transcript) // map again and return the result transcript 
            .join(''); // and join the sentence 

        p.innerText = text; //the speech will appear on the white pargraph 
        texts.appendChild(p);

        if (e.results[0].isFinal) {// if the person speacking the sentsnce 
            if (text.includes('كيف حالك؟')) { // if the user said one of these sentence 
                p = document.createElement('p'); //write in new pargraph
                p.classList.add('replay'); // create a new class call replay 
                p.innerText = 'الحمدلله بخير'; // the system will interaction with this replay 
                texts.appendChild(p);
            }
            if (text.includes('ايش اسمك؟')) {
                p = document.createElement('p');
                p.classList.add('replay');
                p.innerText = ' Alexa ';
                texts.appendChild(p);
            }
            if (text.includes('افتح اليوتيوب') || text.includes("أفتح اليوتيوب")) {
                p = document.createElement('p');
                p.classList.add('replay');
                p.innerText = 'تمام';
                texts.appendChild(p);
                window.open('https://youtube.com'); // the system will interact and open youtube app
            }

            if (text.includes('السلام عليكم') || text.includes("السلام عليكم ورحمة الله وبركاته")) {
                p = document.createElement('p');
                p.classList.add('replay');
                p.innerText = ' وعليكم السلام ورحمة الله وبركاته';
                texts.appendChild(p);
            }


            p = document.createElement('p'); //write in new pargraph
        }

        console.log(e);
    })

    recognition.addEventListener('end', () => { //if the user end the speech 
        recognition.start(); //start again the recogntion 
    })



    recognition.start();
});
