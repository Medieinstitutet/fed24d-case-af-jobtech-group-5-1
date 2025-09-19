# Group Project – Build your own “Platsbanken” (job board) for a scenario of your choice using Arbetsförmedlingen’s open data..

## 📖 Project Overview

Karriärkompassen is a React-based job board that aggregates live job ads across Sweden using Arbetsförmedlingen’s JobTech open data https://jobsearch.api.jobtechdev.se/. 

The app lets users search and filter jobs, view rich job details, save favorites, and read practical career articles.

As per assignment requirements we use components from Arbetsförmedlingens Design system but we do not use there Logo or colors. 

## Features
* <strong>Search & filter</strong><br>Free-text search with filters for region (län) and occupation.

* <strong>Results & details</strong><br>Result cards with key facts; a dedicated job page with employer info, location, qualifications, and a sticky “Apply” card that links to the employer/application site.

* <strong>Saved jobs</strong><br>Toggle a heart on any result to save/unsave; a dedicated Saved page lists favorites. Persistence via localStorage.

* <strong>Articles & tips</strong><br>Curated guides for CV, interview, and salary negotiation, accessible from the homepage.

* <strong>Robust routing</strong><br>HashRouter with a custom 404 page and deep links (e.g., #/result/:id, #/artiklar/:slug, #/sparade).

* <strong>Design system integration</strong><br>Built with @digi/arbetsformedlingen web components and React wrappers for accessible, consistent UI.


## 🎥 Demo 
[Click here to view the demo](https://medieinstitutet.github.io/fed24d-case-af-jobtech-group-5-1/)

## 📸 Screenshots 

**Start page**
![Start page]()

**Result page**
![Result page]()

**Job info page**
![Job info page]()


## ✍️ Authors 
Created by: 	
- [Anna Biehl](https://github.com/biehlen) 
- [Moa Magnfors](https://github.com/mainforce) 
- [Sokol Hatija](https://github.com/koliwewe) 


## 🤝 Credits
This project was developed as part of the curriculum at [Medieinstitutet](https://medieinstitutet.se/) during our second year of studies.