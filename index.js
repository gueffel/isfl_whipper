const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

let threadID = "25506";
const baseUrl = "https://forums.sim-football.com/";
const parsedResults = [];
const url = baseUrl + "showthread.php?tid=" + threadID;
const team = ["r0tzbua", "OrbitingDeath", "SlurmsMckenzie", "nexus1353", "bj_owns", "TheWoZy", "AirCrou", "Nowordofalie", "Asked Madden", "nutbarspadge", "Oneski", "Regius", "McCransky", "zaynzk", "DingusDiddler", "Kai", "Bkfootball", "ReverendOReily", "Official DT", "DunkinDuncan", "Skyfish", "xTri", "PigSnout", "Kyamprac", "hexify"];

console.log(`Scraping of ${url} initiated ...\n`);

const getThreadContent = async (url) => {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    $(".post_author").each((i, el) => {
      const user = $(el).children().children().first().text();
      parsedResults.push(user);

      // parsedResults.push(metadata);
    });

    const nextPageLink = $(".pagination")
      .find(".pagination_current")
      .next("a")
      .attr("href");

    if (nextPageLink === undefined) {
      console.log(team.filter( e => !parsedResults.includes(e)) );
      return false;
    }

    console.log(`Scraping: ${nextPageLink}`);
    getThreadContent(baseUrl + nextPageLink);
  } catch (error) {
    console.log(team.filter( e => !parsedResults.includes(e)) );
    console.error(error);
  }
};

getThreadContent(url);
