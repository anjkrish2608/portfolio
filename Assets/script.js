const actorAddict = {
    description: "Our application allows users to search for a movie and see the plot, director, cast, ratings, poster, news on the movie and gifs related to the movie. My core responsibilities during the creation of the project were to use the OMDB API to access the film’s plot, director, cast, ratings and poster and output this data using JQuery into the HTML. I was also responsible for creating the readme for the repository.",
    tech: ["Server side APIs: OMDB, G News, GIPHY", "3rd Party APIs: JQuery, Moment.js, Google Fonts", "CSS Framework: Skeleton", "CSS3", "HTML5"],
    deployLink: "https://sophienicholas.github.io/Famous-Fact.github.io/",
    gitHubLink: "https://github.com/SophieNicholas/Famous-Fact.github.io"
}

const weatherDash = {
    description: "The application allows a user to access the current weather and 5 day forecast from a list of destinations using the Open Weather Map API. This includes the temperature in Kelvin and Farenheit, humidty, UV Index with a coloured button to represent (favourable, moderate and extreme), wind speed and a weather icon. ",
    tech: ["Server side APIs: Open Weather Map", "3rd Party APIs: JQuery, Moment.js", "CSS Framework: Bootstrap", "CSS3", "HTML5"],
    deployLink: "https://anjkrish2608.github.io/WeatherDashboard/",
    gitHubLink: "https://github.com/anjkrish2608/WeatherDashboard"
}

const codeRefactor = {
    description: "This website provided by Trilogy Education Services has been refactored to increase web accessibility, increase code efficiency in the html and css and ensure function of links.",
    tech: ["3rd Party APIs: Font Awesome, Google Fonts", "CSS3", "HTML5"],
    deployLink: "https://anjkrish2608.github.io/refactorSEO/",
    gitHubLink: "https://github.com/anjkrish2608/refactorSEO"
}

$(".projectButton").on("click", function() {
    var name =$(this).text();
    if (name === 'Actor Addict') {
        var current = actorAddict;
    }
    else if (name === "Weather Dashboard") {
        var current = weatherDash;
    }
    else if ( name === "Code Refactor") {
        var current = codeRefactor;
    }
    console.log(name, current);
    showDetails(name, current);
});


 showDetails = (name, current) => {
    const target = $("#output");
    target.html(" ");

    let heading = $("<h2>");
    heading.text(name);

    let des = $("<p>");
    des.text(current.description);
    const list = $("<ul>");
    for (let k = 0; k < (current.tech).length; k++) {
        let item = $("<li>").text(current.tech[k]);
        list.append(item);
    }
    let gitL = $("<a>").text("View GitHub Repository Here \n");
    gitL.attr("href", current.gitHubLink);
    let depL = $("<a>").text("View Deployed Link Here \n");
    depL.attr("href", current.deployLink);
    const br = $("<br>");
    target.append(heading, des, list, gitL, br, depL);
}