const actorAddict = {
    description: "Our application allows users to search for a movie and see the plot, director, cast, ratings, poster, news on the movie and gifs related to the movie. My core responsibilities during the creation of the project were to use the OMDB API to access the film’s plot, director, cast, ratings and poster and output this data using JQuery into the HTML. I was also responsible for creating the readme for the repository.",
    tech: ["Server side APIs: OMDB, G News, GIPHY", "3rd Party APIs: JQuery, Moment.js, Google Fonts", "CSS Framework: Skeleton", "CSS3", "HTML5"],
    deployLink: "https://sophienicholas.github.io/Famous-Fact.github.io/",
    gitHubLink: "https://github.com/SophieNicholas/Famous-Fact.github.io"
}

const weatherDash = {
    description: "",
    tech: [],
    deployLink: "",
    gitHubLink: ""
}

const codeRefactor = {
    description: "",
    tech: [],
    deployLink: "",
    gitHubLink: ""
}

$("button").on("click", function () {
    if(this.value==="0"){
        var name="Actor Addict";
        var current=actorAddict;
        
    }
    else if(this.value==="1"){
        var name="Weather Dashboard";
        var current=weatherDash;
    }
    else if(this.value==="2"){
        var name="Code Refactor";
        var current=codeRefactor;
    }
    showDetails(name, current);
});

function showDetails(name,current){
    const target=$("#output");
    target.html(" ");

    let heading=$("<h2>");
    heading.text(name);
    
    let des=$("<p>");
    des.text(current.description);
    const list =$("<ul>");
    for(let k=0;k<(current.tech).length;k++){
        let item =$("<li>").text(current.tech[k]);
        list.append(item);
    }
    let gitL=$("<a>").text("View GitHub Repository Here \n");
    gitL.attr("href",current.gitHubLink);
    let depL =$("<a>").text("View Deployed Link Here \n");
    depL.attr("href",current.deployLink);
    
    target.append(heading,des,list,gitL,depL);
}