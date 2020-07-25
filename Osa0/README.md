0.4: 

selain->palvelin: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note

note over selain: 
Selain lähettää uuden noten palvelimelle ja palvelin antaa redirectaus ohjeen joka kehottaa 
selainta lähettämään uuden HTTP GET-pyynnön /notes :lle.  
end note

palvelin-->selain: HTML koodi
selain->palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
palvelin-->selain: Main.css
selain->palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js
palvelin-->selain: main.js 

selain pyörittää js koodin, joka pyytää data.json palvelimelta. 

selain->palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
palvelin-->selain: {content: "HTML is easy", date: "2019-05-23T17:30:31.098Z"},…]
[0 … 99]
[100 … 117]


selain suorittaa tapahtumakäsittelijän, joka renderöi muistiinpanot. 




0.5:

selain->palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa
palvelin-->selain: HTML koodi. 
selain->palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
palvelin--> selain: main.css
selain->palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa.js
palvelin-->selain: spa.js

selain suorittaa js koodin ja pyytää data.json

selain->palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
palvelin->selain: data.json

selain suorittaa tapahtumakäsittelijän, joka renderöi muistiinpanot. 




0.6:


Javascript koodi hakee sivulta lomake elementin ja määrittelee sille tapahtumakäsittelijän. 
Se estää lomakkeen lähettämisen ja sivun uudelleen lataamisen. 
Se lisää uuden muistiinpanon listalle ja piirtää muistiinpanojen listan uudelleen ja 
lähettää sitten uuden muistiinpanon palvelimelle. 


selain->palvelin: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note_spa
