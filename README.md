# Find out who on your team you need to whip to do their point task

## Prerequisites
You have to have node installed to run this script. To download node go to [this website](https://nodejs.org/en/download/ "this website") and download the latest LTS version.

## Installation
After installing node, simply clone this project onto your computer.

## Configuration
Before using the script you need to go into the index.js and change the thread you want to check. To do this simply go to the point task in question and copy the thread id which are the numbers behind the ?tid= in the URL on the forums. For example for [this thread](https://forums.sim-football.com/showthread.php?tid=25277) the ID is 25277.

Copy this value and put it inside the threadID variable inside index.js. The current members of the team are saved inside the team array, you can remove or add users from/to this array by just adding or removing their forum username from the array. 

## Running the script
After you have installed node, downloaded the repo and set up which thread/point task you want to check you simply have to navigate to the folder in your terminal and run it via with "node index.js". It will then show you which people of your team have not replied to the thread and thus have not done this point task, so you easily know who to whip.
