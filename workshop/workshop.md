# A web maps workshop

I gave a workshop on web maps (and cartography in general) to a class of 20 students. This document sums up how it went and what could be improved, as note-to-self kind of thing that could maybe be helpful to others :)

## Audience

- Gobelins, a school in Paris that teaches animation, photography, graphic design, etc.
- a multimedia class of 40 students, half graphic designers, half developers. This workshop was targeted at the developers.
- average age is 20-22 years.
- students are already proficient JS developers, and dabbled with WebGL, iOs dev, stuff like that. Some of them already won a few awards (FWA/SOTD kind). See http://workshop.crma2016.gobelins.fr/
- students are in class half of the time, the other half working as apprentices. Mostly in advertising/digital agencies (80% of them).
- to sum up: "junior creative coders"

## Goal

- show students a **panorama** of classical and modern cartography, creative uses of it, data design, etc, to give them some ideas and inspiration. Show them how cartography overlaps with a lot of other disciplines: art, technology, code, science, history, politics...
- give them a **survival toolkit** to make web maps, whether in their agencies or for their students projects. Give them worth a few months of tips I accumulated in a nutshell. You know, so that they know their map may be messed up because GeoJSON is lon/lat and not lat/lon :)
- leave them with a few presentations that they can use as a **reference** and a good collection of links.

## So what was the plan?

- *presentation* : [Maps showcase](http://nerik.github.io/gobelins-carto/prez/showcase/showcase.html)
Goal: shoot a maximum of beautiful/interesting/provocative maps to get them out of their morning lethargia.

- *hands-on* : Make a Map
Quick demo of Mapbox Studio Classic/Carto. Download and install.
Make the ugliest map possible, an idea I stole from @bhecht https://twitter.com/bhecht/status/450633836636803073

- *presentation* : [Anatomy of a web map](http://nerik.github.io/anatomy-of-a-web-map/index_fr.html)

- *hands-on* : Make a web map
Integrate the ugly basemap made earlier in a leaflet map.
GeoJSON.io
Add a geojson overlay.
Convert shapefiles and csv files to GeoJSON using easily accessible tools (online)

- lunch break

- *presentation* : [The OpenStreetMap revolution](http://nerik.github.io/gobelins-carto/prez/OSM/OSM.html)

- <s>*hands-on* : Editing on JOSM/using the HOT task manager</s> -> didn't have enough time to do it

- *hands-on* : CartoDB

- *hands-on* : Mapbox GL/the new Mapbox Studio

- *hands-on* : 3D


## A few thoughts

- "make an ugly map" is a good idea. Made students confortable with a new tool and didn't limited the few of them that actually wanted to make a pretty map :)  

- I originally planned to have a global theme for the whole day, so that both the hands-on parts and the overall workshop day had a clear objective. The theme I had in mind was : following the steps of Kilian Jornet, an alpinist and trail runner. Use the theme as a pretext to play with GPX tracks, 3D topography, etc.
Turned out that data was too difficult to get, and this theme was not versatile enough, so I gave up on the "global workshop theme" thing. I think it was a mistake. Keeping students involved towards the end of the workshop would have been easier with this.

- Giving them Mapbox access

- Surprisingly, the OSM presentation was maybe the one that got them the most interested, or at least the one that raised the most questions and discussions.

- I used [Big](https://github.com/tmcw/big) for presentations. I've yet to find a tool as efficient and simple. It lacks a progress bar, next time I will add it.
