var elsRaw = [
{
	'header': "",
	'text': ""
},
{
	'header': "<strong>APUSH Final Project</strong>",
	'text': ""
},
{
	'header': "",
	'text': ""
},
{
	'header': "Background",
	'text': "In 1875, precious metals such as gold were found in the <b>Black Hills</b> region in the Lakota Sioux Reservation . . . <br> . . . causing miners to flock to it, in violation of an 1862 treaty guaranteeing Native American ownership of the land . . . <br> . . . sparking violent Native American resistance . . . <br> . . . prompting the US to send in Federal troops . . . <br> . . . leading to the <b>Great Sioux War of 1867</b>."
},
{
	'header': "But what if . . .",
	'text': ". . . <b>gold was never found in the Black Hills?</b>"
},
{
	'header': "Who cares?",
	'text': "The Sioux Wars changed the face of Native tribes in the region and their relationship to the US . . . <br> . . . many respected leaders were bought out by US officials . . . <br> . . . others were killed . . . <br> . . . still others rose to prominence. <br><br> If the Sioux Wars hadn't happened . . ."
},
{
	'header': "Crazy Horse Lives Longer",
	'text': "Crazy Horse, war leader of the Oglala Lakota, led his people to many victories during the Sioux Wars--in particular, the Battle of the Little Bighorn. He was assasinated at the war's conclusion, with the aid of Little Big Man, a Lakota who had been bought out by the US. <br><br> <b>If the Sioux War hadn't occured, Crazy Horse would have remained alive a few years longer</b>."
},
{
	'img': "images/Crazy Horse.jpg",
	'caption': "Crazy Horse, war leader of the Oglala Sioux."
},
{
	'header': "Sitting Bull Doesn't Become Famous",
	'text': "During the Sioux Wars, Chief Sitting Bull was a strong leader of his people, and became a prominent opponent of US expansion. <br><br> <b>Without the wars, he would not have had the chance to become so well-known</b>."
},
{
	'header': "Okay . . .",
	'text': "All this matters because of the rise of the Ghost Dance around 1885 . . . <br> . . . the Ghost Dance was a religious movement that involved large group dances, which agitated the US armed forces, who anticipated violence . . . <br> . . . they compiled a \'list of fomenters of disturbance\' who were helping spread the religion, and targeted those Native leaders."
},
{
	'img': "images/Fomenters.jpg",
	'caption': "Crazy Horse is targeted by the US government for proliferating the Ghost Dance."
},
{
	'header': "The Hit List",
	'text': ". . . in \'real\' history, Sitting Bull was on the list, as he had gained great influence among the Sioux during the war, and was subsequently assassinated . . . <br> . . . but if the wars never happened, he would not have been on that list . . . <br> . . . but Crazy Horse, who has not been killed, would have certainly led his people in the Ghost Dance and been targeted by the US military. <br><br> <b>As a result, Sitting Bull doesn't become a major figure, and Crazy Horse is targeted and killed in 1885</b> . . . <br> . . . which means . . ."
},
{
	'header': "Little Big Man Dies a Hero",
	'text': ". . . because the Sioux Wars didn't happen, Little Big Man wasn't bought out by the US, and so remained loyal to the Native cause . . . <br> . . . Little Big Man, in fact, was highly passionate about resisting the US, threatening to \"kill the first chief who speaks for selling the Black Hills\" when negotiations first began . . . <br> . . . this passion remains with him, and when Crazy Horse is killed, violence erupts with him at the head . . . <br> . . . but unlike Crazy Horse, who spent years studying ways to fight US cavalry and advanced weaponry, Little Big Man was not experienced enough, and lost. <br><br> <b>Thus, the Battle of the Little Bighorn becomes another Native American defeat, rather than a victory.</b>"
},
{
	'img': "images/Journal.jpg",
	'caption': "A US soldiers journal entry from 1881, detailing the calm state of the Wounded Knee area."
},
{
	'header': "The Wounded Knee Massacre Never Happens",
	'text': "In 1890, after the assassination of Sitting Bull, Chief Big Foot moved his people toward the Red Cloud Reservation for safety . . . <br> . . .  along the way, they were intercepted by a US army patrol, taken to a camp called Wounded Knee, and disarmed. <br> It was at this site that the infamous Wounded Knee massacre took place. <br> If Sitting Bull was never assassinated, however . . . <br> . . . Big Foot would have never moved at all, and thus he wouldn't have been stopped at Wounded Knee, and <b>the infamous massacre never would have happened</b>."
},
{
	'header': "Fast Forward to the 21th Century . . . ",
	'text': "In 1968, Native American resistance resurged in the form of the American Indian Movement . . . <br> . . . AIM demanded everything from restoration of tribal culture to legal protection, using many highly publicized protests to bring attention to their movement. <br><br> In 1973, they militantly occupied the site of the Wounded Knee massacre."
},
{
	'header': "No Wounded Knees",
	'text': "Bradley Patterson and Leonard Garment, the BIA men in charge of putting down the protests, knew that they could not allow another \'Wounded Knee\' to happen, especially not at Wounded Knee, or else the public would turn against them . . . <br> . . . But if Wounded Knee never happened in the first place, then they would have resorted to violence much faster . . . <br> . . . the 71-day long occupation, during which the Native Americans were trapped in a strategically indefensible position, surrounded by police with tanks and jets, underarmed, and undermanned, would have certainly been ended early in gunfire . . . and <b>the Pine Ridge occupation of 1973 would have turned into a massacre</b>."
},
{
	'img': "images/Obama.png",
	'caption': "A captioned image from a Time magazine article about remembering the Pine Ridge Massacre."
},
{
	'img': "images/Ghost Dance.gif",
	'caption': "An artistic rendering of the traditional Ghost Dance."
},
{
	'header': "The Modern Ghost Dance",
	'text': "After the Wounded Knee Massacre, which had been caused mainly by agitation toward the Ghost Dance, the ritual rapidly lost popularity among Native tribes . . . <br> . . . if Wounded Knee hadn't happened, however, there would have been no reason for it to stop . . . <br> . . . as a result, <b>the Ghost Dance would continue to be practiced by Indian tribes even today</b>."
},
{
	'img': "images/Flyer.jpg",
	'caption': "A modern invitation for a Ghost Dance event."
}
];

// measured in pixels
var currentPos = 0;
var currentSlide = 0;

var elWidth;
var els = [];

$(document).ready(function() {
	for (var i = 0; i < elsRaw.length; i++) {
		var el = document.createElement("div");
		el.classList.add("col");
		if (elsRaw[i].hasOwnProperty("img")) {
			var url = elsRaw[i]['img'];
			var cap = elsRaw[i]['caption'];
			el.innerHTML = "<a class=\'fancybox\' href=\'" + url + "\' title=\'" + cap + "\'><img src=\'" + elsRaw[i]['img'] + "\'></a>";
		} else {
			el.innerHTML = "<h1>" + elsRaw[i]['header'] + "</h1>" +
							"<p>" + elsRaw[i]['text'] + "</p>";
		}
		$(".wrapper").append(el);
		els.push(el);
	}

	// init timeline
	var buttons = $(".timeline li");
	[].forEach.call(buttons, function(el, i) {
		// set click scroll:
		el.onclick = function() {
			slide(3 * (el.dataset.i - currentSlide));
		}

		// set width:
		var data = i < buttons.length - 1 ? (buttons[i+1].dataset.date - el.dataset.date) * 5 : 0;
		el.style.width = data + "px";

		// set hover caption
		el.onmouseover = function() {
			var text = el.dataset.date + ": " + el.getAttribute("name");
 			$(".caption").text(text).animate({opacity: 1});
		};
		el.onmouseleave = function() {
			$(".caption").animate({opacity: 0});
		}
	});

	elWidth = els[0].offsetWidth;
});



$(window).resize(function() {
	elWidth = els[0].offsetWidth;
});

// +1 is one panel to the left, -1 is one panel to the right
function slide(panels) {
	var targetPos = -(currentPos + panels * elWidth);
	els.forEach(function(el) {
		el.style.transform = "translate(" + targetPos + "px, 0)";
	});
	currentPos = -targetPos;
	currentSlide += panels / 3;
}
